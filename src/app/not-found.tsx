import Link from "next/link";

import { env } from "~/env";

export const metadata = {
	description:
		"The page you are looking for may have been removed, had its name changed, or is temporarily unavailable.",
	openGraph: {
		description:
			"The page you are looking for may have been removed, had its name changed, or is temporarily unavailable.",
		title: "Page Not Found | Mount Sinai - New York",
		type: "website",
		url: env.NEXT_PUBLIC_DOMAIN_URL,
	},
	title: "Page Not Found | Mount Sinai - New York",
	twitter: {
		card: "summary",
		description:
			"The page you are looking for may have been removed, had its name changed, or is temporarily unavailable.",
		title: "Page Not Found | Mount Sinai - New York",
	},
};

export default function NotFound() {
	return (
		<div className="flex size-full items-center justify-center pt-10">
			<div className="flex max-w-(--breakpoint-md) flex-col justify-center gap-2 bg-white p-5 md:p-10">
				<h1 className="text-2xl font-bold">Page Cannot Be Found (404)</h1>
				<h2 className="text-lg font-semibold">
					The page you are looking for may have been removed, had its name changed, or is temporarily unavailable.
				</h2>
				<div className="space-y-2">
					<span className="inline-block font-semibold">Please try the following:</span>
					<ul className="list-inside list-disc space-y-1">
						<li className="ml-3">Retype the page address, making sure that it is spelled correctly.</li>
						<li className="ml-3">
							Return to the{" "}
							<Link className="link" href={env.NEXT_PUBLIC_DOMAIN_URL || "https://www.mountsinai.org"}>
								Mount Sinai Health System
							</Link>{" "}
							homepage and look for links to the information you want.
						</li>
						<li className="ml-3">Return to the previous page and try another link.</li>
						<li className="ml-3">
							If you are searching for a person, try the{" "}
							<Link className="link" href="https://www.mountsinai.org/locations/mount-sinai/about/contact">
								Contacts page
							</Link>
							.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
