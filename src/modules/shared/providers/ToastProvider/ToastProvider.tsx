import { FC, createContext, useCallback, useContext, useState } from 'react';
import { createPortal } from 'react-dom';

import { ToastWrapper } from '../../ui/ToastWrapper/ToastWrapper';

type AddToastFunc = (toast: Omit<ToastProps, 'id'>) => string;
export declare type ToastPosition = 'left' | 'center' | 'right';

export type ToastProps = {
  id: string;
  description?: string;
  displayTime?: number;
};

type ToastContextType = {
  toasts: ToastProps[];
  addToast: (toast: Omit<ToastProps, 'id'>) => void;
  removeToast: (id: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);
const DEFAULT_AUTO_CLOSE = 3000;

const defaultToastConfig: Omit<ToastProps, 'id'> = {
  description: '',
  displayTime: 4000,
};

export const ToastProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast: AddToastFunc = useCallback(
    (toast) => {
      const uuid = `toast-${toasts.length}-${new Date().toLocaleTimeString()}`;

      setToasts((prev) => [
        ...prev,
        { ...defaultToastConfig, ...toast, id: uuid },
      ]);

      setTimeout(
        () => removeToast(uuid),
        toast.displayTime ?? DEFAULT_AUTO_CLOSE
      );
      return uuid;
    },
    // eslint-disable-next-line
    [toasts]
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {createPortal(
        <div data-testid='toast-container-component'>
          {toasts?.map((toast) => (
            <ToastWrapper
              key={toast.id}
              displayTime={DEFAULT_AUTO_CLOSE}
              {...toast}
            />
          ))}
        </div>,
        document.body
      )}
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }

  return { addToast: context.addToast };
};
