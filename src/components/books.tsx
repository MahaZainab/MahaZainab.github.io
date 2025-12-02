// Libraries Imports
import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
// Local Imports
import {
  getSortedBooksByStatus,
  getStatusBadge,
  groupAndPaginate,
} from "@/helpers/helpers";
import { books } from "@/data/content";
import EmptyStateComp from "@/components/no-data";

export default function BooksSection() {
  const [visibleCount, setVisibleCount] = useState(5);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight < docHeight - 50) {
        setVisibleCount((prev) => {
          if (prev >= books.length) return prev;
          return Math.min(prev + 5, books.length);
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { visibleGroups, sortedKeys } = groupAndPaginate(
    books,
    "year",
    visibleCount
  );

  return (
    <section id="books" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <div className="text-left lg:text-center mb-10">
          <h2 className="text-5xl font-bold mb-4 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Books
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
                  {visibleGroups[year]?.length} book
                  {visibleGroups[year]?.length > 1 ? "s" : ""}
                </span>
              </div>
              <div className="grid gap-4">
                {getSortedBooksByStatus(visibleGroups[year] || [])?.map(
                  (item) => {
                    const statusBadge = getStatusBadge(item?.status);
                    const StatusIcon = statusBadge?.icon;
                    return (
                      <div
                        key={item?.id}
                        className="group bg-white rounded-2xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200"
                      >
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                              <div
                                className={`flex items-center gap-2 px-3 py-1 rounded-full ${statusBadge.bgColor} border ${statusBadge.borderColor}`}
                              >
                                <StatusIcon
                                  size={16}
                                  className={statusBadge.iconColor}
                                />
                                <span
                                  className={`text-sm font-medium ${statusBadge.textColor}`}
                                >
                                  {item.status === "completed"
                                    ? "Completed"
                                    : "Currently Reading"}
                                </span>
                              </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {item?.title}
                            </h3>
                            <p className="text-md font-medium text-gray-700">
                              by {item?.author}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
