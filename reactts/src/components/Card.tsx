interface Cardprops {
  title: string;
  description: string;
  price: number;
  available?: boolean;
}

export function Card({
  title,
  description,
  price,
  available = true,
}: Cardprops) {
  return (
    <>
      <div className="boxCard">
        <h2>{title}</h2>
        <p>{description}</p>

        <p>Rs.{price}/-</p>
        <p>
          {!available ? (
            <span className="stock0">Out of Stock</span>
          ) : (
            <span>Available</span>
          )}
        </p>


      </div>
    </>
  );
}
