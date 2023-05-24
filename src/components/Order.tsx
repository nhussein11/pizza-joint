import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

// TODO: fix this any type
const Order = ({ pizza }: any) => {
  const [showTitle, setShowTitle] = useState<boolean>(true);
  setTimeout(() => {
    setShowTitle(false);
  }, 2000);

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {showTitle && (
          <motion.h2 exit={{ y: -1000 }}>Thank you for your order :)</motion.h2>
        )}
      </AnimatePresence>

      <motion.p>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping: string) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
