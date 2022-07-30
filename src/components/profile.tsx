import React from "react";
import avatar from "public/avatar.jpg";
import Image from "next/image";
import TodoCounter from "src/components/TodoCounter";
import Link from "next/link";

function Profile() {
  return (
    <div className="mt-4 w-1/4">
      <div className=" m-4 h-48 w-80 rounded-xl p-5 shadow-2xl">
        <h1 className="text-3xl">Category</h1>
        <div>健康</div>
        <div>釣り</div>
        <div>英語</div>
      </div>
      <div className=" m-4 h-96 w-80 rounded-xl shadow-2xl">
        <div className="flex flex-col items-center p-4">
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
        <Link href="/practicePage">
          <a>Practice</a>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
