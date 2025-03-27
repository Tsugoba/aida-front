'use client';

import { useRouter } from 'next/navigation';

import style from './Menu.module.scss';

export function Menu() {
  const router = useRouter();
  const itemsMenu = [
    { icon: 'bag', description: 'Cliente omnicanal' },
    { icon: 'process', description: 'Procesos' },
    { icon: 'product', description: 'Producto' },
    { icon: 'lisa', description: 'AIDA' },
    { icon: 'help', description: 'Ajustes y ayuda' },
  ];

  const navigate = (destination: string) => {
    if (destination === 'AIDA') {
      router.push('/aida');
    }
  };

  return (
    <div className={style.container}>
      <section className={style.header}>
        <div className={style.storeId}>Tienda 11244</div>
        <div className={style.storeDescription}>
          BARCELONA Pso. de Gracia 36 SC WN
        </div>
      </section>
      <section className={style.body}>
        <div className={style.information}>
          <span className={style.titleInformation}>Consulta de stock</span>
          <span className={style.subtitleInformation}>
            Accede a la ficha de producto que buscas
          </span>
        </div>
        <div className={style.searchContent}>
          <input
            type='text'
            placeholder='Busca por EAN o referencia'
            className={style.search}
          />
        </div>
        <div>
          <ul className={style.menu}>
            {itemsMenu.map((item) => (
              <li key='item' onClick={() => navigate(item.description)}>
                <img
                  src={`/icons/${item.icon}.svg`}
                  alt='Descripción del icono'
                  width='24'
                  height='24'
                />
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
