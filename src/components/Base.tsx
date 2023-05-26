import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PizzaContext } from '../context/pizzaProvider';
import { useContext } from 'react';

const containerVariants = {
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

const nextVariants = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 120 },
  },
};

const buttonVariants = {
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

const BASES = ['Classic', 'Thin & Crispy', 'Thick Crust'];
const Base = () => {
  const { pizzaState, addBase } = useContext(PizzaContext);

  const handleAddBase = (base: string) => {
    addBase(base);
  };
  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <pre> {JSON.stringify(pizzaState, null, 2)}</pre>
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {BASES.map(base => {
          let spanClass = pizzaState.pizza.base === base ? 'active' : '';
          return (
            <motion.li
              key={base}
              onClick={() => handleAddBase(base)}
              whileHover={{
                scale: 1.3,
                originX: 0,
                color: '#f8e112',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizzaState.pizza.base && (
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
