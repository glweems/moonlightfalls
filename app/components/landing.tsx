import { useAnimation, motion } from "framer-motion";
import { props } from "lodash/fp";
import React, { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";
export const CleaningSection: FC = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.75 }, x: 0 },
    hidden: { opacity: 0, scale: 0.75, x: 300 },
  };
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.div className="grid items-center justify-center w-full h-[60vh] grid-cols-3">
      <motion.h3
        ref={ref}
        variants={{
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.75 },
            x: 0,
          },
          hidden: { opacity: 0.25, scale: 0.75, x: -300 },
        }}
        initial="hidden"
        animate={control}
        className="container col-span-2 py-5 text-3xl font-bold"
      >
        In House Cleaning Service Prepares Property for The Next Guest
      </motion.h3>
      <motion.img
        src="/img/cleanup.svg"
        className="col-span-1"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      />
      <motion.div></motion.div>
    </motion.div>
  );
};
