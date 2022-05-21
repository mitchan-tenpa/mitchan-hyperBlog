import React from "react";
import usePosts from "src/hooks/usePosts";

const Training = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <div className="my-5 mx-auto w-max border border-blue-700 bg-blue-200 p-4">
      {/* 3 */}
      <ol>
        {data.map((post: any) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ol>
    </div>
  );
};

export default Training;
