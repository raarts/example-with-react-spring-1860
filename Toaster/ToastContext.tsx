import React, { useCallback, useState, createContext, ReactElement } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { ToasterBox } from './ToasterBox';

type ToastType = 'info' | 'warning' | 'error';
type ToastData = {
  key: string;
  type: ToastType;
  text: string;
};
type AddToastType = (type: ToastType, text: string) => void;

const ToastContext = createContext<AddToastType>(() => {
  /* empty */
});

interface Props {
  children: ReactElement | ReactElement[];
}

const ToastContextProvider = ({ children }: Props) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = useCallback(
    function (type, text) {
      setToasts((toasts) => [...toasts, { key: Date.now().toString(), type, text }]);
      setTimeout(() => setToasts((toasts) => toasts.slice(1)), 3300);
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.toasterContainer}>
          {toasts.map((toast) => (
            <ToasterBox key={toast.key} type={toast.type} text={toast.text} />
          ))}
        </View>
      </SafeAreaView>
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastContextProvider };

const styles = StyleSheet.create({
  safeAreaContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 300,
  },
  toasterContainer: {
    width: 300,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});
