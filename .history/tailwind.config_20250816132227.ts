import type { Config } from "tailwindcss";

const config: Config = {
  // ... (konfigurasi Anda yang sudah ada)

  theme: {
    container: {
      // ...
    },
    extend: {
      // --- TAMBAHKAN KODE INI ---
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      // --- BATAS KODE TAMBAHAN ---
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;