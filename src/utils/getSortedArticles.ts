import { ArticleProps } from "../models/types";

const getSortedArticles = (sortingOption: string, articles: ArticleProps[]) => {
  const sorted = articles;

  switch (sortingOption) {
    case "latestToEarliest":
      sorted.sort(
        (a, b) => new Date(b?.date!).getTime() - new Date(a?.date!).getTime()
      );
      break;
    case "earliestToLatest":
      sorted.sort(
        (a, b) => new Date(a?.date!).getTime() - new Date(b?.date!).getTime()
      );
      break;
    case "titleDescending":
      sorted.sort((a, b) => b?.title!.localeCompare(a.title!));
      break;
    case "titleAscending":
      sorted.sort((a, b) => a?.title!.localeCompare(b?.title!));
      break;
    default:
      break;
  }

  return sorted;
};

export default getSortedArticles;
