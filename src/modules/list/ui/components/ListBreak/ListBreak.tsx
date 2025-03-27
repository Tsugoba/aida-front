'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { listProducts } from './listProducts.mock';

import style from './ListBreak.module.scss';

type ListBreakProps = {
  line: string;
};

export function ListBreak({ line }: ListBreakProps) {
  const router = useRouter();
  const products = listProducts;
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
      <section>
        {products.map((product) => (
          <div key={product.product} className={style.product}>
            <div className={style.detailProduct}>
              <div className={style.image}>
                <Image
                  alt={product.product}
                  src={product.image}
                  fill
                  sizes='33vw'
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className={style.informationGeneral}>
                <div className={style.information}>
                  <span className={style.infoTitle}>{product.product}</span>
                  <span className={style.infoSubtitle}>
                    {product.line} {product.ref}
                  </span>
                </div>
                <div>{product.color}</div>
              </div>
            </div>
            <div className={style.table}>
              <table cellPadding='0' cellSpacing='0'>
                <tr>
                  {product.sizes.map((size) => (
                    <th key={size.size} className={style.th}>
                      {size.size}
                    </th>
                  ))}
                </tr>
                <tr>
                  {product.sizes.map((size) => (
                    <td
                      key={size.size}
                      className={`${size.disabled ? style.tdDisabled : style.td}`}
                    >
                      {size.stock}
                    </td>
                  ))}
                </tr>
              </table>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
