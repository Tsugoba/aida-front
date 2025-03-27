'use client';

import { useRouter } from 'next/navigation';

import { LineBreak } from '../FamilyBreak/FamilyBreak';

import style from './Aida.module.scss';

export function Aida() {
  const router = useRouter();
  const lines = [
    {
      line: 'Woman',
      breakLine: 0.6,
      types: [
        { type: 'Prendas', breakCoefficient: 0.8 },
        { type: 'Accesorios', breakCoefficient: 0.6 },
      ],
    },
    {
      line: 'Man',
      breakLine: 0.2,
      types: [
        { type: 'Prendas', breakCoefficient: 0.7 },
        { type: 'Accesorios', breakCoefficient: 0.5 },
      ],
    },
    {
      line: 'Kids',
      breakLine: 0.1,
      types: [
        { type: 'Prendas', breakCoefficient: 0.9 },
        { type: 'Accesorios', breakCoefficient: 0.4 },
      ],
    },
    {
      line: 'Home',
      breakLine: 0.4,
      types: [
        { type: 'Prendas', breakCoefficient: 0.3 },
        { type: 'Accesorios', breakCoefficient: 0.5 },
      ],
    },
  ];

  const navigate = (line: string) => {
    if (line === 'Woman') {
      router.push('/list/woman');
    }
  };

  const back = () => {
    router.push('/analysis');
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
        <span>AIDA</span>
      </section>
      <section className={style.headerState}>
        <div className={style.state}>
          <span className={style.stateIndicator}>0.9%</span>
          <div className={style.stateInfo}>
            <span className={style.titleInfo}>Rotura moderada</span>
            <span className={style.subtitleInfo}>
              Te recomiendo que repongas estas prendas.
            </span>
          </div>
        </div>
        <div className={style.stateAction}>
          <button>Acceder al listado general</button>
        </div>
      </section>
      <section className={style.families}>
        <div className={style.family}>
          {lines.map((line) => (
            <LineBreak
              line={line.line}
              breakLine={line.breakLine}
              types={line.types}
              clickLine={(line) => navigate(line)}
            />
          ))}
        </div>
      </section>
      <section></section>
    </div>
  );
}
