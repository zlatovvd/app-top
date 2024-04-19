"use client";

import styles from "./page.module.css";
import { Button, Htag, P, Raiting, Tag } from "./components";
import { useState } from "react";

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      <Htag tag={"h3"}>{counter}</Htag>
      <Button
        appearance="primary"
        arrow="right"
        onClick={() => setCounter((x) => x + 1)}
      >
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <P size="l">Text p</P>
      <Tag color="primary">primary</Tag>
      <Tag color="green">green</Tag>
      <Tag color="red">red</Tag>
      <Tag color="gray">gray</Tag>
      <Tag color="ghost">ghost</Tag>
      <Raiting raiting={4}/>
    </div>
  );
}
