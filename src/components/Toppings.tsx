import { Variants, motion } from 'framer-motion';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PizzaContext } from '../context/pizzaProvider';
import { PizzaContextType } from '../@types/state';

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', delay: 0.5 },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

const buttonVariants: Variants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      duration: 0.4,
      repeat: Infinity,
      repeatType: 'reverse',
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
      className="toppings container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {TOPPINGS.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
              key={topping}
              onClick={() => handleTopping(topping)}
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
        <motion.button variants={buttonVariants} whileHover="hover">
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
