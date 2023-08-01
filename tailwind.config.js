/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'bg-primary': '#141847',
			},
			backgroundImage: {
				hero: 'url(https://meborny.mn/static/main-min.jpeg)',
			},
		},
	},
	plugins: [],
};
