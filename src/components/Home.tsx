import { Link } from 'react-router-dom';
import { Variants, motion } from 'framer-motion';
import { Loader } from '.';

const homeContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 1.5 },
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

const Home = () => {
  return (
    <motion.div
      variants={homeContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home container"
    >
      <motion.h2 whileHover={{ scale: 1.2, cursor: 'default' }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
