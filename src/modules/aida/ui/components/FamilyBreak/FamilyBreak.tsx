import { TypeBreak } from '@/modules/aida/types/TypeBreak';

import style from './FamilyBreak.module.scss';

type FamilyBreakProps = {
  line: string;
  breakLine: number;
  types: TypeBreak[];
  clickLine: (line: string) => void;
};

export function LineBreak({
  line,
  breakLine,
  types,
  clickLine,
}: FamilyBreakProps) {
  return (
    <div className={style.container}>
      <div>
        <img
          src={`/icons/dotGreen.svg`}
          alt='Estado rotura'
          width='12'
          height='12'
        />
      </div>
      <div className={style.information}>
        <div className={style.lineInfo}>{line}</div>
        <div className={style.indicators}>
          <div className={style.totalInfo}>
            <div>Total</div>
            <div>{breakLine} %</div>
          </div>
          {types.map((type) => (
            <div key={type.type} className={style.typeInfo}>
              <div>{type.type}</div>
              <div>{type.breakCoefficient}</div>
            </div>
          ))}
        </div>
        <div className={style.action}>
          <button onClick={() => clickLine(line)}>Acceder al listado</button>
        </div>
      </div>
    </div>
  );
}
