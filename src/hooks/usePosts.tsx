import useSWR from "swr";

const fetcher = async () => {
  // fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error(`フェッチ失敗〜`);
  }

  const json = await response.json();
  return json;
};

const usePosts = () => {
  //3
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  return {
    data,
    error,
    isLoading: !error && !data, //エラーもデータもない状態のローディング
    isEmpty: data && data.length === 0, //データがない場合
  };
};

export default usePosts;
