const useNewsAPI = () => {
  const API_KEY = "3996843814f3485aaa029d577bdd47d6";

  const getNews = async (title = "Apple", time = "2022-09-23") => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${title}&from=${time}&sortBy=popularity&apiKey=${API_KEY}`
    )
      .then((data) => data.json())
      .then(({ articles }) => articles)
      .catch((err) => console.log(err));

    return response.map(_transformNews);
  };

  const _transformNews = (news) => {
    return {
      author: news.author,
      published: news.publishedAt,
      title: news.title,
      description: news.description,
      source: {
        ...news.source,
      },
      imageUrl: news.urlToImage,
    };
  };

  return { getNews };
};

export default useNewsAPI;
