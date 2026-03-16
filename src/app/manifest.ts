import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PackersHub – Packers and Movers",
    short_name: "PackersHub",
    description: "Trusted packers and movers across South India. Get a free quote instantly.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1A56DB",
    orientation: "portrait",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
    categories: ["business", "utilities"],
    lang: "en-IN",
    shortcuts: [
      { name: "Call Now",        url: "tel:+917730912913",                                                   description: "Call PackersHub directly" },
      { name: "WhatsApp Quote",  url: "https://wa.me/917730912913?text=Hello!%20I%20need%20a%20moving%20quote.", description: "Get a quote on WhatsApp" },
    ],
  };
}
