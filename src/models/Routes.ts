// ! Create types for routes
export const navItems = [
	{ name: 'Acasă', route: '/' },
	{ name: 'Despre noi', route: '/despre-noi' },
	{ name: 'Tabere de vară', route: '/tabere-vara' },
	{ name: 'Tabere MTB', route: '/drumetii-mtb' },
	{ name: 'Tabere SKI', route: '/tabere-ski' },
	{ name: 'Contact', route: '/contact' },
];

export const Routes: Map<string, string> = new Map<string, string>(
	navItems.map((i) => [i.name, i.route]),
);
