import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style/News.scss';
import axios from 'axios';

const News = () => {
  const [arrayOfNews, setArrayOfNews] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const url = `https://gnews.io/api/v4/search?q=covid&country=fr&max=7&token=6856e388a6280dcc28421facd91f5e5a`;
    axios
      .get(url, { cancelToken: source.token })
      .then((response) => response.data)
      .then((data) => setArrayOfNews(data.articles))
      .catch((err) => console.log(err.message));
    return () => {
      source.cancel('API News request canceled by user');
    };
  }, []);

  return (
    <div className="carousel-container" id="news">
      <h1 className="title">Dernières actualités</h1>
      <Carousel
        className="carousel"
        autoPlay
        showThumbs={false}
        showStatus={false}
        infiniteLoop
      >
        {arrayOfNews
          .filter((article) => article.image !== null)
          .map((article) => (
            <a
              href={article.url}
              key={article.title}
              target="_blank"
              rel="noreferrer noopener "
            >
              <div className="container">
                <img className="picture" alt="" src={article.image} />
                <p className="legend">{article.title}</p>
              </div>
            </a>
          ))}
      </Carousel>
    </div>
  );
};

export default News;
