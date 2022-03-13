import { animated, useSpring } from '@react-spring/native';
import { useEffect, useRef, useState } from 'react';
import { AnimatedToasterBoxProps } from './AnimatedToasterBox.web';
import { View } from 'react-native';

export const AnimatedView = animated(View);

const AnimatedToasterBox = ({ children }: AnimatedToasterBoxProps) => {
  const [flip, set] = useState(false);
  const [timeOutHandle, setTimoutHandle] = useState<NodeJS.Timeout | null>(null);
  const canceled = useRef(false);

  const props = useSpring({
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
      if (timeOutHandle) clearTimeout(timeOutHandle);
      canceled.current = true;
    };
  }, []);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <AnimatedView style={props}>{children}</AnimatedView>;
};

export { AnimatedToasterBox };
