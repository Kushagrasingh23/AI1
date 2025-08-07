import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#8A2BE2',
        'neon-cyan': '#00FFFF',
        'neon-pink': '#FF00FF',
        dark: '#0b0f17'
      },
      boxShadow: {
        neon: '0 0 20px rgba(138,43,226,0.6), 0 0 40px rgba(0,255,255,0.3)'
      },
      fontFamily: {
        press: ['"Press Start 2P"', 'cursive'],
        techno: ['Orbitron', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};

export default config;