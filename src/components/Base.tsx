import { Variants, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PizzaContext } from '../context/pizzaProvider';
import { useContext } from 'react';
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

const nextVariants: Variants = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 120 },
  },
};

const BASES = ['Classic', 'Thin & Crispy', 'Thick Crust'];

const Base = () => {
  const {
    pizzaState: { pizza },
    addBase,
  } = useContext<PizzaContextType>(PizzaContext);

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {BASES.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              variants={toppingItemVariants}
              whileHover="hover"
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next" variants={nextVariants}>
          <Link to="/toppings">
            <motion.button variants={buttonVariants} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
