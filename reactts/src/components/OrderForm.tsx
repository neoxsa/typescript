import React, { useState } from "react";

interface OrderFormProps {
  onSubmit(order: { name: string; cups: number }): void;
}

function OrderForm({ onSubmit }: OrderFormProps) {
  const [name, setName] = useState<string>("Mocha");
  const [cups, setCups] = useState<number>(1);

  // Form handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({ name, cups });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Coffee Name</label>
        <input
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          placeholder="Your Coffee Name"
        />
        <label>Cups</label>
        <input
          type="number"
          value={cups}
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) =>
              setCups(Number(e.target.value) || 0) // using zero for extra safety
          }
        />

        <button 
        type="submit">
            Submit
        </button>
      </form>
    </>
  );
}

export default OrderForm;
