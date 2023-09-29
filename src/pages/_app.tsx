import "@/styles/globals.css";
import theme from "@/styles/theme";
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import createEmotionCache from "../../config/createEmotionCache";
import MountainThrillsCampLayout from "../components/layout/MountainThrillsCampLayout";
import { asapFont, karlaFont } from "../styles/fonts";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  return (
    <main className={`${asapFont.variable} ${karlaFont.variable}`}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MountainThrillsCampLayout>
            <Component {...pageProps} />
          </MountainThrillsCampLayout>
        </ThemeProvider>
      </CacheProvider>
    </main>
  );
}
