'use client';

import { ReactNode, useEffect } from 'react';

import { useToast } from '../ToastProvider/ToastProvider';

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const { addToast } = useToast();
  useEffect(() => {
    const ws = new WebSocket(
      'wss://81svrpf4a7.execute-api.us-east-1.amazonaws.com/prod'
    );

    ws.onopen = () => {
      console.log('Connected');
    };

    ws.onmessage = (event) => {
      console.log(
        'descripcion',
        JSON.parse(event.data).Records[0].dynamodb.NewImage.descripcion.S
      );
      addToast({
        description: JSON.parse(event.data).Records[0].dynamodb.NewImage
          .descripcion.S,
      });
    };

    return () => {
      ws.close();
    };
  }, []);

  return <>{children}</>;
};
