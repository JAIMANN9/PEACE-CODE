import { categories } from "@/lib/community-data"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Crown } from "lucide-react"

export function GroupSidebar() {
  return (
    <aside className="h-full border-r border-border p-4 space-y-4">
      <h2 className="text-xl font-bold mb-4">Groups</h2>
      <nav className="space-y-2">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.premium ? "/pricing" : `/community/group/${category.id}`}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <span className="font-medium">{category.name}</span>
            {category.premium && (
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200">
                <Crown className="h-3 w-3 mr-1" />
                Premium
              </Badge>
            )}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
