import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// TODO: fix this any type
const Toppings = ({ addTopping, pizza }: any) => {
  let toppings = [
    'mushrooms',
    'peppers',
    'onions',
    'olives',
    'extra cheese',
    'tomatoes',
  ];

  return (
    <div className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{
                scale: 1.3,
                originX: 0,
                color: '#f8e112',
              }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 8px rgb(255,255,255)',
            boxShadow: '0px 0px 8px rgb(255,255,255)',
          }}
        >
          Order
        </motion.button>
      </Link>
    </div>
  );
};

export default Toppings;
