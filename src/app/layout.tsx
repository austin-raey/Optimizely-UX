import type { Metadata } from "next";

import "@/styles/tailwind.css";
import "@/styles/global.css";

export const metadata: Metadata = {
	description: "Mount Sinai Optimizely",
	title: "Mount Sinai Optimizely",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					as="font"
					crossOrigin="anonymous"
					href="/fonts/MountSinai-SansVF_W_WdthWght.woff2"
					rel="preload"
					type="font/woff2"
				/>
				<link
					as="font"
					crossOrigin="anonymous"
					href="/fonts/MountSinai-SansVFItalic_W_WdthWght.woff2"
					rel="preload"
					type="font/woff2"
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}
