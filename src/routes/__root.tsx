import { TanStackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import appCss from "../styles.css?url";
import { isDev } from "@/lib/env";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Trong Duong — Software Engineer",
      },
      {
        name: "description",
        content:
          "Personal website of Trong Duong — Software Engineer specializing in web development.",
      },
      {
        name: "og:title",
        content: "Trong Duong — Software Engineer",
      },
      {
        name: "og:description",
        content:
          "Personal website of Trong Duong — Software Engineer specializing in web development.",
      },
      {
        name: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:title",
        content: "Trong Duong — Software Engineer",
      },
      {
        name: "twitter:description",
        content:
          "Personal website of Trong Duong — Software Engineer specializing in web development.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "/favicon.ico",
      },
      {
        rel: "manifest",
        href: "/manifest.json",
      },
    ],
  }),

  shellComponent: RootDocument,
});

// const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t&&['dark','amber','blue'].includes(t)){document.documentElement.className=t}else{document.documentElement.className='dark'}}catch(e){document.documentElement.className='dark'}})()`;

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* <script dangerouslySetInnerHTML={{ __html: themeScript }} /> */}
        {isDev ? (
          <script
            crossOrigin="anonymous"
            src="//unpkg.com/react-scan/dist/auto.global.js"
          />
        ) : null}
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
