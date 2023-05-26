import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Modal = () => {
  const [showModal, _setShowModal] = useState<boolean>(false);

  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
        >
          Modallll
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
