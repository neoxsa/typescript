import type { ProductTypes } from "../types";
import { Card } from "./Card";

// creating new interface with existing types
interface ListProps {
  items: ProductTypes[];
}

function List({ items }: ListProps) {
  return (
    <div>
      {items.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          available={item.id % 2 === 0 ? true : false}
        />
      ))}
    </div>
  );
}

export default List;
