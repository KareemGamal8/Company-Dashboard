import { CacheProvider } from "@emotion/react";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import cache from "@mongez/cache";
import { InjectThemeAtom, ToastContainer } from "@mongez/moonlight";
import { current } from "@mongez/react";
import { useEvent } from "@mongez/react-hooks";
import { routerEvents } from "@mongez/react-router";
import { useState } from "react";
import { cacheValue, styleCaches } from "../BaseLayout/LayoutSettings";

export default function App({ children }: any) {
  const [cacheProvider, setCacheProvider] = useState(cacheValue);

  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    cache.get("colorScheme", "light"),
  );

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
    cache.set(
      "colorScheme",
      value || (colorScheme === "dark" ? "light" : "dark"),
    );
  };

  useEvent(() =>
    routerEvents.onLocaleChanging(localeCode => {
      setCacheProvider(styleCaches[localeCode]);
    }),
  );

  const localeCode = current("localeCode");

  const currentStyleCache = styleCaches[localeCode];

  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}>
        <CacheProvider value={cacheProvider}>
          <MantineProvider
            theme={{
              fontFamily: "Rubik, sans-serif",
              dir: current("direction"),
              colorScheme,
            }}
            emotionCache={currentStyleCache}
            withGlobalStyles
            withNormalizeCSS>
            <ModalsProvider>
              <ToastContainer />
              <InjectThemeAtom />
              {children}
            </ModalsProvider>
          </MantineProvider>
        </CacheProvider>
      </ColorSchemeProvider>
    </>
  );
}
