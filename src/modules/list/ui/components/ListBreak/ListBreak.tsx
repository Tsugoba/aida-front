'use client';

import { useRouter } from 'next/navigation';

import style from './ListBreak.module.scss';

type ListBreakProps = {
  line: string;
};

export function ListBreak({ line }: ListBreakProps) {
  const router = useRouter();
  const back = () => {
    router.push('/aida');
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
        <span>{line}</span>
      </section>
    </div>
  );
}
