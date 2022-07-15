import { motion, MotionProps, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FC, HTMLAttributes, PropsWithChildren, useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

interface AnimatedProps
  extends PropsWithChildren<MotionProps & HTMLAttributes<HTMLDivElement>> {}

const Animated: FC<AnimatedProps> = ({ children, ...props }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      {...props}
    >
      {children}
    </motion.div>
  );
};
export default Animated;
