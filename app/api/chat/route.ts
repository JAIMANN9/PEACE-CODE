import { type NextRequest, NextResponse } from "next/server"

const HUGGING_FACE_API_URL =
  "https://api-inference.huggingface.co/models/tanusrich/Mental_Health_Chatbot/v1/chat/completions"
const HUGGING_FACE_TOKEN = process.env.HF_TOKEN || ""

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    const response = await fetch(HUGGING_FACE_API_URL, {
      method: "POST",
      headers: {
        ...(HUGGING_FACE_TOKEN && { Authorization: `Bearer ${HUGGING_FACE_TOKEN}` }),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "tanusrich/Mental_Health_Chatbot",
        messages: [
          {
            role: "system",
            content:
              "You are a compassionate mental health assistant. Provide supportive, empathetic responses to help users with their mental health concerns. Always be understanding and encouraging.",
          },
          {
            role: "user",
            content: message,
          },
        ],
        max_tokens: 200,
        temperature: 0.7,
        stream: false,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Hugging Face API error:", errorText)

      return await tryLegacyAPI(message)
    }

    const result = await response.json()

    let botResponse = ""
    if (result.choices && result.choices.length > 0) {
      botResponse = result.choices[0].message?.content || "I understand you're reaching out. How can I help you today?"
    } else {
      botResponse = "I understand you're reaching out. How can I help you today?"
    }

    return NextResponse.json({
      response: botResponse,
    })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

async function tryLegacyAPI(message: string) {
  try {
    const legacyURL = "https://api-inference.huggingface.co/models/tanusrich/Mental_Health_Chatbot"

    const response = await fetch(legacyURL, {
      method: "POST",
      headers: {
        ...(HUGGING_FACE_TOKEN && { Authorization: `Bearer ${HUGGING_FACE_TOKEN}` }),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: message,
        parameters: {
          max_new_tokens: 200,
          temperature: 0.7,
          top_k: 50,
          top_p: 0.9,
          repetition_penalty: 1.2,
          return_full_text: false,
        },
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Legacy Hugging Face API error:", errorText)
      return NextResponse.json(
        {
          response:
            "I'm here to support you. While I'm having some technical difficulties, please know that your feelings are valid and you're not alone. How are you feeling today?",
        },
        { status: 200 },
      )
    }

    const result = await response.json()

    let botResponse = ""
    if (Array.isArray(result) && result.length > 0) {
      botResponse =
        result[0].generated_text || result[0].text || "I understand you're reaching out. How can I help you today?"
    } else if (result.generated_text) {
      botResponse = result.generated_text
    } else {
      botResponse = "I understand you're reaching out. How can I help you today?"
    }

    // Clean up response if it includes the input
    if (botResponse.startsWith(message)) {
      botResponse = botResponse.substring(message.length).trim()
    }

    return NextResponse.json({
      response: botResponse || "I'm here to listen and support you. What's on your mind?",
    })
  } catch (error) {
    console.error("Legacy API fallback error:", error)
    return NextResponse.json(
      {
        response:
          "I'm here to support you. While I'm having some technical difficulties, please know that your feelings are valid and you're not alone. How are you feeling today?",
      },
      { status: 200 },
    )
  }
}
