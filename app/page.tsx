import Image from "next/image";
import styles from "./page.module.css";
import { Button, Htag } from "./components";

export default function Home(): JSX.Element {
  return (
      <div>
               <Htag tag={'h3'}>Text1</Htag> 
               <Button appearance="primary">Кнопка</Button>
               <Button appearance="ghost">Кнопка</Button>
      </div>
  );
}
