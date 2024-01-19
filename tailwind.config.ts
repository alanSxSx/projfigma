import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'texture': "url('/texture.png')",
      },
			boxShadow: {
        'bottom-strong': '-1px 3px 3px rgba(0, 0, 0, 0.3)', // Ajuste os valores conforme necessário
      },
     
    },
  },
  plugins: [],
}
export default config
