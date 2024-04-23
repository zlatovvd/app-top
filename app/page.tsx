"use client";

import styles from "./page.module.css";
import { Button, Htag, P, Raiting, Tag } from "./components";
import { useState } from "react";
import { withLayout } from "./Layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "./interfaces/menu.interface";

export function Home({menu}:HomeProps): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [raiting, setRaiting] = useState<number>(3);

  console.log(menu);

  return (
    <>
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
      <Raiting raiting={raiting} isEditable={true} setRaiting={setRaiting} />


    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const {data:menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/menu', {firstCategory});
  return {
    props: {
      menu,
      firstCategory
    }
  }
}


interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
