// Libraries Imports
import { Mail, MapPin } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
// Local Imports
import SocialLinksComp from "@/components/social-links";
import { about } from "@/data/content";
import { menuItems } from "@/data/navbar";
import InstallPWAButton from "@/components/install-btn";
import { Link } from "react-router-dom";

export default function FooterSection() {
  return (
    <footer className="w-full bg-linear-to-b from-gray-50 to-white border-t border-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Maha Zainab
            </h2>
            <p className="text-gray-600 text-lmd leading-relaxed">
              Researcher & Scientist exploring the intersections of innovation,
              technology, and human experience.
            </p>
            <div className="flex items-center gap-2 text-gray-500">
              <MapPin size={16} />
              <span className="text-sm">{about?.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Mail size={16} />
              <span className="text-sm">{about?.email}</span>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">Navigation</h3>
            <div>
              {menuItems.map((item) => (
                <ScrollLink
                  to={item?.url}
                  key={item?.title}
                  className="block text-gray-600 cursor-pointer hover:text-blue-600 transition-colors duration-200 text-md"
                >
                  {item?.title}
                </ScrollLink>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">
              Research Areas
            </h3>
            <div>
              {about?.researchAreas?.map((researchArea) => (
                <span
                  key={researchArea}
                  className="block text-gray-600 text-md"
                >
                  {researchArea}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">
              Connect With Me
            </h3>
            <div className="space-y-3">
              <div className="flex gap-4">
                <SocialLinksComp />
              </div>
              <InstallPWAButton />
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-linear-to-r from-transparent via-gray-300 to-transparent my-2"></div>
        <div className="flex flex-col lg:flex-row justify-center items-start sm:items-center gap-6">
          <div>
            <Link to={"https://www.linkedin.com/in/muhammadfarooq85"}>
              <p className="text-gray-500 text-sm hover:text-blue-500">
                Developed by Muhammad Farooq.
              </p>
            </Link>
            <p className="text-gray-400 text-xs mt-1 text-left xl:text-center">
              Last Updated:{" "}
              {new Date(import.meta.env.BUILD_DATE).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
