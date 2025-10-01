import { categories } from "@/lib/community-data"
import { GroupSidebar } from "@/components/community/group-sidebar"
import { ChatInterface } from "@/components/community/chat-interface"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"

export default function GroupChatPage({ params }: { params: { id: string } }) {
  const group = categories.find((c) => c.id === params.id)

  if (!group || group.premium) {
    // Redirect to pricing for premium, or notFound for non-existent groups
    // For this implementation, we'll just show not found. A real implementation would check user auth.
    notFound()
  }

  return (
    <div className="h-screen flex flex-col">
      <Navigation />
      <div className="flex-1 grid grid-cols-[280px_1fr] overflow-hidden pt-16">
        <GroupSidebar />
        <ChatInterface groupId={group.id as any} groupName={group.name} />
      </div>
    </div>
  )
}
