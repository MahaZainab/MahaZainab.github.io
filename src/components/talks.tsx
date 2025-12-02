// Libraries Imports
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Mic, Projector } from "lucide-react";
// Local Imports
import { Button } from "@/components/ui/button";
import { groupAndPaginate } from "@/helpers/helpers";
import { talks } from "@/data/content";
import EmptyStateComp from "@/components/no-data";

export default function TalksSection() {
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight < docHeight - 50) {
        setVisibleCount((prev) => {
          if (prev >= talks.length) return prev;
          return Math.min(prev + 5, talks.length);
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { visibleGroups, sortedKeys } = groupAndPaginate(
    talks,
    "year",
    visibleCount
  );

  return (
    <section id="talks" className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <div className="text-left xl:text-center mb-10">
          <h2 className="text-5xl font-bold mb-4 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Talks
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
                  {visibleGroups[year]?.length} talk
                  {visibleGroups[year]?.length > 1 ? "s" : ""}
                </span>
              </div>
              <div className="grid gap-4">
                {visibleGroups[year]?.map((item) => (
                  <div
                    key={item?.id}
                    className="group bg-white rounded-2xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200">
                            <Mic size={16} className="text-blue-600" />
                            <span className="text-sm font-medium text-blue-700">
                              {item?.category || "Talk"}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {item?.organization}
                        </h3>
                        <h3 className="text-md text-gray-600">{item?.title}</h3>
                      </div>
                      <div className="flex lg:flex-col items-center lg:items-end gap-4 lg:gap-2">
                        {item?.slidesLink && (
                          <Link to={item?.slidesLink}>
                            <Button
                              variant={"outline"}
                              className="flex items-center gap-2 px-6 py-3 text-lg cursor-pointer rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors hover:text-white"
                            >
                              <Projector size={18} />
                              Slides
                            </Button>
                          </Link>
                        )}
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
