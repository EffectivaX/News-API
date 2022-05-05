import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "./Article";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const API_KEY = "fa7ca47203f2488fb23633eb09fc5288";
  //   const API_URL = `https://newsapi.org/v2/everything?q=tesla&from=2022-04-05&sortBy=publishedAt&apiKey=${API_KEY}`;

  useEffect(() => {
    const getArticles = async () => {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=tesla&from=2022-04-05&sortBy=publishedAt&apiKey=${API_KEY}`
      );
      console.log(res);
      setArticles(res.data.articles);
    };
    getArticles();
  }, []);

  return (
    <div>
      {articles && articles.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          description={article.description}
          author={article.author}
          url={article.url}
          urlToImage={article.urlToImage}
          publishedAt={article.publishedAt}
        />
      ))}
    </div>
  )
};

export default Articles;
