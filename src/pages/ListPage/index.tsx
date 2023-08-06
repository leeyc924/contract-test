import { useEffect, useState } from "react";
import { Item } from "types/list";

export interface ListPageProps {}

const ListPage = ({}: ListPageProps) => {
  const [list, setList] = useState<Item[]>([]);
  useEffect(() => {
    (async function () {
      const data = await fetch("/list");
      setList(await data.json());
    })();
  }, []);

  return (
    <div>
      {list.map((data, i) => (
        <div key={i}>{data.title}</div>
      ))}
    </div>
  );
};

export default ListPage;
