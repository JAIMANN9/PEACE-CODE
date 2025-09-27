"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Globe } from "lucide-react"
import { useLanguage, languageNames, type Language } from "@/lib/language-context"

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
      <SelectTrigger className="w-[140px]">
        <Globe className="h-4 w-4 mr-2" />
        <SelectValue placeholder={t("nav.language")} />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(languageNames).map(([code, name]) => (
          <SelectItem key={code} value={code}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
