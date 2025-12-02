// Libraries Imports
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
// Local Imports
import { Button } from "@/components/ui/button";

export default function ScrollToggleButton() {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;

      setAtBottom(nearBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollAction = () => {
    window.scrollTo({
      top: atBottom ? 0 : document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollAction}
      className="
        fixed bottom-8 right-8 z-50
        p-4 rounded-full shadow-lg
        bg-black text-white
        hover:bg-[#155dfc]
        transition-all duration-300
      "
    >
      {atBottom ? <ArrowUp size={22} /> : <ArrowDown size={22} />}
    </Button>
  );
}
