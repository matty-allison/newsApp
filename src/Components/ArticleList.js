const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.articles.map((article) => (
        <div className="article-container" key={article.url}>
          <img src={article.urlToImage} alt="article image" />
          <h2>{article.title}</h2>
          <p>Author: {article.author}</p>
          <p align="justify">{article.description}</p>
          <br />
          <p align="justify">
            {article.content}
            <a href={article.url} target="_blank">
              <b>Click to see me...</b>
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
