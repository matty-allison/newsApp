import useFetch from "../Hooks/useFetch";
import ArticleList from "./ArticleList";
import Search from "./Search";

const Landing = () => {
  const { data, loading, error } = useFetch(
    `https://newsapi.org/v2/everything?q=amazon&apiKey=a5d84e50c1584fb1a888aadd9ea01f6f`
  );
  const articles = data;
  return (
    <div className="landing">
      <>
        <Search />
        {error && <div> {error} </div>}
        {loading && <div className="loader"> loading... </div>}
        {articles && <ArticleList articles={articles} />}
      </>
    </div>
  );
};

export default Landing;
