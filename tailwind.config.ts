import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'gg-sans': ['gg sans', 'Helvetica']
      },
      colors: {
        'discord-gray-1': '#424549',
        'discord-gray-2': '#36393e',
        'discord-gray-3': '#282b30',
        'discord-gray-4': '#1e2124',
      }
    },

  },
  plugins: [],
}
export default config
