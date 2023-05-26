import { Variants, motion } from 'framer-motion';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PizzaContext } from '../context/pizzaProvider';
import { PizzaContextType } from '../@types/state';
import { buttonVariants, containerVariants } from '../animations';

const toppingItemVariants: Variants = {
  hover: {
    scale: 1.3,
    color: '#f8e112',
    originX: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
};

const TOPPINGS = [
  'mushrooms',
  'peppers',
  'onions',
  'olives',
  'extra cheese',
  'tomatoes',
];

const Toppings = () => {
  const {
    pizzaState: { pizza },
    handleTopping,
  } = useContext<PizzaContextType>(PizzaContext);

  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {TOPPINGS.map(topping => {
          const spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
              key={topping}
              onClick={() => handleTopping(topping)}
              variants={toppingItemVariants}
              whileHover="hover"
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button variants={buttonVariants} whileHover="hover">
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
