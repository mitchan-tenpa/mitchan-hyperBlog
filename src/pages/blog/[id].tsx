import dayjs from "dayjs";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { client } from "src/libs/client";
import { Blog } from "src/pages";

type Props = Blog & MicroCMSContentId & MicroCMSDate;

const BlogId: NextPage<Props> = (props) => {
  return (
    <div className="p-7">
      <h1 className="text-center text-3xl font-bold">{props.title}</h1>
      <time dateTime={props.publishedAt} className="mt-2 block text-center">
        {dayjs(props.publishedAt).format("YYYY年MM月DD日")}
      </time>
      <div
        className="prose prose-sm mx-auto mt-5"
        dangerouslySetInnerHTML={{ __html: props.body }}
      />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "blog" });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{}, { id: string }> = async (
  ctx
) => {
  if (!ctx.params) {
    return { notFound: true };
  }

  const data = await client.getListDetail<Blog>({
    endpoint: "blog",
    contentId: ctx.params.id,
  });
  return {
    props: data,
  };
};

export default BlogId;
