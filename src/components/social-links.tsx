// Libraries Imports
import { Link } from "react-router-dom";
// Local Imports
import { socialLinks } from "@/data/social-links";
import { type SocialLink } from "@/types/social-links";

export default function SocialLinksComp() {
  return (
    <>
      {socialLinks.map((link: SocialLink, index: number) => (
        <Link
          key={index}
          to={link.href}
          className="p-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 group"
          aria-label={link.label}
          dangerouslySetInnerHTML={{ __html: link.icon }}
        />
      ))}
    </>
  );
}
