// Libraries Imports
import { useState, useEffect } from "react";
import { Calendar, Newspaper } from "lucide-react";
// Local Imports
import { groupAndPaginate } from "@/helpers/helpers";
import { news } from "@/data/content";
import EmptyStateComp from "@/components/no-data";

export default function NewsSection() {
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight < docHeight - 50) {
        setVisibleCount((prev) => {
          if (prev >= news.length) return prev;
          return Math.min(prev + 5, news.length);
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { visibleGroups, sortedKeys } = groupAndPaginate(
    news,
    "year",
    visibleCount
  );

  return (
    <section id="news" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <div className="text-left lg:text-center mb-10">
          <h2 className="text-5xl font-bold mb-4 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Latest News & Updates
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
                  {visibleGroups[year]?.length} news
                </span>
              </div>
              <div className="grid gap-4">
                {visibleGroups[year]?.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-white rounded-2xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-3">
                      <h3 className="text-xl font-bold text-gray-900 min-w-[200px]">
                        {item?.title}
                      </h3>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 w-fit">
                        <Newspaper size={16} className="text-blue-600" />
                        <span className="text-sm font-medium text-blue-700 whitespace-nowrap">
                          {item?.category || "News"}
                        </span>
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
