import '@/styles/globals.css';
import theme from '@/styles/theme';
import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import createEmotionCache from '../../config/createEmotionCache';
import MountainThrillsCampLayout from '../components/layout/MountainThrillsCampLayout';
import { Asap, Karla } from 'next/font/google';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

const asapFont = Asap({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-asap',
});

const karlaFont = Karla({
	subsets: ['latin'],
	weight: ['800'],
	variable: '--font-karla',
});

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
						{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
						<Component {...pageProps} />
					</MountainThrillsCampLayout>
				</ThemeProvider>
			</CacheProvider>
		</main>
	);
}
