import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Menambahkan zIndex di sini untuk memastikan canvas partikel
      // bisa diatur di belakang konten utama.
      zIndex: {
        '0': '0',
        '-1': '-1',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;