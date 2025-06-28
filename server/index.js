import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, Link, NavLink } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {}), /* @__PURE__ */ jsx("link", {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr",
        crossOrigin: "anonymous"
      }), /* @__PURE__ */ jsx("script", {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js",
        integrity: "sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q",
        crossOrigin: "anonymous"
      }), /* @__PURE__ */ jsx("link", {
        href: "http://fonts.googleapis.com/css?family=Nova+Mono",
        rel: "stylesheet",
        type: "text/css"
      })]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root
}, Symbol.toStringTag, { value: "Module" }));
const Sidebar = () => {
  return /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("h3", { children: "Contact Me" }),
        /* @__PURE__ */ jsx("hr", { className: "solid" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "row ms-1", children: [
        /* @__PURE__ */ jsx("div", { className: "col", children: /* @__PURE__ */ jsx("h5", { children: "Email:" }) }),
        /* @__PURE__ */ jsx("div", { className: "col", children: /* @__PURE__ */ jsx("p", { children: "kalatalo@ipac.caltech.edu" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "row ms-1", children: [
        /* @__PURE__ */ jsx("div", { className: "col", children: /* @__PURE__ */ jsx("h5", { children: "Phone:" }) }),
        /* @__PURE__ */ jsx("div", { className: "col", children: /* @__PURE__ */ jsx("p", { children: "+1 (626) 720-5555" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "row ms-1", children: [
        /* @__PURE__ */ jsx("div", { className: "col", children: /* @__PURE__ */ jsx("h5", { children: "Address:" }) }),
        /* @__PURE__ */ jsx("div", { className: "col", children: /* @__PURE__ */ jsx("p", { children: "700 S. Main Ave. Temporary, CA 91125" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("h3", { children: "Research" }),
        /* @__PURE__ */ jsx("hr", { className: "solid" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "row mb-3 ms-1", children: [
        /* @__PURE__ */ jsx("li", { className: "sList", children: /* @__PURE__ */ jsx("a", { href: "#", className: "sLink", children: "Shocked gas in galaxies" }) }),
        /* @__PURE__ */ jsx("li", { className: "sList", children: /* @__PURE__ */ jsx("a", { href: "#", className: "sLink", children: "NGC 1266" }) }),
        /* @__PURE__ */ jsx("li", { className: "sList", children: /* @__PURE__ */ jsx("a", { href: "#", className: "sLink", children: "ATLAS3D" }) }),
        /* @__PURE__ */ jsx("li", { className: "sList", children: /* @__PURE__ */ jsx("a", { href: "#", className: "sLink", children: "ROTSE" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("h3", { children: "Links" }),
        /* @__PURE__ */ jsx("hr", { className: "solid" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "row ms-1", children: [
        /* @__PURE__ */ jsx("li", { className: "sList", children: /* @__PURE__ */ jsx("a", { href: "#", className: "sLink", children: "Photography" }) }),
        /* @__PURE__ */ jsx("li", { className: "sList", children: /* @__PURE__ */ jsx("a", { href: "#", className: "sLink", children: "Fellowships" }) })
      ] })
    ] })
  ] });
};
function meta({}) {
  return [{
    title: "Dr. Katherine Alatalo"
  }, {
    name: "description",
    content: "Dr. Katherine Alatalo's website"
  }];
}
const header = UNSAFE_withComponentProps(function Dashboard() {
  return /* @__PURE__ */ jsxs("div", {
    className: "container app",
    children: [/* @__PURE__ */ jsx("nav", {
      className: "navbar navbar-expand-lg bg-body-tertiary row mb-3",
      "data-bs-theme": "dark",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container-fluid",
        children: [/* @__PURE__ */ jsx(Link, {
          className: "navbar-brand",
          to: "/",
          children: "Katey's Website"
        }), /* @__PURE__ */ jsx("button", {
          className: "navbar-toggler",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
          children: /* @__PURE__ */ jsx("span", {
            className: "navbar-toggler-icon"
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "collapse navbar-collapse",
          id: "navbarSupportedContent",
          children: /* @__PURE__ */ jsxs("ul", {
            className: "navbar-nav me-auto mb-2 mb-lg-0",
            children: [/* @__PURE__ */ jsx(NavLink, {
              className: "nav-link",
              to: "/",
              children: "Home"
            }), /* @__PURE__ */ jsx(NavLink, {
              className: "nav-link",
              to: "me",
              children: "Me"
            }), /* @__PURE__ */ jsx(NavLink, {
              className: "nav-link",
              to: "research",
              children: "Research"
            }), /* @__PURE__ */ jsx(NavLink, {
              className: "nav-link",
              to: "papers",
              children: "Papers"
            }), /* @__PURE__ */ jsx(NavLink, {
              className: "nav-link",
              to: "cv",
              children: "CV"
            })]
          })
        })]
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: "row",
      children: [/* @__PURE__ */ jsx("div", {
        className: "col-8",
        children: /* @__PURE__ */ jsx(Outlet, {})
      }), /* @__PURE__ */ jsx("div", {
        className: "col-4",
        children: /* @__PURE__ */ jsx(Sidebar, {})
      })]
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: header,
  meta
}, Symbol.toStringTag, { value: "Module" }));
function Welcome() {
  return /* @__PURE__ */ jsxs("div", { className: "container ms-5 my-4 pe-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "row mb-5", children: [
      /* @__PURE__ */ jsx("div", { className: "row mb-2", children: /* @__PURE__ */ jsx("h2", { children: "Dr. Katherine Alatalo" }) }),
      /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("div", { className: "col-4", children: /* @__PURE__ */ jsx("img", { className: "cBorder", src: "images/katey.png", height: "192", width: "212" }) }),
        /* @__PURE__ */ jsx("div", { className: "col-8", children: /* @__PURE__ */ jsxs("p", { children: [
          "I am currently a postdoctoral fellow living in Pasadena and working at the Infrared Processing and Analysis Center at the California Institute of Technology working on mapping shock conditions within compact groups of galaxies with Dr. Phil Appleton.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("br", {}),
          "I graduated with my Ph.D. in astrophysics in 2012 from UC - Berkeley with Prof. Carl Heiles as my advisor. I graduated from the University of Michigan in 2004 with a double major of astronomy and physics under the supervision of Prof. Carl Akerlof and Prof. Tim McKay."
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "row mb-5", children: [
      /* @__PURE__ */ jsx("div", { className: "row mb-2", children: /* @__PURE__ */ jsx("h2", { className: "title", children: "Research Interests" }) }),
      /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("div", { className: "col-4", children: /* @__PURE__ */ jsx("img", { className: "cBorder", src: "images/ngc1266.png", height: "192", width: "212" }) }),
        /* @__PURE__ */ jsx("div", { className: "col-8", children: /* @__PURE__ */ jsxs("p", { children: [
          "My current interests mostly focus on using CARMA and ALMA to map cold molecular gas in candidates from AGN feedback and using Herschel to map the conditions in shocked molecular gas in compact, interacting groups of galaxies. I have also spent time working on mapping of molecular gas in early-type galaxies with the ATLAS3D team. Previously I worked a bit on optical follow-up to gamma-ray bursts primarily with ",
          /* @__PURE__ */ jsx("a", { className: "sLink", href: "http://www.rotse.net/", children: "ROTSE" }),
          ", but also with ",
          /* @__PURE__ */ jsx("a", { className: "sLink", href: "http://www.pairitel.org/", children: "PAIRITEL" }),
          "."
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsx("div", { className: "row mb-2", children: /* @__PURE__ */ jsx("h2", { children: "Other Interests" }) }),
      /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("div", { className: "col-4", children: /* @__PURE__ */ jsx("img", { className: "cBorder", src: "images/vlapeople.jpg", height: "192", width: "212" }) }),
        /* @__PURE__ */ jsx("div", { className: "col-8", children: /* @__PURE__ */ jsx("p", { children: `In a quest for "epic" adventures, I have skydived in Hawaii, roadtripped in a Fiat Panda through the north shore of Tenerife (Canary Islands), picked up hitchhikers in Yellowstone National Park, chased down Calfire guys to make sure I didn't need to evacuate our science facility, introduced a dozen Europeans to karaoke and many more. I get scared easily, but love pushing myself through that fear. I am a competitive fun-haver, meaning that when people come visit me here, I will do everything in my power to ensure they have had a better time than they can possibly show me in their hometown. It is (in my opinion) a competition that everyone wins.` }) })
      ] })
    ] })
  ] });
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(Welcome, {});
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home
}, Symbol.toStringTag, { value: "Module" }));
function Me() {
  return /* @__PURE__ */ jsxs("div", { className: "container ms-5 my-4 pe-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "row mb-5", children: [
      /* @__PURE__ */ jsx("div", { className: "row mb-2", children: /* @__PURE__ */ jsx("h2", { children: "A summary of the obvious" }) }),
      /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("div", { className: "col-4", children: /* @__PURE__ */ jsx("img", { className: "cBorder", src: "images/katey_milkshake.jpg", width: "240" }) }),
        /* @__PURE__ */ jsx("div", { className: "col-8", children: /* @__PURE__ */ jsxs("p", { children: [
          "I am a postdoctoral fellow living in Pasadena, since October 2012. I grew up in Michigan, moved to the Bay Area for graduate school, and have now moved south.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("br", {}),
          "I've loved astronomy since the first time I saw Cosmos with Carl Sagan. It is what inspired me to pursue astronomy as a career, and launched me toward my Ph.D., which I completed in August 2012, from UC - Berkeley. I was mainly a radio astronomer, having logged over 100 hours at the Combined Array for Research in Millimeter Astronomy (CARMA). At this point I have worked with data that spans the electromagnetic spectrum, from optical spectra to X-rays to ultraviolet photometry to the far-IR. Caltech and Pasadena are doing a great job expanding my collaborations and knowledge, and I look forward to enjoying the time I do science here."
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "row mb-5", children: [
      /* @__PURE__ */ jsx("div", { className: "row mb-2", children: /* @__PURE__ */ jsx("h2", { children: "Snippets of the not so obvious" }) }),
      /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("div", { className: "col-4", children: /* @__PURE__ */ jsx("img", { className: "cBorder", src: "images/katey_ocean.jpg", height: "320", width: "180" }) }),
        /* @__PURE__ */ jsx("div", { className: "col-8", children: /* @__PURE__ */ jsxs("p", { children: [
          "I have a lot of non-astronomy interests. Beginning from when I was young and horseback rode, became extremely involved in my high school's theatre program, and finally settled into science at university (while also never missing a football game. Go Blue!)",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("br", {}),
          "At Berkeley, I took up photography, became a stalker of the National Parks (life goal is to make it to all the classic national parks in the US), started wind-surfing (and real surfing, but that was mostly falling), and never turning down a chance to do something new or go somewhere unique. I also started going to concerts and Dubstep shows and developed a taste for Napa Cabs and fair trade artisan coffee. A tranquil day just being by the ocean is my ideal way to spend a day."
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "row mb-5", children: [
      /* @__PURE__ */ jsx("div", { className: "row mb-2", children: /* @__PURE__ */ jsx("h2", { children: "Now onto the present" }) }),
      /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("div", { className: "col-4", children: /* @__PURE__ */ jsx("img", { className: "cBorder", src: "images/obie.jpg", height: "320", width: "239" }) }),
        /* @__PURE__ */ jsx("div", { className: "col-8", children: /* @__PURE__ */ jsxs("p", { children: [
          'Now in Pasadena, we live just a little bit outside of Old Town. Besides the cats that have been with me for the last 10 years, we have added two new members of the clan. A Betta (Brutus, and if you have never had a Betta, you do not appreciate the smarmy personality of this fish), and our pound puppy, Oberon (Obie). Obie is a Corgi/Chihuahua mix and is afflicted with a disease known as "perma-cute". He loves his walks, and loves his people.',
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("br", {}),
          "We're just getting used to our new environment. Between dog-walks and the rigors of postdoc-ing at Caltech, it will take me longer to get acquainted with LA the way that I am intimately acquainted with the Bay area. But Pasadena is growing on me, and without LA, we would not now have Obie."
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "row mb-5", children: [
      /* @__PURE__ */ jsx("div", { className: "row mb-2", children: /* @__PURE__ */ jsx("h2", { children: "Get in touch with me" }) }),
      /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("div", { className: "col-4", children: /* @__PURE__ */ jsx("img", { className: "cBorder", src: "images/herschel_staff_20.jpg", width: "220" }) }),
        /* @__PURE__ */ jsx("div", { className: "col-8", children: /* @__PURE__ */ jsxs("p", { children: [
          "Send me an email at the contact info above.",
          /* @__PURE__ */ jsx("br", {}),
          "Google+ me",
          /* @__PURE__ */ jsx("br", {}),
          "Add me in LinkedIn"
        ] }) })
      ] })
    ] })
  ] });
}
const me = UNSAFE_withComponentProps(function Home2() {
  return /* @__PURE__ */ jsx(Me, {});
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: me
}, Symbol.toStringTag, { value: "Module" }));
function Research() {
  return /* @__PURE__ */ jsxs("div", { className: "container ms-5 my-4 pe-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "row mb-5", children: [
      /* @__PURE__ */ jsx("div", { className: "row mb-2", children: /* @__PURE__ */ jsx("h2", { children: "Mapping shock conditions in compact groups" }) }),
      /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("div", { className: "col-5", children: /* @__PURE__ */ jsx("img", { className: "cBorder", src: "http://upload.wikimedia.org/wikipedia/commons/1/15/Stephan%27s_Quintet_X-ray_%2B_Optical.jpg", height: "224", width: "309" }) }),
        /* @__PURE__ */ jsx("div", { className: "col-7", children: /* @__PURE__ */ jsx("p", { children: "Hickson Compact Groups (HCGs) are sets of galaxies that are spatially related, but not yet dense or sufficiently numerous to be a part of a cluster, where the presence of hot intracluster gas is has a profound impact on the galaxies. The galaxies in these systems tend to undergo evolution rapidly, and therefore they make a wonderful testbed for the evolution of galaxies. I am studying 11 HCGs that showed boosted hot molecular hydrogen emission using the Herschel Space telescope, to determine their shock conditions through studying their [C II] emission. We aim to show that [C II] can be produced (and strongly enhanced) in shocks." }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "row mb-5", children: [
      /* @__PURE__ */ jsx("div", { className: "row mb-2", children: /* @__PURE__ */ jsx("h2", { children: "The CARMA CO-imaging survey of nearby early-type galaxies" }) }),
      /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("div", { className: "row mb-2", children: /* @__PURE__ */ jsx("div", { className: "col-9", children: /* @__PURE__ */ jsx("img", { className: "cBorder", src: "images/a3dgals.png", height: "362", width: "591" }) }) }),
        /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx("div", { className: "col-9", children: /* @__PURE__ */ jsx("p", { children: "I used CARMA to observe 30 early-type galaxies that are a part of the ATLAS3D survey, which were originally detected in CO with the IRAM 30m single dish in Pico Veleta, Spain. A total of 266 on-source hours were completed for the survey." }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "row mb-5", children: [
      /* @__PURE__ */ jsx("div", { className: "row mb-2", children: /* @__PURE__ */ jsx("h2", { children: "NGC 1266: host to a compact, mass-loaded molecular outflow" }) }),
      /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("div", { className: "col-6", children: /* @__PURE__ */ jsx("img", { className: "cBorder", src: "images/n1266r_out.jpg", height: "334", width: "369" }) }),
        /* @__PURE__ */ jsx("div", { className: "col-5", children: /* @__PURE__ */ jsx("p", { children: "NGC1266 was serendipitously discovered during the ATLAS3D survey. Although it appears to be a normal, non-interacting early-type galaxy, appearances deceive. In the galactic nucleus, a larger outflow of molecular gas is taking place, through the action of an AGN. NGC1266 might be the first local example of secular (or non-major merger) quenching of star formation. With little to no evidence that it has undergone any recent major interaction, it is possible that the molecular gas was driven to the center by a minor merger, and the AGN is able to drive the gas out." }) })
      ] })
    ] })
  ] });
}
const research = UNSAFE_withComponentProps(function Home3() {
  return /* @__PURE__ */ jsx(Research, {});
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: research
}, Symbol.toStringTag, { value: "Module" }));
function Papers() {
  return /* @__PURE__ */ jsxs("div", { className: "container ms-5 my-4 pe-5", children: [
    /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsxs("strong", { children: [
      "Refereed Journal Publications ",
      /* @__PURE__ */ jsx("a", { className: "sLink", href: "pdf/publications.pdf", download: true, children: "(pdf)" })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx("div", { className: "col-11", children: /* @__PURE__ */ jsxs("ol", { children: [
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, K." }),
        "; Davis, Timothy A.; Bureau, Martin; Young, Lisa M.; Blitz, Leo and 21 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``The ATLAS3D project - XVIII. CARMA CO imaging survey of early-type galaxies''" }),
        ", 2012, accepted for publication in the Monthly Notices of the Royal Astronomical Society, (arXiv:1210.5524)",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Davis, Timothy A.; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, Katherine" }),
        "; Sarzi, Marc; Bureau, Martin and 21 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``The ATLAS3D project - X. On the origin of the molecular and ionised gas in early-type galaxies''" }),
        ", 2011, Monthly Notices of the Royal Astronomical Society, 417, 882 ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Davis, Timothy A.; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, Katherine" }),
        "; Bureau, Martin; Cappellari, Michele; Scott, Nicholas and 21 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``The ATLAS3D project. - XIV. The extend and kinematics of the molecular gas in early-type galaxies.''" }),
        ", 2013, Monthly Notices of the Royal Astronomical Society, 429, 534 ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Yost, S. A.; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, K." }),
        "; Rykoff, E. S.; Aharonian, F.; Akerlof, C. W. and 27 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``Optical Light Curve and Cooling Break of GRB 050502A''" }),
        ", 2006, the Astrophysical Journal, 636, 959 ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Cappellari, Michele; Emsellem, Eric; Krajnovic, Davor; McDermid, Richard M.; Scott, Nicholas; Verdoes Kleijn, G. A.; Young, Lisa M.; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, Katherine" }),
        " and 18 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``The ATLAS3D project - I. A volume-limited sample of 260 nearby early-type galaxies: science goals and selection criteria''" }),
        ", 2011, Monthly Notices of the Royal Astronomical Society, 413, 813 ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Krajnovic, Davor; Emsellem, Eric; Cappellari, Michele; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, Katherine" }),
        " and 19 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``The ATLAS3D project - II. Morphologies, kinemetric features and alignment between photometric and kinematic axes of early-type galaxies''" }),
        ", 2011, Monthly Notices of the Royal Astronomical Society, 414, 2923 ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Emsellem, Eric; Cappellari, Michele; Krajnovic, Davor; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, Katherine" }),
        " and 20 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``The ATLAS3D project - III. A census of the stellar angular momentum within the effective radius of early-type galaxies: unveiling the distribution of fast and slow rotators''" }),
        ", 2011, Monthly Notices of the Royal Astronomical Society, 414, 888 ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Young, Lisa M.; Bureau, Martin; Davis, Timothy A.; Combes, Francoise; McDermid, Richard M.; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, Katherine" }),
        " and 18 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``The ATLAS3D project - IV. The molecular gas content of early-type galaxies''" }),
        ", 2011, Monthly Notices of the Royal Astronomical Society, 414, 940 ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, Katherine" }),
        "; Davis, Timothy A.; Bureau, Martin; Young, Lisa M.; Blitz, Leo and 21 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``The ATLAS3D project - XVIII. CARMA CO imaging survey of early-type galaxies''" }),
        ", 2012, accepted for publication in the Monthly Notices of the Royal Astronomical Society, (arXiv:1210.5524)",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Davis, Timothy A.; Bureau, Martin; Young, Lisa M.;",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, Katherine" }),
        "; Blitz, Leo; Cappellari, Michele; Scott, Nicholas and 16 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``The ATLAS3D project - V. The CO Tully-Fisher relation of early-type galaxies''" }),
        ", 2011, Monthly Notices of the Royal Astronomical Society, 414, 968 ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Bois, Maxime; Emsellem, Eric; Bournaud, Frédéric;",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, Katherine" }),
        " and 20 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``The ATLAS3D Project - VI. Simulations of binary galaxy mergers and the link with Fast Rotators, Slow Rotators, and Kinematically Distinct Cores''" }),
        ", 2011, Monthly Notices of the Royal Astronomical Society, 416, 1654",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Cappellari, Michele; Emsellem, Eric; Krajnovic, Davor; McDermid, Richard M.; Serra, Paolo; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, Katherine" }),
        " and 17 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``The ATLAS3D project - VII. A new look at the morphology of nearby galaxies: the kinematic morphology-density relation''" }),
        ", 2011, Monthly Notices of the Royal Astronomical Society, 416, 1680",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Khochfar, Sadegh; Emsellem, Eric; Serra, Paolo; Bois, Maxime; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, Katherine" }),
        "and 20 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``The ATLAS3D project - VIII. Modelling the Formation and Evolution of Fast and Slow Rotator Early-Type Galaxies within  CDM''" }),
        ", 2011, Monthly Notices of the Royal Astronomical Society, 417, 845 ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Duc, Pierre-Alain; Cuillandre, Jean-Charles; Serra, Paolo; Michel-Dansac, Leo; Ferriere, Etienne;",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, Katherine" }),
        " and 21 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``The ATLAS3D project - IX. The merger origin of a fast and a slow rotating Early-Type Galaxy revealed with deep optical imaging: first results''," }),
        " 2011, Monthly Notices of the Royal Astronomical Society, 417, 863",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Crocker, Alison; Krips, Melanie; Bureau, Martin; Young, Lisa M.; Davis, Timothy A.; Bayet, Estelle; Alatalo, Katherine; Blitz, Leo and 19 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``The ATLAS3D project - XI. Dense molecular gas properties of CO-luminous early-type galaxies''" }),
        ", 2012, Monthly Notices of the Royal Astronomical Society, 421 1298 ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Lablanche, Pierre-Yves; Cappellari, Michele; Emsellem, Eric; Bournaud, Frédéric; Michel-Dansac, Leo; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, Katherine" }),
        "; Blitz, Leo and 18 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``The ATLAS 3D project - XII. Recovery of the mass-to-light ratio of simulated early-type barred galaxies with axisymmetric dynamical models''" }),
        ", 2012, Monthly Notices of the Royal Astronomical Society, 424, 1495 ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Serra, Paolo; Oosterloo, Tom; Morganti, Raffaella;",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, Katherine" }),
        "; Blitz, Leo and 18 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``The ATLAS3D project - XIII. Mass and morphology of H I in early-type galaxies as a function of environment''" }),
        ", 2012, Monthly Notices of the Royal Astronomical Society, 422, 1835",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Cappellari, Michele; Scott, Nicholas; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, Katherine" }),
        "; Blitz, Leo; Bois, Maxime and 17 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``The ATLAS project - XV. Benchmark for early-type galaxies scaling relations from 260 dynamical models: mass-to-light ratio, dark matter, Fundamental Plane and Mass Plane.''" }),
        ", 2013, Monthly Notices of the Royal Astronomical Society, in press (arXiv:1208.3522) ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Bayet, Estelle; Bureau, Martin; Davis, Timothy A.; Young, Lisa M.; Crocker, Alison F.; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, Katherine" }),
        "; Blitz, Leo and 18 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``The ATLAS project - XVI. Physical parameters and spectral line energy distributions of the molecular gas in gas-rich early-type galaxies.''" }),
        ", 2013, Monthly Notices of the Royal Astronomical Society, in press (arXiv: 1212.2630) ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Krajnovic, Davor; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, Katherine" }),
        "; Blitz, Leo; Bois, Maxime; Bournaud, Frédéric and 18 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``The ATLAS project - XVII. Linking photometric and kinematic signatures of stellar discs in early-type galaxies.''" }),
        ", 2013, Monthly Notices of the Royal Astronomical Society, in press (arXiv:1210.8167) ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Sarzi, Marc; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, Katherine" }),
        "; Blitz, Leo; Bois, Maxime; Bournaud, Frédéric and 20 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``The ATLAS project - XIX. The hot gas content of early-type galaxies: fast versus slow rotators.''" }),
        ", 2013, Monthly Notices of the Royal Astronomical Society, in press (arXiv:1301.2589) ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Cappellari, Michele; Scott, Nicholas; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, Katherine" }),
        "; Blitz, Leo and 19 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``The ATLAS3D project - XX. Mass-size and Mass-sigma projections of the Virial Plane of early-type galaxies: variation of morphology, kinematics, mass-to-light ratio and stellar initial mass function''" }),
        ", 2013, Monthly Notices of the Royal Astronomical Society, in press (arXiv:1208.3523) ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Scott, Nicholas; Cappellari, Michele; Davies, Roger L.; Kleijn, Gijs Verdoes; Bois, Maxime; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, Katherine" }),
        "; Blitz, Leo; Bournaud, Frédéric and 17 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``The ATLAS3D project - XXI. Correlations between gradients of local escape velocity and stellar populations in early-type galaxies.''" }),
        ", 2013, Monthly Notices of the Royal Astronomical Society, in press (arXiv:1211.4615) ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Martig, Marie; Crocker, Alison F.; Bournaud, Frédéric; Gabor, Jared M; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, Katherine" }),
        "; Blitz, Leo; Bois, Maxime and 22 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``The ATLAS3D project - XXII. Low-efficiency star formation in early-type galaxies: hydrodynamic models and observations.''" }),
        ", 2013, Monthly Notices of the Royal Astronomical Society, in press (arXiv:1212.2288) ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Krajnovic, Davor; Karick, A. M.; Davies, Roger L.; Naab, Thorsten; Sarzi, Marc; Emsellem, Eric; Cappellari, Michele; Serra, Paolo; de Zeeuw, P. T.; Scott, Nicholas; McDermid, Richard M.; Weijmans, Anne-Marie; Davis, Timothy A.; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, Katherine" }),
        "; and 11 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``The ATLAS3D project - XXIII. Angular momentum and nuclear surface brightness profiles.''" }),
        ", 2013, accepted by the Monthly Notices of the Royal Astronomical Society (arXiv:1305.4973) ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Davis, Timothy A.; Krajnovic, Davor; McDermid, Richard M.; Bureau, Martin; Sarzi, Marc; Nyland, Kristina E.; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, Katherine" }),
        "; Bayet, Estelle and 19 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``Gemini GMOS and WHT SAURON integral-field spectrograph observations of the AGN-driven outflow in NGC 1266''" }),
        ", 2012, Monthly Notices of the Royal Astronomical Society, 426, 1574 ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Serra, Paolo; Koribalski, Baerbel; Duc, Pierre-Alain; Oosterloo, Tom; McDermid, Richard M.; Michel-Dansac, Leo; Emsellem, Eric; Cuillandre, Jean-Charles; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, Katherine" }),
        "; Blitz, Leo and 15 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``Discovery of a giant HI tail in the galaxy group HCG 44" }),
        ", accepted for publication in Monthly Notices of the Royal Astronomical Society, arXiv:1209.4107 ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Cappellari, Michele; McDermid, Richard M.; Scott, Nicholas; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, Katherine" }),
        "; Blitz, Leo; Bois, Maxime and 20 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "Systematic variaion of the stellar initial mass function in early-type galaxies" }),
        ", 2012, Nature, 484, 485 ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Bois, M.; Bournaud, F.; Emsellem, E.; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, K." }),
        " and 20 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``Formation of slowly rotating early-type galaxies via major mergers: a resolution study''" }),
        ", 2010, Monthly Notices of the Royal Astronomical Society, 406, 2405",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Prochaska, J. X.; Bloom, J. S.; Chen, H.-W.; Foley, R. J.; Perley, D. A.; Ramirez-Ruiz, E.; Granot, J.; Lee, W. H.; Pooley, D.; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, K." }),
        " and 12 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``The Galaxy Hosts and Large-Scale Environments of Short-Hard Gamma-Ray Bursts''" }),
        ", 2006, the Astrophysical Journal, 642, 989 ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Quimby, R. M.; Rykoff, E. S.; Yost, S. A.; Aharonian, F.; Akerlof, C. W.; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, K." }),
        " and 15 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``Early-Time Observations of the GRB 050319 Optical Transient''" }),
        ", 2006, the Astrophysical Journal, 640, 402 ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Rykoff, E. S.; Yost, S. A.; Krimm, H. A.; Aharonian, F.; Akerlof, C. W.; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, K." }),
        " and 18 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``Prompt Optical Detection of GRB 050401 with ROTSE-IIIa''" }),
        ", 2005, the Astrophysical Journal Letters, 631, L121 ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Rykoff, E. S.; Aharonian, F.; Akerlof, C. W.; ",
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, K." }),
        " and 16 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``A Search for Untriggered GRB Afterglows with ROTSE-III''" }),
        ", 2005, the Astrophysical Journal, 631, 1032"
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: "Un-refereed Publications" }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, K." }),
        "; Nyland, K. E.; Graves, G.; Deustua, S.; Young, L. M. and 20 co-authors ",
        /* @__PURE__ */ jsx("em", { children: "``Quenching of Star Formation in Molecular Outflow Host NGC 1266''" }),
        ", 2012, Proceedings IAU Symposium No. 292 ",
        /* @__PURE__ */ jsx("br", {})
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Alatalo, K." }),
        "; Nyland, K. E.; Graves, G.; Deustua, S.; Wrobel, J. and 22 co-authors",
        /* @__PURE__ */ jsx("em", { children: "``AGN Feedback Driven Molecular Outflow in NGC 1266''" }),
        ", 2012, Proceedings IAU Symposium No. 290"
      ] }) })
    ] })
  ] });
}
const papers = UNSAFE_withComponentProps(function Home4() {
  return /* @__PURE__ */ jsx(Papers, {});
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: papers
}, Symbol.toStringTag, { value: "Module" }));
function CV() {
  return /* @__PURE__ */ jsxs("div", { className: "container ms-5 my-4 pe-5", children: [
    /* @__PURE__ */ jsx("div", { className: "row p mb-2", children: /* @__PURE__ */ jsxs("div", { className: "col", children: [
      /* @__PURE__ */ jsx("big", { children: /* @__PURE__ */ jsx("b", { children: "DR. KATHERINE ALATALO" }) }),
      /* @__PURE__ */ jsx("a", { className: "sLink", href: "pdf/cv.pdf", download: true, children: " (pdf)" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "row p mb-2", children: [
      /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx("b", { children: "Education " }) }),
      /* @__PURE__ */ jsx("div", { className: "row ms-1", children: "University of California, Berkeley Astrophysics Ph.D., 2012" }),
      /* @__PURE__ */ jsx("div", { className: "row ms-1", children: "University of California, Berkeley Astrophysics M.S., 2008" }),
      /* @__PURE__ */ jsx("div", { className: "row ms-1", children: "University of Michigan Physics and Astronomy B.S. (High Distinction), 2004" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "row mb-2", children: /* @__PURE__ */ jsx("hr", { className: "sLine" }) }),
    /* @__PURE__ */ jsxs("div", { className: "row p mb-2", children: [
      /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx("b", { children: "Awards " }) }),
      /* @__PURE__ */ jsx("div", { className: "row ms-1", children: "NSF Graduate Research Fellowship" }),
      /* @__PURE__ */ jsx("div", { className: "row ms-1", children: "Phi Beta Kappa" }),
      /* @__PURE__ */ jsx("div", { className: "row ms-1", children: "Michigan Space Grant Consortium" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "row mb-2", children: /* @__PURE__ */ jsx("hr", { className: "sLine" }) }),
    /* @__PURE__ */ jsxs("div", { className: "row p mb-2", children: [
      /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx("b", { children: "Professional Memberships " }) }),
      /* @__PURE__ */ jsx("div", { className: "row ms-1", children: "The American Astronomical Society" }),
      /* @__PURE__ */ jsx("div", { className: "row ms-1", children: "Sigma Pi Sigma, Physics Honor Society" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "row mb-2", children: /* @__PURE__ */ jsx("hr", { className: "sLine" }) }),
    /* @__PURE__ */ jsxs("div", { className: "row p mb-2", children: [
      /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx("b", { children: "Professional History " }) }),
      /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("div", { className: "col-9 ms-1", children: "Postdoctoral Scholar, Infrared Processing and Analysis Center, Caltech" }),
        /* @__PURE__ */ jsx("div", { className: "col-2", children: "2012-Present" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "row ms-1", children: "Advisor: Phil Appleton (IPAC, Caltech)" }),
      /* @__PURE__ */ jsx("div", { className: "row ms-1", children: "Multiwavelength follow-up of AGN feedback in NGC 1266" }),
      /* @__PURE__ */ jsx("div", { className: "row ms-1 mb-3", children: "Mapping [C II] and [O I] cooling lines from shocks in Hickson Compact Groups" }),
      /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("div", { className: "col-9 ms-1", children: "Graduate Student Researcher, UC-Berkeley Dept of Astronomy" }),
        /* @__PURE__ */ jsx("div", { className: "col-2", children: "2005-2012" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "row ms-1", children: "Advisors: Carl Heiles (UC - Berkeley) & Lisa Young (NMT, NRAO)" }),
      /* @__PURE__ */ jsx("div", { className: "row ms-1", children: "Mapping molecular gas rich ETGs in the ATLAS3D survey using CARMA" }),
      /* @__PURE__ */ jsx("div", { className: "row ms-1 mb-3", children: "Multiwavelength follow-up of AGN feedback in NGC 1266" }),
      /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("div", { className: "col-9 ms-1", children: "Undergraduate Research Assistant, Univ. Michigan Dept of Physics" }),
        /* @__PURE__ */ jsx("div", { className: "col-2", children: "2003-2005" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "row ms-1", children: "Advisors: Carl Akerlof & Timothy McKay (U. Michigan)" }),
      /* @__PURE__ */ jsx("div", { className: "row ms-1", children: "Following up optical counterparts to gamma-ray bursts" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "row mb-2", children: /* @__PURE__ */ jsx("hr", { className: "sLine" }) }),
    /* @__PURE__ */ jsxs("div", { className: "row p mb-2", children: [
      /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx("b", { children: "Data Experience " }) }),
      /* @__PURE__ */ jsx("div", { className: "row ms-1", children: "Reduced data from: SMA, EVLA, CARMA, ROTSE, Herschel and Swift UVOT" }),
      /* @__PURE__ */ jsx("div", { className: "row ms-1", children: "Analyzed: X-ray images & spectra, IR SEDs, UBV photometry, radio & mm images" }),
      /* @__PURE__ */ jsx("div", { className: "row ms-1", children: "Attended: CARMA Summer School (2008), EVLA Synthesis Imaging School (2010) and Winter School in the Canary Islands: Secular Evolution of Galaxies (2011)" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "row mb-2", children: /* @__PURE__ */ jsx("hr", { className: "sLine" }) }),
    /* @__PURE__ */ jsxs("div", { className: "row p mb-5", children: [
      /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx("b", { children: "Teaching & Advising Experience " }) }),
      /* @__PURE__ */ jsx("div", { className: "row ms-1", children: "Teaching & Lab Assistant, ``Radio Astronomy Practical Lab'', UC-Berkeley, Spring 2007" }),
      /* @__PURE__ */ jsx("div", { className: "row ms-1", children: "Teaching Assistant, ``Introduction to Astrophysics 1'', UC-Berkeley, Fall 2006" }),
      /* @__PURE__ */ jsx("div", { className: "row ms-1", children: "Teaching Assistant, ``Introduction to Astrophysics 2'', UC-Berkeley, Spring 2006" }),
      /* @__PURE__ */ jsx("div", { className: "row ms-1", children: "Teaching Assistant, ``Introduction to General Astronomy', UC-Berkeley, Fall 2005" })
    ] })
  ] });
}
const cv = UNSAFE_withComponentProps(function Home5() {
  return /* @__PURE__ */ jsx(CV, {});
});
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cv
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DKzp6tRF.js", "imports": ["/assets/chunk-NL6KNZEE-CXTRjVdk.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-DcPnhP8f.js", "imports": ["/assets/chunk-NL6KNZEE-CXTRjVdk.js"], "css": ["/assets/root-3Rz_PLzY.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/header": { "id": "routes/header", "parentId": "root", "path": "/", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/header-cn0zQlRw.js", "imports": ["/assets/chunk-NL6KNZEE-CXTRjVdk.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "routes/header", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-D9WTaW-m.js", "imports": ["/assets/chunk-NL6KNZEE-CXTRjVdk.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/me": { "id": "routes/me", "parentId": "routes/header", "path": "/me", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/me-secVIxRG.js", "imports": ["/assets/chunk-NL6KNZEE-CXTRjVdk.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/research": { "id": "routes/research", "parentId": "routes/header", "path": "/research", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/research-DjY7sZyj.js", "imports": ["/assets/chunk-NL6KNZEE-CXTRjVdk.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/papers": { "id": "routes/papers", "parentId": "routes/header", "path": "/papers", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/papers-BRHQShDr.js", "imports": ["/assets/chunk-NL6KNZEE-CXTRjVdk.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/cv": { "id": "routes/cv", "parentId": "routes/header", "path": "/cv", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/cv-q9ABK24-.js", "imports": ["/assets/chunk-NL6KNZEE-CXTRjVdk.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-50e5ceb8.js", "version": "50e5ceb8", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/header": {
    id: "routes/header",
    parentId: "root",
    path: "/",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/home": {
    id: "routes/home",
    parentId: "routes/header",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route2
  },
  "routes/me": {
    id: "routes/me",
    parentId: "routes/header",
    path: "/me",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/research": {
    id: "routes/research",
    parentId: "routes/header",
    path: "/research",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/papers": {
    id: "routes/papers",
    parentId: "routes/header",
    path: "/papers",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/cv": {
    id: "routes/cv",
    parentId: "routes/header",
    path: "/cv",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
