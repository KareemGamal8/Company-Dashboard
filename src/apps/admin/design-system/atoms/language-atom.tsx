import cache from "@mongez/cache";
import { atom } from "@mongez/react-atom";
import { changeLocaleCode } from "@mongez/react-router";

const languageCacheKey = "lang";

export const languageAtom = atom({
  key: "language",
  default: {
    language: cache.get(languageCacheKey),
    nextLocaleCode(): string {
      return languageAtom.get("language") === "en" ? "AR" : "EN";
    },
    toggleLanguage() {
      const language = languageAtom.get("language");
      const switchLanguage = languageAtom.get("switchLanguage");

      switchLanguage(language === "en" ? "ar" : "en");
    },
    switchLanguage(newLocaleCode: string) {
      // update theme in storage
      cache.set(languageCacheKey, newLocaleCode, Infinity);

      changeLocaleCode(newLocaleCode);
      languageAtom.update({
        ...languageAtom.value,
        language: newLocaleCode,
      });
    },
  },
});
