'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { ToastProps } from '../../providers/ToastProvider/ToastProvider';

import style from './ToastWrapper.module.scss';

export const ToastWrapper = ({ description, displayTime }: ToastProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, displayTime);

    return () => clearTimeout(timer);
  }, [displayTime]);

  if (!visible) return null;

  return (
    <div className={style.container}>
      <div className={style.image}>
        <Image
          alt='Aida'
          src='/aida.png'
          fill
          sizes='33vw'
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className={style.info}>
        <span className={style.title}>AIDA</span>
        <span className={style.message}>{description}</span>
      </div>
    </div>
  );
};
