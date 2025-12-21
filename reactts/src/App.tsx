import { Card } from "./components/Card";
import { Counter } from "./components/Counter";
import List from "./components/List";
import { NewCard } from "./components/NewCard";
import OrderForm from "./components/OrderForm";

import type { ProductTypes } from "./types";

// Menu List Array
const menu: ProductTypes[] = [
  { id: 1, title: "Jeans", description: "Blue Jeans", price: 1000 },
  { id: 2, title: "T-Shirts", description: "Polo and Round Neck", price: 500 },
  { id: 3, title: "Jackets", description: "Blue Jeans", price: 3000 },
  { id: 4, title: "Hoodies", description: "Blue Jeans", price: 1500 },
];

function App() {
  return (
    <>
      <h1>Vite + React ts</h1>

      {/* Cards */}
      <Card title="Shoes" description="New stylish shoes." price={2000} />
      <Card
        title="T-shirt"
        description="Round Neck T-shirts for men"
        price={400}
      />

      {/* Counter Component */}
      <Counter />

      {/* List Component */}
      <List items={menu} />

      {/* Order Form Component */}
      <OrderForm
        onSubmit={(order) => {
          console.log("Placed Order", order.name, order.cups);
          alert("Order Placed");
        }}
      />

      {/* New Card Component */}
        <NewCard
        title="TypeScript"
        footer={<button>Order now</button>}  // Because footer type is ReactNode so we can use any type of element
        />
    </>
  );
}

export default App;
