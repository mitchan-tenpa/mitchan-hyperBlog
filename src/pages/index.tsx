import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { ComponentProps, FormEventHandler, useState } from "react";
import TodoCounter from "src/components/TodoCounter";
import { client } from "src/libs/client";
import avatar from "public/avatar.jpg";
import Image from "next/image";

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
    <div className="flex w-full justify-between">
      <div className="flex w-3/4 flex-col p-3">
        <form className="my-5 mx-auto flex gap-x-2 " onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            className="border border-black px-2"
          />
          <button className="rounded-xl border border-black px-2">検索</button>
          <button
            type="reset"
            onClick={handleClick}
            className="rounded-xl border border-black px-2"
          >
            リセット
          </button>
        </form>

        <p className="text-center text-gray-400">{`${
          search ? "検索結果" : "記事の総数"
        }: ${totalCount}件`}</p>

        <div className="mx-auto w-4/5">
          <ul className="mt-4 grid grid-cols-2 gap-7 space-y-4">
            {contents.map((content) => {
              return (
                <li
                  key={content.id}
                  className="rounded-xl p-4 text-center shadow-2xl"
                >
                  <Link href={`/blog/${content.id}`}>
                    <a className=" text-blue-800 underline hover:text-blue-400">
                      {content.title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="mt-4 w-1/4">
        <div className=" m-4 h-96 w-80 rounded-xl shadow-2xl">
          <div className="flex flex-col items-center">
            <Image src={avatar} alt="profile" width={100} height={100} />
            <p>MTZ</p>
          </div>
          <p className=" p-3">
            経歴をここに書く経歴をここに書く経歴をここに書く経歴をここに書く経歴をここに書く経歴をここに書く経歴をここに書く経歴をここに書く経歴をここに書く経歴をここに書く経歴をここに書く経歴をここに書く経歴をここに書く経歴をここに書く経歴をここに書く
          </p>
        </div>
        <TodoCounter />
        <div className="flex flex-col">
          <Link href="/Todo">
            <a>TODO一覧</a>
          </Link>
          <Link href="/add">
            <a>TODO追加</a>
          </Link>
        </div>
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
