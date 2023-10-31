import createCache from "@emotion/cache";
import { current } from "@mongez/react";
import rtlPlugin from "stylis-plugin-rtl";

// Create RTL cache
export const cacheRTL = createCache({
  key: "rtl",
  stylisPlugins: [rtlPlugin],
});

// Create LTR cache
export const cacheLTR = createCache({
  key: "ltr",
  stylisPlugins: [],
});

//Function to cache direction...
export const cacheValue = current("direction") === "ltr" ? cacheLTR : cacheRTL;

export const styleCaches = {
  en: cacheLTR,
  ar: cacheRTL,
};
