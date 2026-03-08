// =============================================
// 🧭 NAVIGATION — controls which pages appear in menus & home cards
// =============================================
//
// HOW TO SHOW/HIDE A PAGE:
//   Set "hidden: true"  → page is hidden from nav menu AND home cards
//   Set "hidden: false" → page is visible everywhere
//
// The page still exists and is accessible by URL even when hidden.
// Order here = order in the menu and on the home page.

export interface NavItem {
  to: string;
  label: string;
  /** Which key in photos to use for the home card image */
  photosKey?: "portraits" | "maternity" | "families" | "lifestyle";
  /** Hide from navigation and home page cards */
  hidden: boolean;
  /** Never show as a gallery card on home (e.g. About, Contact) */
  isPage?: boolean;
}

export const navigation: NavItem[] = [
  { to: "/", label: "Home", hidden: false, isPage: true },
  { to: "/portraits", label: "Portraits", photosKey: "portraits", hidden: false },
  { to: "/maternity", label: "Maternity", photosKey: "maternity", hidden: false },
  { to: "/families", label: "Families", photosKey: "families", hidden: true },
  { to: "/lifestyle", label: "Lifestyle", photosKey: "lifestyle", hidden: false },
  { to: "/about", label: "About", hidden: false, isPage: true },
  { to: "/contact", label: "Contact", hidden: false, isPage: true },
];
