import { useEffect, useState } from "react";
import axios from "axios";
import ArticleList from "../../components/ArticleList";
import FilterList from "../../components/FilterList";
import { ArticleProps } from "../../models/types";

const fetchApiUrl = "https://dev-storm-rest-api.pantheonsite.io/api/v1/news"; // Fetch API URL
const errorMessage = "Error loading the articles, please try again later"; // Static Error Message

const Home = () => {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch articles from the API URL
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(fetchApiUrl);
        setArticles(response.data);
        setLoading(false);
      } catch (error) {
        setError(errorMessage);
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className="home-page m-5">
      <section className="container-fluid home-page-container">
        <div className="row">
          <div className="col-12 col-md-4 col-xl-3 filters-wrapper">
            <FilterList />
          </div>
          <div className="col-12 col-md-8 col-xl-9 articles-wrapper">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <ArticleList articles={articles} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
