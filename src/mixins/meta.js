import { useMeta } from "vue-meta";

function setMetaTags({ $route, $config }) {
  useMeta({
    title: $route.meta.title,
    meta: [
      { charset: "utf-8" },
      {
        hid: "viewport",
        name: "viewport",
        content: "width=device-width,initial-scale=1.0"
      },
      { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
      { hid: "robots", name: "robots", content: "index, follow" },
      { name: "application-name", content: $config.appName },
      { name: "theme-color", content: "#f4f4f5" },
      { name: "apple-mobile-web-app-title", content: $config.appName },
      { name: "msapplication-TileColor", content: "#f4f4f5" },
      { name: "msapplication-TileImage", content: `${$config.appUrl}/mstile-144x144.png?1679324000` },
      { name: "msapplication-config", content: `${$config.appUrl}/browserconfig.xml?1679324000` },
      { name: "og:type", content: "website" },
      { name: "og:url", content: $config.appUrl },
      { name: "og:site_name", content: $config.appName },
      { name: "twitter:card", content: "summary" }
    ],
    link: [
      { rel: "apple-touch-icon", sizes: "180x180", href: `${$config.appUrl}/apple-touch-icon.png?1679324000` },
      { rel: "icon", type: "image/png", sizes: "192x192", href: `${$config.appUrl}/favicon-192x192.png?1679324000` },
      { rel: "icon", type: "image/png", sizes: "32x32", href: `${$config.appUrl}/favicon-32x32.png?1679324000` },
      { rel: "icon", type: "image/png", sizes: "16x16", href: `${$config.appUrl}/favicon-16x16.png?1679324000` },
      { rel: "manifest", href: `${$config.appUrl}/site.webmanifest?1679324000` },
      { rel: "mask-icon", href: `${$config.appUrl}/safari-pinned-tab.svg?1679324000`, color: "#f4f4f5" },
      { rel: "shortcut icon", href: `${$config.appUrl}/favicon.ico?1679324000` }
    ]
  });
}

export default {
  mounted() {
    setMetaTags(this);
  }
};
