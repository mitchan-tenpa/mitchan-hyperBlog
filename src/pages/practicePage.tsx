import { NextPage } from "next";
import React, { ComponentProps, useCallback, useState } from "react";
import Training from "src/components/training";

type Texts = {
  id: number;
  text: string;
  isDone: boolean;
};

const TEXTS: Texts[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

const PracticePage: NextPage = () => {
  //1
  const clickButton = () => {
    console.log("hoge");
  };

  //2
  const [texts, setTexts] = useState("");
  const [array, setArray] = useState<string[]>([]);
  const submitText: ComponentProps<"form">["onSubmit"] = (e: any) => {
    e.preventDefault();
    console.log(texts); //このログはformの時に走る
    setTexts("");
  };
  console.log(texts);
  // こっちはinputに入力するたびに走る
  const handleChange: ComponentProps<"input">["onChange"] = useCallback(
    (e: any) => {
      //useCallbackは再レンダリングを避ける
      setTexts(e.target.value);
    },
    []
  );
  //React講座14
  const handleAdd: ComponentProps<"button">["onClick"] = useCallback(() => {
    setArray((prevArray: string[]) => {
      if (prevArray.some((item) => item === texts)) {
        alert("同じ要素が既に存在します。");
        return prevArray;
      }
      const newArray = [...prevArray, texts];
      return newArray;
    });
    // alert("hoge");
  }, [texts]);

  return (
    <div>
      {/* 1 */}
      <div>
        <button onClick={clickButton} className="border">
          ログに表示
        </button>
      </div>
      {/* 2 　inputで入力した文をただ下に表示*/}
      <form onSubmit={submitText}>
        <input
          className="border"
          type="text"
          value={texts}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>ボタン</button>
        {/* onClickにするとボタン押さないと反応しなくなる */}
      </form>
      <ul>
        {array.map((item) => {
          return <div key={item}>{item}</div>;
        })}
      </ul>
      {/* 3 */}
      <Training />
    </div>
  );
};

export default PracticePage;
