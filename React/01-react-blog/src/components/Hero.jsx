import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const fetchedNewsData = await fetch(
        "https://newsapi.org/v2/everything?q=apple&from=2024-01-29&to=2024-01-29&sortBy=popularity&apiKey=680c5e00ffdd4eaa83c54a07b11ee134"
      );
      const newsJSON = await fetchedNewsData.json();
      setNews(newsJSON.articles);
    };
    fetchNews();
  }, []);

  const blogPostByTemplate = news.map((data, index) => {
    const {
      source: { name },
      author,
      title,
      description,
      url,
      urlToImage,
      publishedAt,
    } = data;
    return (
      <div key={index + 1}>
        <div className="bg-[#817263d2] m-10 p-3 sm:flex items-center shadow-xl z-10 shadow-black rounded-md hover:bg-cardHover">
          <img
            src={urlToImage}
            alt="newsImage"
            className="w- 60 h-40 rounded sm:mx-0 mx-auto sm:my-auto"
          />

          <div className="px-5">
            <span className="float-right text-xs font-bold">{publishedAt}</span>
            <div className="mt-2 sm:flex space-x-5 items-center">
              <h3>
                Name: <span className="font-semibold ">{name}</span>
              </h3>
              <span>Author -{author}</span>
            </div>
            <div>
              <h1 className="font-bold space-x-1">
                <span className="Underline text-xl text-slate-900  capitalize">
                  Title:
                </span>
                {title}
              </h1>
              <p className="mt-1">{description}</p>
            </div>

            <div className=" p-2 float-right flex items-center space-x-1 text-center shadow-md invisible sm:visible bg-blue-500 rounded text-white  font-bold">
              <Link to={url} target="_blank">
                To Know More
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div>{blogPostByTemplate}</div>;
};

export default Hero;
