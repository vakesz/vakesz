export const SITE = {
  title: "vakesz",
  description:
    "Software engineer at Sigma Technology. Backend systems, developer tooling, and occasionally things with wheels.",
  author: "Gabor Pinkova",
  url: "https://vakesz.com",
  locale: "en_US",
  email: "hello@vakesz.com",
} as const;

export const rssLanguage = SITE.locale.replace("_", "-").toLowerCase();

export const NAV = [
  { href: "/posts/", label: "Posts" },
  { href: "/projects/", label: "Projects" },
  { href: "/about/", label: "About" },
  { href: "/search/", label: "Search" },
] as const;

export const SOCIAL = {
  github: "https://github.com/vakesz",
  twitter: "https://twitter.com/vakeszqe",
  linkedin: "https://linkedin.com/in/gabor-pinkova",
  instagram: "https://instagram.com/vakeszqe",
  youtube: "https://youtube.com/@vakeszqe",
} as const;

export const GA_ID = "G-7FB5CVV3WZ";
