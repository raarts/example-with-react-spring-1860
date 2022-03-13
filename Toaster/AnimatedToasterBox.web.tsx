import { animated, useSpring } from '@react-spring/web';
import { ReactElement, useEffect, useRef, useState } from 'react';

export const AnimatedView = animated.div;

export interface AnimatedToasterBoxProps {
  children: ReactElement;
}

const AnimatedToasterBox = ({ children }: AnimatedToasterBoxProps) => {
  const [flip, set] = useState(false);
  const [timeOutHandle, setTimoutHandle] = useState<NodeJS.Timeout | null>(null);
  const canceled = useRef(false);

  const props = useSpring({
    cancel: canceled.current,
    from: {
      x: 340,
    },
    to: {
      x: 0,
    },
    config: {
      mass: 2,
      bounce: 1,
    },
    reverse: flip,
    onRest: () => {
      if (!canceled.current) setTimoutHandle(setTimeout(() => set(!flip), 2000));
    },
  });

  useEffect(() => {
    return () => {
      canceled.current = true;
      if (timeOutHandle) clearTimeout(timeOutHandle);
    };
  }, []);

  return <AnimatedView style={props}>{children}</AnimatedView>;
};

export { AnimatedToasterBox };
