'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import style from './Analysis.module.scss';

export function Analysis() {
  const router = useRouter();
  const itemsMenu = ['AIDA', 'Rotura', 'Último cambio de exposición'];

  const navigate = (destination: string) => {
    if (destination === 'AIDA') {
      router.push('/aida');
    }
  };

  const back = () => {
    router.push('/menu');
  };

  return (
    <div className={style.container}>
      <section className={style.header}>
        <img
          src={'/icons/back.svg'}
          alt='back'
          width='24'
          height='24'
          onClick={() => back()}
        />
        <span>Análisis operativo</span>
      </section>
      <section className={style.image}>
        <Image
          alt='by store'
          src='/store.png'
          fill
          sizes='33vw'
          style={{ objectFit: 'contain' }}
        />
      </section>
      <section>
        <ul className={style.menu}>
          {itemsMenu.map((item) => (
            <li key='item' onClick={() => navigate(item)}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
