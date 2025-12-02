// Libraries Imports
import type { Book } from "@/types/content";
import { Bookmark, BookOpen } from "lucide-react";

export function groupAndPaginate<T>(
  items: T[],
  groupBy: keyof T,
  visibleCount: number
) {
  const groups: Record<string, T[]> = {};

  items.forEach((item) => {
    const keyValue = String(item[groupBy]);
    if (!groups[keyValue]) groups[keyValue] = [];
    groups[keyValue].push(item);
  });

  const sortedKeys = Object.keys(groups).sort((a, b) => {
    const na = Number(a);
    const nb = Number(b);
    return !isNaN(na) && !isNaN(nb) ? nb - na : b.localeCompare(a);
  });

  let count = 0;
  const visibleGroups: Record<string, T[]> = {};

  for (const key of sortedKeys) {
    const arr = groups[key];
    const remaining = visibleCount - count;

    if (remaining <= 0) break;

    if (arr.length <= remaining) {
      visibleGroups[key] = arr;
      count += arr.length;
    } else {
      visibleGroups[key] = arr.slice(0, remaining);
      break;
    }
  }

  return {
    visibleGroups,
    sortedKeys: Object.keys(visibleGroups).sort((a, b) => {
      const na = Number(a);
      const nb = Number(b);
      return !isNaN(na) && !isNaN(nb) ? nb - na : b.localeCompare(a);
    }),
  };
}

export const getStatusBadge = (status: string) => {
  if (status === "completed") {
    return {
      bgColor: "bg-blue-100",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      icon: Bookmark,
      iconColor: "text-blue-600",
    };
  } else {
    return {
      bgColor: "bg-amber-100",
      borderColor: "border-amber-200",
      textColor: "text-amber-700",
      icon: BookOpen,
      iconColor: "text-amber-600",
    };
  }
};

export const getSortedBooksByStatus = (books: Book[]) => {
  return books.sort((a, b) => {
    if (a.status === "currently reading" && b.status === "completed") return -1;
    if (a.status === "completed" && b.status === "currently reading") return 1;
    return 0;
  });
};
