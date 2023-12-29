import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'var(--font-roboto)',
        contrail_one: 'var(--font-contrail-one)',
      },
      gridTemplateColumns: {
        detailsProject: 'minmax(0, 1fr) 384px',
      },
      keyframes: {
        slideDownAndFade: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        slideDownAndFade: 'slideDownAndFade 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
export default config
