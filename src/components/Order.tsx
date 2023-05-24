// TODO: fix this any type
const Order = ({ pizza }: any) => {
  return (
    <div className="container order">
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping: string) => (
        <div key={topping}>{topping}</div>
      ))}
    </div>
  );
};

export default Order;
