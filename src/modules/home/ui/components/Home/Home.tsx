'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import style from './Home.module.scss';

export function Home() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => {
      router.push('/menu');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className={style.container}>
      <div
        className={`${style.image} ${style.fadeIn} ${isLoaded ? style.fadeInLoaded : ''}`}
      >
        <Image
          alt='by mango'
          src='/by_mango.png'
          fill
          sizes='33vw'
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}
