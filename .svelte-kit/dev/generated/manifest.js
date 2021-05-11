const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/forget-password.svelte"),
	() => import("../../../src/routes/reset-password.svelte"),
	() => import("../../../src/routes/register.svelte"),
	() => import("../../../src/routes/profile.svelte"),
	() => import("../../../src/routes/about.svelte"),
	() => import("../../../src/routes/login.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/forget-password.svelte
	[/^\/forget-password\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/reset-password.svelte
	[/^\/reset-password\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/register.svelte
	[/^\/register\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/profile.svelte
	[/^\/profile\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/login.svelte
	[/^\/login\/?$/, [c[0], c[8]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];