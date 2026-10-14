// Libraries Imports
import { Mail } from "lucide-react";
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
            <p className="text-lg font-semibold text-blue-700 leading-snug">
              {about?.title}
            </p>
            <p className="text-base text-gray-700 pt-1">
              {about?.degree}, {about?.instituteName}
            </p>
            {about?.advisor && (
              <p className="text-base text-gray-600">
                Advised by{" "}
                <a
                  href={about.advisor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {about.advisor.name}
                </a>
              </p>
            )}
            <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-2">
              <a
                href={`mailto:${about?.email}`}
                className="p-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 group"
                aria-label="Email"
                title={about?.email}
              >
                <Mail size={24} />
              </a>
              <SocialLinksComp />
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-3 text-lg leading-relaxed text-gray-700">
            <h3 className="text-xl font-bold text-gray-900">
              Current Research Work
            </h3>
            <ol className="list-decimal pl-6 space-y-3">
              {about?.currentWork?.map((work) => (
                <li key={work.title}>
                  <span className="font-semibold text-gray-900">
                    {work.title}:
                  </span>{" "}
                  {work.description}
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-3 text-lg leading-relaxed text-gray-700">
            <h3 className="text-xl font-bold text-gray-900">
              Industry Experience
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              {about?.industryExperience?.map((job) => (
                <li key={job.organization}>
                  <span className="font-semibold text-gray-900">
                    {job.role}
                  </span>
                  ,{" "}
                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {job.organization}
                    </a>
                  ) : (
                    job.organization
                  )}
                  {job.description && <>, {job.description}</>}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 text-lg leading-relaxed text-gray-700">
            <h3 className="text-xl font-bold text-gray-900">
              Fellowship, Service & Teaching
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              {about?.serviceAndTeaching?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 w-fit">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">
              {about?.callout}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
