// Libraries Imports
import { useState, useEffect } from "react";
import { Calendar, FolderKanban } from "lucide-react";

// Local Imports
import { projects } from "@/data/content";
import { groupAndPaginate } from "@/helpers/helpers";
import EmptyStateComp from "@/components/no-data";

export default function ProjectsSection() {
  const [visibleCount, setVisibleCount] = useState(15);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight < docHeight - 50) {
        setVisibleCount((prev) => {
          if (prev >= projects.length) return prev;
          return Math.min(prev + 5, projects.length);
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { visibleGroups, sortedKeys } = groupAndPaginate(
    projects,
    "year",
    visibleCount
  );

  return (
    <section id="projects" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <div className="text-left xl:text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Projects
          </h2>
        </div>

        <div className="space-y-6">
          {sortedKeys.length === 0 && <EmptyStateComp />}

          {sortedKeys?.map((year) => (
            <div key={year} className="space-y-2">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">{year}</h3>
                <div className="flex-1 h-px bg-gray-300 ml-4"></div>
                <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {visibleGroups[year]?.length} project
                  {visibleGroups[year]?.length > 1 ? "s" : ""}
                </span>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {visibleGroups[year]?.map((item) => (
                  <div
                    key={item?.id}
                    className="group relative bg-white rounded-2xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200"
                  >
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-linear-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <FolderKanban size={20} className="text-white" />
                    </div>

                    <div className="space-y-2 pr-8">
                      <h3 className="text-base font-bold text-gray-900 leading-tight">
                        {item?.title}
                      </h3>

                      <p className="text-xs font-medium text-blue-700">
                        {item?.technology}
                      </p>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}