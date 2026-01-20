import { vi } from "vitest";

vi.mock("next/font/local", () => ({
	default: vi.fn(() => ({
		className: "mock-local-font",
		style: { fontFamily: "mock-local-font" },
		variable: "--mock-local-font",
	})),
}));
