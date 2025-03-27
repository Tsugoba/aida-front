'use client';

import { ReactNode, useEffect } from 'react';

import { useNotificationStore } from '../../core/useNotificationStore/useNotificationStore';

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const { addNotification } = useNotificationStore((state) => ({
    addNotification: state.addNotification,
  }));
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3000/api/socket');
    ws.onopen = () => {
      console.log('Connected to WebSocket');
      ws.send('Hello, WebSocket!');
    };
    ws.onmessage = (event) => {
      console.log('Message received:', event.data);
      addNotification({ message: 'test' });
    };
    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };
    return () => {
      ws.close();
    };
  }, []);

  return <>{children}</>;
};
