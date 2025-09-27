"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export type Language = "en" | "hi" | "ta" | "te" | "bn" | "mr" | "gu" | "kn" | "ml" | "or"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    "nav.aiSupport": "AI Support",
    "nav.counseling": "Counseling",
    "nav.resources": "Resources",
    "nav.community": "Community",
    "nav.screening": "Screening",
    "nav.analytics": "Analytics",
    "nav.language": "English",

    // Home Page
    "home.title": "Welcome to Peace Code",
    "home.subtitle":
      "A comprehensive Digital Psychological Intervention System for students with AI-guided support, professional counseling, and peer community.",
    "home.getAISupport": "Get AI Support",
    "home.takeScreening": "Take Screening",
    "home.mentalHealthSupport": "Comprehensive Mental Health Support",
    "home.platformIntegrates":
      "Our platform integrates AI-guided first-aid, professional counseling, educational resources, and peer support.",

    // AI Support
    "ai.title": "AI First-Aid Support",
    "ai.subtitle":
      "Get immediate mental health support with our AI-powered chatbot. Available 24/7 to provide coping strategies and connect you with professional help when needed.",
    "ai.howHelps": "How AI Support Helps",
    "ai.available247": "24/7 Availability",
    "ai.availableDesc": "Get support anytime, day or night",
    "ai.confidential": "Confidential & Safe",
    "ai.confidentialDesc": "Your conversations are private and secure",
    "ai.professionalReferrals": "Professional Referrals",
    "ai.referralsDesc": "Connected to real counselors when needed",

    // Screening
    "screening.title": "Mental Health Screening Tools",
    "screening.subtitle":
      "Take standardized psychological assessments to better understand your mental health and get personalized recommendations for support.",
    "screening.phq9": "Depression Screening",
    "screening.gad7": "Anxiety Assessment",
    "screening.ghq12": "General Health",

    // Common
    "common.bookCounseling": "Book Counseling",
    "common.getCommunitySupport": "Get Community Support",
    "common.browseResources": "Browse Resources",
    "common.crisis": "Crisis Support",
    "common.confidential": "Confidential",
    "common.anonymous": "Anonymous",
  },
  hi: {
    // Navigation
    "nav.aiSupport": "AI सहायता",
    "nav.counseling": "परामर्श",
    "nav.resources": "संसाधन",
    "nav.community": "समुदाय",
    "nav.screening": "जांच",
    "nav.analytics": "विश्लेषण",
    "nav.language": "हिंदी",

    // Home Page
    "home.title": "Peace Code में आपका स्वागत है",
    "home.subtitle":
      "छात्रों के लिए एक व्यापक डिजिटल मनोवैज्ञानिक हस्तक्षेप प्रणाली जिसमें AI-निर्देशित सहायता, पेशेवर परामर्श और सहकर्मी समुदाय शामिल है।",
    "home.getAISupport": "AI सहायता प्राप्त करें",
    "home.takeScreening": "जांच करवाएं",
    "home.mentalHealthSupport": "व्यापक मानसिक स्वास्थ्य सहायता",
    "home.platformIntegrates":
      "हमारा प्लेटफॉर्म AI-निर्देशित प्राथमिक चिकित्सा, पेशेवर परामर्श, शैक्षिक संसाधन और सहकर्मी सहायता को एकीकृत करता है।",

    // AI Support
    "ai.title": "AI प्राथमिक चिकित्सा सहायता",
    "ai.subtitle":
      "हमारे AI-संचालित चैटबॉट के साथ तत्काल मानसिक स्वास्थ्य सहायता प्राप्त करें। मुकाबला रणनीति प्रदान करने और आवश्यकता पड़ने पर पेशेवर सहायता से जोड़ने के लिए 24/7 उपलब्ध।",
    "ai.howHelps": "AI सहायता कैसे मदद करती है",
    "ai.available247": "24/7 उपलब्धता",
    "ai.availableDesc": "दिन या रात किसी भी समय सहायता प्राप्त करें",
    "ai.confidential": "गोपनीय और सुरक्षित",
    "ai.confidentialDesc": "आपकी बातचीत निजी और सुरक्षित है",
    "ai.professionalReferrals": "पेशेवर रेफरल",
    "ai.referralsDesc": "आवश्यकता पड़ने पर वास्तविक परामर्शदाताओं से जुड़े",

    // Screening
    "screening.title": "मानसिक स्वास्थ्य जांच उपकरण",
    "screening.subtitle":
      "अपने मानसिक स्वास्थ्य को बेहतर ढंग से समझने और सहायता के लिए व्यक्तिगत सिफारिशें प्राप्त करने के लिए मानकीकृत मनोवैज्ञानिक मूल्यांकन लें।",
    "screening.phq9": "अवसाद जांच",
    "screening.gad7": "चिंता मूल्यांकन",
    "screening.ghq12": "सामान्य स्वास्थ्य",

    // Common
    "common.bookCounseling": "परामर्श बुक करें",
    "common.getCommunitySupport": "समुदायिक सहायता प्राप्त करें",
    "common.browseResources": "संसाधन देखें",
    "common.crisis": "संकट सहायता",
    "common.confidential": "गोपनीय",
    "common.anonymous": "अज्ञात",
  },
  ta: {
    // Navigation
    "nav.aiSupport": "AI ஆதரவு",
    "nav.counseling": "ஆலோசனை",
    "nav.resources": "வளங்கள்",
    "nav.community": "சமூகம்",
    "nav.screening": "பரிசோதனை",
    "nav.analytics": "பகுப்பாய்வு",
    "nav.language": "தமிழ்",

    // Home Page
    "home.title": "Peace Code இல் உங்களை வரவேற்கிறோம்",
    "home.subtitle":
      "AI-வழிகாட்டுதல் ஆதரவு, தொழில்முறை ஆலோசனை மற்றும் சக சமூகத்துடன் மாணவர்களுக்கான ஒரு விரிவான டிஜிட்டல் உளவியல் தலையீட்டு அமைப்பு.",
    "home.getAISupport": "AI ஆதரவு பெறுங்கள்",
    "home.takeScreening": "பரிசோதனை எடுங்கள்",
    "home.mentalHealthSupport": "விரிவான மன நலம் ஆதரவு",
    "home.platformIntegrates":
      "எங்கள் தளம் AI-வழிகாட்டுதல் முதலுதவி, தொழில்முறை ஆலோசனை, கல்வி வளங்கள் மற்றும் சக ஆதரவை ஒருங்கிணைக்கிறது.",

    // AI Support
    "ai.title": "AI முதலுதவி ஆதரவு",
    "ai.subtitle":
      "எங்கள் AI-இயங்கும் சாட்பாட் மூலம் உடனடி மன நல ஆதரவு பெறுங்கள். சமாளிப்பு உத்திகளை வழங்கவும் தேவைப்படும்போது தொழில்முறை உதவியுடன் இணைக்கவும் 24/7 கிடைக்கும்.",
    "ai.howHelps": "AI ஆதரவு எவ்வாறு உதவுகிறது",
    "ai.available247": "24/7 கிடைக்கும்",
    "ai.availableDesc": "பகல் அல்லது இரவு எந்த நேரத்திலும் ஆதரவு பெறுங்கள்",
    "ai.confidential": "ரகசியம் மற்றும் பாதுகாப்பு",
    "ai.confidentialDesc": "உங்கள் உரையாடல்கள் தனிப்பட்டவை மற்றும் பாதுகாப்பானவை",
    "ai.professionalReferrals": "தொழில்முறை பரிந்துரைகள்",
    "ai.referralsDesc": "தேவைப்படும்போது உண்மையான ஆலோசகர்களுடன் இணைக்கப்பட்டுள்ளது",

    // Screening
    "screening.title": "மன நல பரிசோதனை கருவிகள்",
    "screening.subtitle":
      "உங்கள் மன நலத்தை நன்கு புரிந்துகொள்ளவும் ஆதரவுக்கான தனிப்பயனாக்கப்பட்ட பரிந்துரைகளைப் பெறவும் தரப்படுத்தப்பட்ட உளவியல் மதிப்பீடுகளை எடுங்கள்.",
    "screening.phq9": "மனச்சோர்வு பரிசோதனை",
    "screening.gad7": "கவலை மதிப்பீடு",
    "screening.ghq12": "பொது நலம்",

    // Common
    "common.bookCounseling": "ஆலோசனை பதிவு செய்யுங்கள்",
    "common.getCommunitySupport": "சமூக ஆதரவு பெறுங்கள்",
    "common.browseResources": "வளங்களை உலாவுங்கள்",
    "common.crisis": "நெருக்கடி ஆதரவு",
    "common.confidential": "ரகசியம்",
    "common.anonymous": "அநாமதேய",
  },
  te: {
    // Navigation
    "nav.aiSupport": "AI మద్దతు",
    "nav.counseling": "కౌన్సెలింగ్",
    "nav.resources": "వనరులు",
    "nav.community": "కమ్యూనిటీ",
    "nav.screening": "స్క్రీనింగ్",
    "nav.analytics": "విశ్లేషణలు",
    "nav.language": "తెలుగు",

    // Home Page
    "home.title": "Peace Code కు స్వాగతం",
    "home.subtitle": "AI-గైడెడ్ మద్దతు, వృత్తిపరమైన కౌన్సెలింగ్ మరియు పీర్ కమ్యూనిటీతో విద్యార్థుల కోసం సమగ్ర డిజిటల్ మానసిక జోక్య వ్యవస్థ.",
    "home.getAISupport": "AI మద్దతు పొందండి",
    "home.takeScreening": "స్క్రీనింగ్ తీసుకోండి",
    "home.mentalHealthSupport": "సమగ్ర మానసిక ఆరోగ్య మద్దతు",
    "home.platformIntegrates": "మా ప్లాట్‌ఫారమ్ AI-గైడెడ్ ప్రథమ చికిత్స, వృత్తిపరమైన కౌన్సెలింగ్, విద్యా వనరులు మరియు పీర్ మద్దతును ఏకీకృతం చేస్తుంది.",

    // AI Support
    "ai.title": "AI ప్రథమ చికిత్స మద్దతు",
    "ai.subtitle":
      "మా AI-శక్తితో కూడిన చాట్‌బాట్‌తో తక్షణ మానసిక ఆరోగ్య మద్దతు పొందండి. కోపింగ్ వ్యూహాలను అందించడానికి మరియు అవసరమైనప్పుడు వృత్తిపరమైన సహాయంతో కనెక్ట్ చేయడానికి 24/7 అందుబాటులో ఉంది.",
    "ai.howHelps": "AI మద్దతు ఎలా సహాయపడుతుంది",
    "ai.available247": "24/7 అందుబాటు",
    "ai.availableDesc": "పగలు లేదా రాత్రి ఎప్పుడైనా మద్దతు పొందండి",
    "ai.confidential": "గోప్యత మరియు భద్రత",
    "ai.confidentialDesc": "మీ సంభాషణలు ప్రైవేట్ మరియు సురక్షితం",
    "ai.professionalReferrals": "వృత్తిపరమైన రెఫరల్స్",
    "ai.referralsDesc": "అవసరమైనప్పుడు నిజమైన కౌన్సెలర్లతో కనెక్ట్ చేయబడింది",

    // Screening
    "screening.title": "మానసిక ఆరోగ్య స్క్రీనింగ్ సాధనాలు",
    "screening.subtitle":
      "మీ మానసిక ఆరోగ్యాన్ని బాగా అర్థం చేసుకోవడానికి మరియు మద్దతు కోసం వ్యక్తిగతీకరించిన సిఫార్సులను పొందడానికి ప్రామాణిక మానసిక మూల్యాంకనాలను తీసుకోండి.",
    "screening.phq9": "డిప్రెషన్ స్క్రీనింగ్",
    "screening.gad7": "ఆందోళన అంచనా",
    "screening.ghq12": "సాధారణ ఆరోగ్యం",

    // Common
    "common.bookCounseling": "కౌన్సెలింగ్ బుక్ చేయండి",
    "common.getCommunitySupport": "కమ్యూనిటీ మద్దతు పొందండి",
    "common.browseResources": "వనరులను బ్రౌజ్ చేయండి",
    "common.crisis": "సంక్షోభ మద్దతు",
    "common.confidential": "గోప్యత",
    "common.anonymous": "అనామక",
  },
  bn: {
    // Navigation
    "nav.aiSupport": "AI সহায়তা",
    "nav.counseling": "কাউন্সেলিং",
    "nav.resources": "সম্পদ",
    "nav.community": "কমিউনিটি",
    "nav.screening": "স্ক্রিনিং",
    "nav.analytics": "বিশ্লেষণ",
    "nav.language": "বাংলা",

    // Home Page
    "home.title": "Peace Code এ স্বাগতম",
    "home.subtitle":
      "AI-গাইডেড সহায়তা, পেশাদার কাউন্সেলিং এবং পিয়ার কমিউনিটি সহ শিক্ষার্থীদের জন্য একটি ব্যাপক ডিজিটাল মনস্তাত্ত্বিক হস্তক্ষেপ সিস্টেম।",
    "home.getAISupport": "AI সহায়তা পান",
    "home.takeScreening": "স্ক্রিনিং নিন",
    "home.mentalHealthSupport": "ব্যাপক মানসিক স্বাস্থ্য সহায়তা",
    "home.platformIntegrates":
      "আমাদের প্ল্যাটফর্ম AI-গাইডেড প্রাথমিক চিকিৎসা, পেশাদার কাউন্সেলিং, শিক্ষামূলক সম্পদ এবং পিয়ার সহায়তা একীভূত করে।",

    // AI Support
    "ai.title": "AI প্রাথমিক চিকিৎসা সহায়তা",
    "ai.subtitle":
      "আমাদের AI-চালিত চ্যাটবটের সাথে তাৎক্ষণিক মানসিক স্বাস্থ্য সহায়তা পান। মোকাবেলার কৌশল প্রদান এবং প্রয়োজনে পেশাদার সাহায্যের সাথে সংযোগ করতে 24/7 উপলব্ধ।",
    "ai.howHelps": "AI সহায়তা কীভাবে সাহায্য করে",
    "ai.available247": "24/7 উপলব্ধতা",
    "ai.availableDesc": "দিন বা রাত যেকোনো সময় সহায়তা পান",
    "ai.confidential": "গোপনীয় এবং নিরাপদ",
    "ai.confidentialDesc": "আপনার কথোপকথন ব্যক্তিগত এবং নিরাপদ",
    "ai.professionalReferrals": "পেশাদার রেফারেল",
    "ai.referralsDesc": "প্রয়োজনে প্রকৃত কাউন্সেলরদের সাথে সংযুক্ত",

    // Screening
    "screening.title": "মানসিক স্বাস্থ্য স্ক্রিনিং টুলস",
    "screening.subtitle":
      "আপনার মানসিক স্বাস্থ্য আরও ভালভাবে বুঝতে এবং সহায়তার জন্য ব্যক্তিগতকৃত সুপারিশ পেতে মানসম্মত মনস্তাত্ত্বিক মূল্যায়ন নিন।",
    "screening.phq9": "বিষণ্নতা স্ক্রিনিং",
    "screening.gad7": "উদ্বেগ মূল্যায়ন",
    "screening.ghq12": "সাধারণ স্বাস্থ্য",

    // Common
    "common.bookCounseling": "কাউন্সেলিং বুক করুন",
    "common.getCommunitySupport": "কমিউনিটি সহায়তা পান",
    "common.browseResources": "সম্পদ ব্রাউজ করুন",
    "common.crisis": "সংকট সহায়তা",
    "common.confidential": "গোপনীয়",
    "common.anonymous": "বেনামী",
  },
  mr: {
    // Navigation
    "nav.aiSupport": "AI सहाय्य",
    "nav.counseling": "समुपदेशन",
    "nav.resources": "संसाधने",
    "nav.community": "समुदाय",
    "nav.screening": "तपासणी",
    "nav.analytics": "विश्लेषण",
    "nav.language": "मराठी",

    // Home Page
    "home.title": "Peace Code मध्ये आपले स्वागत आहे",
    "home.subtitle":
      "AI-मार्गदर्शित सहाय्य, व्यावसायिक समुपदेशन आणि समवयस्क समुदायासह विद्यार्थ्यांसाठी एक सर्वसमावेशक डिजिटल मानसिक हस्तक्षेप प्रणाली.",
    "home.getAISupport": "AI सहाय्य मिळवा",
    "home.takeScreening": "तपासणी घ्या",
    "home.mentalHealthSupport": "सर्वसमावेशक मानसिक आरोग्य सहाय्य",
    "home.platformIntegrates":
      "आमचे प्लॅटफॉर्म AI-मार्गदर्शित प्राथमिक उपचार, व्यावसायिक समुपदेशन, शैक्षणिक संसाधने आणि समवयस्क सहाय्य एकत्रित करते.",

    // AI Support
    "ai.title": "AI प्राथमिक उपचार सहाय्य",
    "ai.subtitle":
      "आमच्या AI-चालित चॅटबॉटसह तत्काळ मानसिक आरोग्य सहाय्य मिळवा. सामना करण्याच्या रणनीती प्रदान करण्यासाठी आणि आवश्यकतेनुसार व्यावसायिक मदतीशी जोडण्यासाठी 24/7 उपलब्ध.",
    "ai.howHelps": "AI सहाय्य कशी मदत करते",
    "ai.available247": "24/7 उपलब्धता",
    "ai.availableDesc": "दिवस किंवा रात्र कधीही सहाय्य मिळवा",
    "ai.confidential": "गुप्त आणि सुरक्षित",
    "ai.confidentialDesc": "तुमचे संभाषण खाजगी आणि सुरक्षित आहेत",
    "ai.professionalReferrals": "व्यावसायिक संदर्भ",
    "ai.referralsDesc": "आवश्यकतेनुसार वास्तविक समुपदेशकांशी जोडलेले",

    // Screening
    "screening.title": "मानसिक आरोग्य तपासणी साधने",
    "screening.subtitle":
      "तुमचे मानसिक आरोग्य चांगल्या प्रकारे समजून घेण्यासाठी आणि सहाय्यासाठी वैयक्तिकृत शिफारसी मिळविण्यासाठी प्रमाणित मानसशास्त्रीय मूल्यांकन घ्या.",
    "screening.phq9": "नैराश्य तपासणी",
    "screening.gad7": "चिंता मूल्यांकन",
    "screening.ghq12": "सामान्य आरोग्य",

    // Common
    "common.bookCounseling": "समुपदेशन बुक करा",
    "common.getCommunitySupport": "समुदाय सहाय्य मिळवा",
    "common.browseResources": "संसाधने ब्राउझ करा",
    "common.crisis": "संकट सहाय्य",
    "common.confidential": "गुप्त",
    "common.anonymous": "अनामिक",
  },
  gu: {
    // Navigation
    "nav.aiSupport": "AI સહાય",
    "nav.counseling": "કાઉન્સેલિંગ",
    "nav.resources": "સંસાધનો",
    "nav.community": "સમુદાય",
    "nav.screening": "સ્ક્રીનિંગ",
    "nav.analytics": "વિશ્લેષણ",
    "nav.language": "ગુજરાતી",

    // Home Page
    "home.title": "Peace Code માં આપનું સ્વાગત છે",
    "home.subtitle":
      "AI-માર્ગદર્શિત સહાય, વ્યાવસાયિક કાઉન્સેલિંગ અને સાથીદાર સમુદાય સાથે વિદ્યાર્થીઓ માટે એક વ્યાપક ડિજિટલ મનોવૈજ્ઞાનિક હસ્તક્ષેપ સિસ્ટમ.",
    "home.getAISupport": "AI સહાય મેળવો",
    "home.takeScreening": "સ્ક્રીનિંગ લો",
    "home.mentalHealthSupport": "વ્યાપક માનસિક આરોગ્ય સહાય",
    "home.platformIntegrates":
      "અમારું પ્લેટફોર્મ AI-માર્ગદર્શિત પ્રાથમિક સારવાર, વ્યાવસાયિક કાઉન્સેલિંગ, શૈક્ષણિક સંસાધનો અને સાથીદાર સહાયને એકીકૃત કરે છે.",

    // AI Support
    "ai.title": "AI પ્રાથમિક સારવાર સહાય",
    "ai.subtitle":
      "અમારા AI-સંચાલિત ચેટબોટ સાથે તાત્કાલિક માનસિક આરોગ્ય સહાય મેળવો. સામનો કરવાની વ્યૂહરચના પ્રદાન કરવા અને જરૂર પડે ત્યારે વ્યાવસાયિક મદદ સાથે જોડાવા માટે 24/7 ઉપલબ્ધ.",
    "ai.howHelps": "AI સહાય કેવી રીતે મદદ કરે છે",
    "ai.available247": "24/7 ઉપલબ્ધતા",
    "ai.availableDesc": "દિવસ કે રાત કોઈપણ સમયે સહાય મેળવો",
    "ai.confidential": "ગુપ્ત અને સુરક્ષિત",
    "ai.confidentialDesc": "તમારી વાતચીત ખાનગી અને સુરક્ષિત છે",
    "ai.professionalReferrals": "વ્યાવસાયિક રેફરલ",
    "ai.referralsDesc": "જરૂર પડે ત્યારે વાસ્તવિક કાઉન્સેલર સાથે જોડાયેલ",

    // Screening
    "screening.title": "માનસિક આરોગ્ય સ્ક્રીનિંગ સાધનો",
    "screening.subtitle":
      "તમારા માનસિક આરોગ્યને વધુ સારી રીતે સમજવા અને સહાય માટે વ્યક્તિગત ભલામણો મેળવવા માટે પ્રમાણિત મનોવૈજ્ઞાનિક મૂલ્યાંકન લો.",
    "screening.phq9": "ડિપ્રેશન સ્ક્રીનિંગ",
    "screening.gad7": "ચિંતા મૂલ્યાંકન",
    "screening.ghq12": "સામાન્ય આરોગ્ય",

    // Common
    "common.bookCounseling": "કાઉન્સેલિંગ બુક કરો",
    "common.getCommunitySupport": "સમુદાય સહાય મેળવો",
    "common.browseResources": "સંસાધનો બ્રાઉઝ કરો",
    "common.crisis": "કટોકટી સહાય",
    "common.confidential": "ગુપ્ત",
    "common.anonymous": "અનામ",
  },
  kn: {
    // Navigation
    "nav.aiSupport": "AI ಬೆಂಬಲ",
    "nav.counseling": "ಸಲಹೆ",
    "nav.resources": "ಸಂಪನ್ಮೂಲಗಳು",
    "nav.community": "ಸಮುದಾಯ",
    "nav.screening": "ಪರೀಕ್ಷೆ",
    "nav.analytics": "ವಿಶ್ಲೇಷಣೆ",
    "nav.language": "ಕನ್ನಡ",

    // Home Page
    "home.title": "Peace Code ಗೆ ಸ್ವಾಗತ",
    "home.subtitle": "AI-ಮಾರ್ಗದರ್ಶಿತ ಬೆಂಬಲ, ವೃತ್ತಿಪರ ಸಲಹೆ ಮತ್ತು ಸಹವರ್ತಿ ಸಮುದಾಯದೊಂದಿಗೆ ವಿದ್ಯಾರ್ಥಿಗಳಿಗಾಗಿ ಸಮಗ್ರ ಡಿಜಿಟಲ್ ಮಾನಸಿಕ ಹಸ್ತಕ್ಷೇಪ ವ್ಯವಸ್ಥೆ.",
    "home.getAISupport": "AI ಬೆಂಬಲ ಪಡೆಯಿರಿ",
    "home.takeScreening": "ಪರೀಕ್ಷೆ ತೆಗೆದುಕೊಳ್ಳಿ",
    "home.mentalHealthSupport": "ಸಮಗ್ರ ಮಾನಸಿಕ ಆರೋಗ್ಯ ಬೆಂಬಲ",
    "home.platformIntegrates":
      "ನಮ್ಮ ವೇದಿಕೆಯು AI-ಮಾರ್ಗದರ್ಶಿತ ಪ್ರಾಥಮಿಕ ಚಿಕಿತ್ಸೆ, ವೃತ್ತಿಪರ ಸಲಹೆ, ಶೈಕ್ಷಣಿಕ ಸಂಪನ್ಮೂಲಗಳು ಮತ್ತು ಸಹವರ್ತಿ ಬೆಂಬಲವನ್ನು ಸಂಯೋಜಿಸುತ್ತದೆ.",

    // AI Support
    "ai.title": "AI ಪ್ರಾಥಮಿಕ ಚಿಕಿತ್ಸೆ ಬೆಂಬಲ",
    "ai.subtitle":
      "ನಮ್ಮ AI-ಚಾಲಿತ ಚಾಟ್‌ಬಾಟ್‌ನೊಂದಿಗೆ ತಕ್ಷಣದ ಮಾನಸಿಕ ಆರೋಗ್ಯ ಬೆಂಬಲವನ್ನು ಪಡೆಯಿರಿ. ನಿಭಾಯಿಸುವ ತಂತ್ರಗಳನ್ನು ಒದಗಿಸಲು ಮತ್ತು ಅಗತ್ಯವಿದ್ದಾಗ ವೃತ್ತಿಪರ ಸಹಾಯದೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಲು 24/7 ಲಭ್ಯವಿದೆ.",
    "ai.howHelps": "AI ಬೆಂಬಲ ಹೇಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ",
    "ai.available247": "24/7 ಲಭ್ಯತೆ",
    "ai.availableDesc": "ಹಗಲು ಅಥವಾ ರಾತ್ರಿ ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ಬೆಂಬಲ ಪಡೆಯಿರಿ",
    "ai.confidential": "ಗೌಪ್ಯ ಮತ್ತು ಸುರಕ್ಷಿತ",
    "ai.confidentialDesc": "ನಿಮ್ಮ ಸಂಭಾಷಣೆಗಳು ಖಾಸಗಿ ಮತ್ತು ಸುರಕ್ಷಿತವಾಗಿವೆ",
    "ai.professionalReferrals": "ವೃತ್ತಿಪರ ಉಲ್ಲೇಖಗಳು",
    "ai.referralsDesc": "ಅಗತ್ಯವಿದ್ದಾಗ ನಿಜವಾದ ಸಲಹೆಗಾರರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಲಾಗಿದೆ",

    // Screening
    "screening.title": "ಮಾನಸಿಕ ಆರೋಗ್ಯ ಪರೀಕ್ಷಾ ಸಾಧನಗಳು",
    "screening.subtitle":
      "ನಿಮ್ಮ ಮಾನಸಿಕ ಆರೋಗ್ಯವನ್ನು ಉತ್ತಮವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಮತ್ತು ಬೆಂಬಲಕ್ಕಾಗಿ ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಲು ಪ್ರಮಾಣಿತ ಮಾನಸಿಕ ಮೌಲ್ಯಮಾಪನಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ.",
    "screening.phq9": "ಖಿನ್ನತೆ ಪರೀಕ್ಷೆ",
    "screening.gad7": "ಆತಂಕ ಮೌಲ್ಯಮಾಪನ",
    "screening.ghq12": "ಸಾಮಾನ್ಯ ಆರೋಗ್ಯ",

    // Common
    "common.bookCounseling": "ಸಲಹೆ ಬುಕ್ ಮಾಡಿ",
    "common.getCommunitySupport": "ಸಮುದಾಯ ಬೆಂಬಲ ಪಡೆಯಿರಿ",
    "common.browseResources": "ಸಂಪನ್ಮೂಲಗಳನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ",
    "common.crisis": "ಬಿಕ್ಕಟ್ಟು ಬೆಂಬಲ",
    "common.confidential": "ಗೌಪ್ಯ",
    "common.anonymous": "ಅನಾಮಧೇಯ",
  },
  ml: {
    // Navigation
    "nav.aiSupport": "AI പിന്തുണ",
    "nav.counseling": "കൗൺസലിംഗ്",
    "nav.resources": "വിഭവങ്ങൾ",
    "nav.community": "കമ്മ്യൂണിറ്റി",
    "nav.screening": "സ്ക്രീനിംഗ്",
    "nav.analytics": "വിശകലനം",
    "nav.language": "മലയാളം",

    // Home Page
    "home.title": "Peace Code ലേക്ക് സ്വാഗതം",
    "home.subtitle":
      "AI-നയിക്കുന്ന പിന്തുണ, പ്രൊഫഷണൽ കൗൺസലിംഗ്, സമപ്രായക്കാരുടെ കമ്മ്യൂണിറ്റി എന്നിവയുള്ള വിദ്യാർത്ഥികൾക്കായുള്ള സമഗ്ര ഡിജിറ്റൽ മാനസിക ഇടപെടൽ സംവിധാനം.",
    "home.getAISupport": "AI പിന്തുണ നേടുക",
    "home.takeScreening": "സ്ക്രീനിംഗ് എടുക്കുക",
    "home.mentalHealthSupport": "സമഗ്ര മാനസികാരോഗ്യ പിന്തുണ",
    "home.platformIntegrates":
      "ഞങ്ങളുടെ പ്ലാറ്റ്ഫോം AI-നയിക്കുന്ന പ്രഥമശുശ്രൂഷ, പ്രൊഫഷണൽ കൗൺസലിംഗ്, വിദ്യാഭ്യാസ വിഭവങ്ങൾ, സമപ്രായക്കാരുടെ പിന്തുണ എന്നിവ സംയോജിപ്പിക്കുന്നു.",

    // AI Support
    "ai.title": "AI പ്രഥമശുശ്രൂഷ പിന്തുണ",
    "ai.subtitle":
      "ഞങ്ങളുടെ AI-പവർഡ് ചാറ്റ്ബോട്ടിനൊപ്പം ഉടനടി മാനസികാരോഗ്യ പിന്തുണ നേടുക. കോപ്പിംഗ് തന്ത്രങ്ങൾ നൽകാനും ആവശ്യമുള്ളപ്പോൾ പ്രൊഫഷണൽ സഹായവുമായി ബന്ധിപ്പിക്കാനും 24/7 ലഭ്യമാണ്.",
    "ai.howHelps": "AI പിന്തുണ എങ്ങനെ സഹായിക്കുന്നു",
    "ai.available247": "24/7 ലഭ്യത",
    "ai.availableDesc": "പകലോ രാത്രിയോ എപ്പോൾ വേണമെങ്കിലും പിന്തുണ നേടുക",
    "ai.confidential": "രഹസ്യവും സുരക്ഷിതവും",
    "ai.confidentialDesc": "നിങ്ങളുടെ സംഭാഷണങ്ങൾ സ്വകാര്യവും സുരക്ഷിതവുമാണ്",
    "ai.professionalReferrals": "പ്രൊഫഷണൽ റഫറലുകൾ",
    "ai.referralsDesc": "ആവശ്യമുള്ളപ്പോൾ യഥാർത്ഥ കൗൺസലർമാരുമായി ബന്ധിപ്പിച്ചിരിക്കുന്നു",

    // Screening
    "screening.title": "മാനസികാരോഗ്യ സ്ക്രീനിംഗ് ഉപകരണങ്ങൾ",
    "screening.subtitle":
      "നിങ്ങളുടെ മാനസികാരോഗ്യം നന്നായി മനസ്സിലാക്കാനും പിന്തുണയ്ക്കായി വ്യക്തിഗതമാക്കിയ ശുപാർശകൾ നേടാനും സ്റ്റാൻഡേർഡ് സൈക്കോളജിക്കൽ അസസ്മെന്റുകൾ എടുക്കുക.",
    "screening.phq9": "വിഷാദം സ്ക്രീനിംഗ്",
    "screening.gad7": "ഉത്കണ്ഠ വിലയിരുത്തൽ",
    "screening.ghq12": "പൊതു ആരോഗ്യം",

    // Common
    "common.bookCounseling": "കൗൺസലിംഗ് ബുക്ക് ചെയ്യുക",
    "common.getCommunitySupport": "കമ്മ്യൂണിറ്റി പിന്തുണ നേടുക",
    "common.browseResources": "വിഭവങ്ങൾ ബ്രൗസ് ചെയ്യുക",
    "common.crisis": "പ്രതിസന്ധി പിന്തുണ",
    "common.confidential": "രഹസ്യം",
    "common.anonymous": "അജ്ഞാത",
  },
  or: {
    // Navigation
    "nav.aiSupport": "AI ସହାୟତା",
    "nav.counseling": "ପରାମର୍ଶ",
    "nav.resources": "ସମ୍ବଳ",
    "nav.community": "ସମ୍ପ୍ରଦାୟ",
    "nav.screening": "ସ୍କ୍ରିନିଂ",
    "nav.analytics": "ବିଶ୍ଳେଷଣ",
    "nav.language": "ଓଡ଼ିଆ",

    // Home Page
    "home.title": "Peace Code ରେ ସ୍ୱାଗତ",
    "home.subtitle":
      "AI-ନିର୍ଦ୍ଦେଶିତ ସହାୟତା, ବୃତ୍ତିଗତ ପରାମର୍ଶ ଏବଂ ସମବୟସ୍କ ସମ୍ପ୍ରଦାୟ ସହିତ ଛାତ୍ରଛାତ୍ରୀମାନଙ୍କ ପାଇଁ ଏକ ବ୍ୟାପକ ଡିଜିଟାଲ ମାନସିକ ହସ୍ତକ୍ଷେପ ପ୍ରଣାଳୀ।",
    "home.getAISupport": "AI ସହାୟତା ପାଆନ୍ତୁ",
    "home.takeScreening": "ସ୍କ୍ରିନିଂ କରନ୍ତୁ",
    "home.mentalHealthSupport": "ବ୍ୟାପକ ମାନସିକ ସ୍ୱାସ୍ଥ୍ୟ ସହାୟତା",
    "home.platformIntegrates": "ଆମର ପ୍ଲାଟଫର୍ମ AI-ନିର୍ଦ୍ଦେଶିତ ପ୍ରାଥମିକ ଚିକିତ୍ସା, ବୃତ୍ତିଗତ ପରାମର୍ଶ, ଶିକ୍ଷାଗତ ସମ୍ବଳ ଏବଂ ସମବୟସ୍କ ସହାୟତାକୁ ଏକୀଭୂତ କରେ।",

    // AI Support
    "ai.title": "AI ପ୍ରାଥମିକ ଚିକିତ୍ସା ସହାୟତା",
    "ai.subtitle":
      "ଆମର AI-ଚାଳିତ ଚାଟବଟ ସହିତ ତୁରନ୍ତ ମାନସିକ ସ୍ୱାସ୍ଥ୍ୟ ସହାୟତା ପାଆନ୍ତୁ। ମୁକାବିଲା କୌଶଳ ପ୍ରଦାନ କରିବା ଏବଂ ଆବଶ୍ୟକ ସମୟରେ ବୃତ୍ତିଗତ ସହାୟତା ସହିତ ସଂଯୋଗ କରିବା ପାଇଁ 24/7 ଉପଲବ୍ଧ।",
    "ai.howHelps": "AI ସହାୟତା କିପରି ସାହାଯ୍ୟ କରେ",
    "ai.available247": "24/7 ଉପଲବ୍ଧତା",
    "ai.availableDesc": "ଦିନ କିମ୍ବା ରାତି ଯେକୌଣସି ସମୟରେ ସହାୟତା ପାଆନ୍ତୁ",
    "ai.confidential": "ଗୋପନୀୟ ଏବଂ ସୁରକ୍ଷିତ",
    "ai.confidentialDesc": "ଆପଣଙ୍କର ବାର୍ତ୍ତାଳାପ ବ୍ୟକ୍ତିଗତ ଏବଂ ସୁରକ୍ଷିତ",
    "ai.professionalReferrals": "ବୃତ୍ତିଗତ ରେଫରାଲ",
    "ai.referralsDesc": "ଆବଶ୍ୟକ ସମୟରେ ପ୍ରକୃତ ପରାମର୍ଶଦାତାମାନଙ୍କ ସହିତ ସଂଯୁକ୍ତ",

    // Screening
    "screening.title": "ମାନସିକ ସ୍ୱାସ୍ଥ୍ୟ ସ୍କ୍ରିନିଂ ଉପକରଣ",
    "screening.subtitle": "ଆପଣଙ୍କର ମାନସିକ ସ୍ୱାସ୍ଥ୍ୟକୁ ଭଲ ଭାବରେ ବୁଝିବା ଏବଂ ସହାୟତା ପାଇଁ ବ୍ୟକ୍ତିଗତ ସୁପାରିଶ ପାଇବା ପାଇଁ ମାନକ ମନୋବିଜ୍ଞାନ ମୂଲ୍ୟାଙ୍କନ କରନ୍ତୁ।",
    "screening.phq9": "ଅବସାଦ ସ୍କ୍ରିନିଂ",
    "screening.gad7": "ଚିନ୍ତା ମୂଲ୍ୟାଙ୍କନ",
    "screening.ghq12": "ସାଧାରଣ ସ୍ୱାସ୍ଥ୍ୟ",

    // Common
    "common.bookCounseling": "ପରାମର୍ଶ ବୁକ କରନ୍ତୁ",
    "common.getCommunitySupport": "ସମ୍ପ୍ରଦାୟ ସହାୟତା ପାଆନ୍ତୁ",
    "common.browseResources": "ସମ୍ବଳ ବ୍ରାଉଜ କରନ୍ତୁ",
    "common.crisis": "ସଙ୍କଟ ସହାୟତା",
    "common.confidential": "ଗୋପନୀୟ",
    "common.anonymous": "ଅଜ୍ଞାତ",
  },
}

const languageNames = {
  en: "English",
  hi: "हिंदी",
  ta: "தமிழ்",
  te: "తెలుగు",
  bn: "বাংলা",
  mr: "मराठी",
  gu: "ગુજરાતી",
  kn: "ಕನ್ನಡ",
  ml: "മലയാളം",
  or: "ଓଡ଼ିଆ",
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("peace-code-language") as Language
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("peace-code-language", lang)
  }

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export { languageNames }
