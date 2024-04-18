import styles from "./page.module.css";
import { Button, Htag, P, Tag } from "./components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag={"h3"}>Text1</Htag>
      <Button appearance="primary" arrow="right">
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
    </div>
  );
}
