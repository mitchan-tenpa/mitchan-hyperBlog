import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { ComponentProps, useState } from "react";
import { client } from "src/libs/client";

export type Blog = {
  title: string;
  body: string;
};

type Props = MicroCMSListResponse<Blog>;

const Home: NextPage<Props> = (props) => {
  const [search, setSearch] = useState<MicroCMSListResponse<Blog>>();

  const handleSubmit: ComponentProps<"form">["onSubmit"] = async (event) => {
    event.preventDefault();
    const q = event.currentTarget.query.value;
    const data = await fetch("/api/search", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ q }),
    });
    const json = await data.json();
    setSearch(json);
  };

  const handleClick: ComponentProps<"button">["onClick"] = () => {
    setSearch(undefined);
  };

  const contents = search ? search.contents : props.contents;
  const totalCount = search ? search.totalCount : props.totalCount;

  return (
    <div>
      <form className="my-5 mx-auto flex w-96 gap-x-2" onSubmit={handleSubmit}>
        <input type="text" name="query" className="border border-black px-2" />
        <button className="rounded-xl border border-slate-500 px-2 text-slate-500 transition duration-500 ease-out hover:bg-slate-500 hover:text-white">
          検索
        </button>
        <button
          type="reset"
          onClick={handleClick}
          className="transform rounded-xl border border-red-400 px-2 text-red-400 transition duration-300 ease-out hover:bg-red-400 hover:bg-opacity-50 hover:text-white"
        >
          リセット
        </button>
      </form>
      <p className="text-center text-gray-400">
        {`${search ? "検索結果" : "記事の総数"}: ${totalCount}件`}
      </p>

      <div className="mx-auto w-4/5">
        {/* グリッドver. <ul className="mt-4 grid grid-cols-2 gap-7"> */}
        <ul className="mt-4 inline list-none">
          {contents.map((content) => {
            return (
              <li
                key={content.id}
                className="rounded-xl p-4 shadow-2xl transition duration-300 ease-out hover:scale-110"
              >
                <Link href={`/blog/${content.id}`}>
                  <a className=" text-blue-800">
                    <div className="mb-5 flex truncate text-sm">
                      <div className="mr-5 h-5 w-5">
                        <p>ロゴ</p>
                      </div>
                      <p>MTZ</p>
                    </div>
                    <h2 className="truncate  text-lg font-bold text-blue-900 hover:underline">
                      {content.title}
                    </h2>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({ endpoint: "blog" });
  return {
    props: data,
  };
};

export default Home;
