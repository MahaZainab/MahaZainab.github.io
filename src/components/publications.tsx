import { useState, useEffect, type JSX } from "react";
import { Link } from "react-router-dom";
import { FileText, PlayIcon, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { publications } from "@/data/content";
import { groupAndPaginate } from "@/helpers/helpers";
import EmptyStateComp from "@/components/no-data";

export default function PublicationSection() {
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight < docHeight - 50) {
        setVisibleCount((prev) => {
          if (prev >= publications.length) return prev;
          return Math.min(prev + 5, publications.length);
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatAuthors = (authors: string | string[]): JSX.Element => {
    const authorsArray =
      typeof authors === "string"
        ? authors.split(",").map((a) => a.trim())
        : authors;

    return (
      <>
        {authorsArray.map((author, index) => (
          <span key={index}>
            {author === "Maha Zainab" ? (
              <strong className="font-bold text-gray-900">{author}</strong>
            ) : (
              author
            )}
            {index < authorsArray.length - 1 && ", "}
          </span>
        ))}
      </>
    );
  };

  const { visibleGroups, sortedKeys } = groupAndPaginate(
    publications,
    "year",
    visibleCount
  );

  return (
    <section id="publications" className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <div className="text-left lg:text-center mb-10">
          <h2 className="text-5xl font-bold mb-4 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Publications
          </h2>
        </div>
        <div className="space-y-6">
          {sortedKeys.length === 0 && <EmptyStateComp />}
          {sortedKeys?.map((year) => (
            <div key={year} className="space-y-2">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-blue-600" />
                <h3 className="text-3xl font-bold text-gray-900">{year}</h3>
                <div className="flex-1 h-px bg-gray-300 ml-4" />
                <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  {visibleGroups[year]?.length} publication
                  {visibleGroups[year]?.length > 1 ? "s" : ""}
                </span>
              </div>
              <div className="grid gap-4">
                {visibleGroups[year]?.map((item) => (
                  <div
                    key={item?.id}
                    className="group bg-white rounded-2xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">
                          {item?.title}
                        </h3>
                        <p className="text-gray-600 text-md">
                          {formatAuthors(item?.authors)}
                        </p>
                        {item?.doi && (
                          <span className="text-sm text-gray-500 font-mono">
                            DOI: {item?.doi}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        {item?.pdfLink && (
                          <Link to={item?.pdfLink}>
                            <Button className="flex items-center gap-2 px-6 py-3 text-lg rounded-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors">
                              <FileText size={18} /> PDF
                            </Button>
                          </Link>
                        )}
                        {item?.talkLink && (
                          <Link to={item?.talkLink}>
                            <Button className="flex items-center gap-2 px-6 py-3 text-lg rounded-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors">
                              <PlayIcon size={18} /> Talk
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
