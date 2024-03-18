import { useEffect, useState } from "react";
import axios from "axios";
import { ArticleProps } from "../../models/types";
import { appConstants } from "../../utils/constants";
import Loader from "../../components/Loader";
import FilterList from "../../components/FilterList";
import SortingOption from "../../components/SortingOption";
import ArticleList from "../../components/ArticleList";
import Pagination from "../../components/Pagination";
import "./Home.scss";

const Home = () => {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<ArticleProps[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [authors, setAuthors] = useState<string[]>([]);
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [sortingOption, setSortingOption] = useState("latestToEarliest");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch articles from the API URL
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(appConstants.FETCH_API_URL);
        const articlesData: ArticleProps[] = response.data;

        // Extract unique categories and authors from articles data
        const categoriesList = new Set(
          articlesData.map((article) => article.source)
        );
        const authorsList = new Set(
          articlesData.map((article) => article.author)
        );

        setArticles(articlesData);
        setFilteredArticles(articlesData);
        setCategories(Array.from(categoriesList) as string[]);
        setAuthors(Array.from(authorsList) as string[]);
        setLoading(false);
      } catch (err) {
        setError(appConstants.ERROR_MESSAGE);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Filter articles whenever the filters change
  useEffect(() => {
    filterArticles();
  }, [selectedCategories, selectedAuthors]);

  // Sort articles whenever the sorting option changes
  useEffect(() => {
    sortArticles();
  }, [sortingOption, articles]);

  // Filter articles function
  const filterArticles = () => {
    let filtered = [...articles];

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((article) =>
        selectedCategories.includes(article.source!)
      );
    }

    if (selectedAuthors.length > 0) {
      filtered = filtered.filter((article) =>
        selectedAuthors.includes(article.author!)
      );
    }

    setFilteredArticles(filtered);
  };

  // Sort articles function
  const sortArticles = () => {
    const sorted = [...filteredArticles];

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

    setFilteredArticles(sorted);
  };

  // Event handlers for category and author filter changes
  const handleCategoryFilterChange = (category: string) =>
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );

  const handleAuthorFilterChange = (author: string) =>
    setSelectedAuthors((prev) =>
      prev.includes(author)
        ? prev.filter((item) => item !== author)
        : [...prev, author]
    );

  // Event handler for sorting option change
  const handleSortingOptionChange = (option: string) =>
    setSortingOption(option);

  // Event handler to display articles per page
  const handlePageArticles = (currentArticles: ArticleProps[]) => {
    // This functionality is breaking, need to fix
    // setFilteredArticles(currentArticles);
  };

  return (
    <div className="home-page">
      <section className="container-fluid home-page-container">
        {loading ? (
          <Loader />
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="row">
            <div className="col-12 col-md-4 col-xl-3">
              <div className="filters-sorting-wrapper">
                <FilterList
                  categories={categories}
                  authors={authors}
                  onCategoryFilterChange={handleCategoryFilterChange}
                  onAuthorFilterChange={handleAuthorFilterChange}
                />
                <SortingOption
                  onSortingOptionChange={handleSortingOptionChange}
                />
              </div>
            </div>
            <div className="col-12 col-md-8 col-xl-9">
              <div className="articles-pagination-wrapper">
                {filteredArticles.length === 0 ? (
                  <p>{appConstants.NO_RESULTS_FOUND_MESSAGE}</p>
                ) : (
                  <>
                    <ArticleList articles={filteredArticles} />
                    <Pagination
                      articles={filteredArticles}
                      onPageChange={handlePageArticles}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
