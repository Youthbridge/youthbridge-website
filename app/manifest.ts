import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "YouthBridge – Projekt & Jugendverband in Bayern",
    short_name: "YouthBridge",
    description:
      "YouthBridge vereint Leadership-Projekt und Jugendverband unter dem Dach der Europäischen Janusz Korczak Akademie e.V. in München, Nürnberg und ganz Bayern.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1a5276",
    lang: "de",
    icons: [
      {
        src: "/icon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}
