import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch();
  `https://jsonplaceholder.typicode.com/posts/${router.query.id}`;
  // ("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error(`フェッチ失敗`);
  }

  const json = await response.json();
  return json;
};

const PostId = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${router.query.id}`,
    // "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  // console.log({ data, error });
  // console.log(router);
  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <div className="my-5 mx-auto">
        <h1 className="m-4 text-4xl">{data?.title}</h1>
        <p>{data?.body}</p>
      </div>
    </div>
  );
};

export default PostId;
