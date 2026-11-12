import { createFileRoute, redirect } from "@tanstack/react-router";

// The app itself is plain HTML/CSS/JS in public/mesas/.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mesas — Reservas del restaurante" },
      { name: "description", content: "Marca qué mesas están reservadas y cuáles libres." },
      { property: "og:title", content: "Mesas — Reservas del restaurante" },
      { property: "og:description", content: "Marca qué mesas están reservadas y cuáles libres." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  beforeLoad: () => {
    throw redirect({ href: "/mesas/index.html" });
  },
});
