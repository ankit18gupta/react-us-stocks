import { useAppSelector } from "../../hooks";
import { appConstants } from "../../utils/constants";
import Loader from "../../components/Loader";
import FilterList from "../../components/FilterList";
import SortingOption from "../../components/SortingOption";
import ArticleList from "../../components/ArticleList";
import Pagination from "../../components/Pagination";
import "./Home.scss";

const Home = () => {
  const loading = useAppSelector((state) => state.articlesSlice.loading);
  const error = useAppSelector((state) => state.articlesSlice.error);
  const articles = useAppSelector(
    (state) => state.articlesSlice.filteredArticles
  );

  return (
    <div className="home-page" data-testid="home-page">
      <section className="container-fluid home-page-container">
        {loading ? (
          <Loader />
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="row">
            <div className="col-12 col-md-4 col-xl-3">
              <div className="filters-sorting-wrapper">
                <FilterList />
                <SortingOption />
              </div>
            </div>
            <div className="col-12 col-md-8 col-xl-9">
              <div className="articles-pagination-wrapper">
                {articles.length === 0 ? (
                  <p>{appConstants.NO_RESULTS_FOUND_MESSAGE}</p>
                ) : (
                  <>
                    <ArticleList />
                    <Pagination />
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
