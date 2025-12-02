// Local Imports
import SocialLinksComp from "@/components/social-links";
import { about } from "@/data/content";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="w-full py-10 bg-linear-to-br from-slate-50 via-white to-blue-50/50"
    >
      <div className="max-w-6xl mx-auto px-6 xl:px-0 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap10  items-start">
        <div className="flex flex-col items-center lg:items-start gap-8">
          <div className="w-full flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-4xl overflow-hidden shadow-xl border-2 border-white bg-white transition">
              <img
                src={about.imageUrl}
                alt="Maha Zainab - Researcher"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="text-center lg:text-left space-y-1">
            <h2 className="text-3xl font-bold text-gray-900">{about?.name}</h2>
            <p className="text-lg font-semibold text-gray-800">
              {about?.degree}
            </p>
            <p className="text-gray-600">{about?.instituteName}</p>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-700">
              <span className="font-medium">Email:</span>
              <span className="truncate">{about?.email}</span>
            </div>
            <div className="pt-4 flex justify-center lg:justify-start gap-2">
              <SocialLinksComp />
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-5 text-lg leading-relaxed text-gray-700">
            <p>{about?.p1}</p>
            {about?.p2 && <p>{about?.p2}</p>}
            {about?.p3 && <p>{about?.p3}</p>}
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 w-fit">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">
              Available for Research Collaborations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
