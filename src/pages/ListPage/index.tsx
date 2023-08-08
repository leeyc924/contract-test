import { getList } from "api/remote";
import { useEffect, useState } from "react";
import { Item } from "types/list";

export interface ListPageProps {}

const ListPage = ({}: ListPageProps) => {
  const [list, setList] = useState<Item[]>([]);
  useEffect(() => {
    (async function () {
      const data = await getList();
      setList(data);
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
