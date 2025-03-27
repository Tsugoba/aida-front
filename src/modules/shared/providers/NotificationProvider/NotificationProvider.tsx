'use client';

import { ReactNode, useEffect } from 'react';
import { Socket, io } from 'socket.io-client';

import { useNotificationStore } from '../../core/useNotificationStore/useNotificationStore';

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const { addNotification } = useNotificationStore((state) => ({
    addNotification: state.addNotification,
  }));
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const socket: Socket = io(
        'wss://81svrpf4a7.execute-api.us-east-1.amazonaws.com/prod/'
      );

      socket.on('connect', () => {
        console.log('Connected to server');
      });

      socket.on('message', (msg: string) => {
        console.log('Message from server: ', msg);
        addNotification({ message: msg });
      });

      return () => {
        socket.disconnect();
      };
    }
  }, []);

  return <>{children}</>;
};
