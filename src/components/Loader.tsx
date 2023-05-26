import { Variants, motion } from 'framer-motion';

const loaderVariants: Variants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 0.5,
      },
      y: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 0.25,
        ease: 'easeOut',
      },
    },
  },
  // animationTwo: {
  //   x: 0,
  //   y: [0, -40],
  //   transition: {
  //     y: {
  //       repeat: Infinity,
  //       repeatType: 'reverse',
  //       duration: 0.25,
  //       ease: 'easeOut',
  //     },
  //   },
  // },
};

const Loader = () => {
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate="animationOne"
      ></motion.div>
    </>
  );
};

export default Loader;
