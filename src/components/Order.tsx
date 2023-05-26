import { Variants, motion } from 'framer-motion';
import { useContext } from 'react';
import { PizzaContext } from '../context/pizzaProvider';
import { PizzaContextType } from '../@types/state';
import { useNavigate } from 'react-router-dom';
import { buttonVariants, containerVariants } from '../animations';

const childVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = () => {
  const {
    pizzaState: { pizza },
    clearPizza,
  } = useContext<PizzaContextType>(PizzaContext);
  const navigate = useNavigate();

  const handleRestartPizza = () => {
    clearPizza();
    navigate('/');
  };

  return (
    <>
      <motion.div
        className="container order"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2>Thank you for your order :)</h2>
        <motion.p>
          You ordered a&nbsp;
          <strong>
            <span style={{ color: '#f8e112' }}>{pizza.base}</span>
          </strong>
          &nbsp; pizza with:
        </motion.p>
        <motion.div variants={childVariants}>
          {pizza.toppings.map((topping: string) => (
            <div key={topping} style={{ color: '#f8e112', marginTop: '2%' }}>
              <strong>{topping}</strong>
            </div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div>
        <motion.button
          className="restart-button"
          variants={buttonVariants}
          whileHover="hover"
          onClick={handleRestartPizza}
        >
          Start Again
        </motion.button>
      </motion.div>
    </>
  );
};

export default Order;
