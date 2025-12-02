// Libraries Imports
import { useState, useEffect } from "react";
import { Calendar, Trophy } from "lucide-react";
// Local Imports
import { awards } from "@/data/content";
import { groupAndPaginate } from "@/helpers/helpers";
import EmptyStateComp from "@/components/no-data";

export default function AwardsSection() {
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight < docHeight - 50) {
        setVisibleCount((prev) => {
          if (prev >= awards.length) return prev;
          return Math.min(prev + 5, awards.length);
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { visibleGroups, sortedKeys } = groupAndPaginate(
    awards,
    "year",
    visibleCount
  );

  return (
    <section id="awards" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <div className="text-left xl:text-center mb-10">
          <h2 className="text-5xl font-bold mb-4 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Awards & Honors
          </h2>
        </div>
        <div className="space-y-6">
          {sortedKeys.length === 0 && <EmptyStateComp />}
          {sortedKeys?.map((year) => (
            <div key={year} className="space-y-2">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-blue-600" />
                <h3 className="text-3xl font-bold text-gray-900">{year}</h3>
                <div className="flex-1 h-px bg-gray-300 ml-4"></div>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {visibleGroups[year]?.length} award
                  {visibleGroups[year]?.length > 1 ? "s" : ""}
                </span>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {visibleGroups[year]?.map((item) => (
                  <div
                    key={item?.id}
                    className="group relative bg-white rounded-2xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200"
                  >
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-linear-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Trophy size={20} className="text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">
                        {item?.title}
                      </h3>
                      <div>
                        <p className="text-md font-medium text-gray-600">
                          {item?.organization}
                        </p>
                      </div>
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
