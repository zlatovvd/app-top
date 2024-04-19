"use client"

import styles from "./page.module.css";
import { Button, Htag, P } from "./components";
import { useState } from "react";

export default function Home(): JSX.Element {

  const [counter, setCounter] = useState<number>(0)

  return (
      <div>
               <Htag tag={'h3'}>{counter}</Htag> 
               <Button appearance="primary" arrow="right" onClick={()=>setCounter(x => x + 1)}>Кнопка</Button>
               <Button appearance="ghost" arrow="down">Кнопка</Button>
               <P size="l">Text p</P>
      </div>
  );
}
