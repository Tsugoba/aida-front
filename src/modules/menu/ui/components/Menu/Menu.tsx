import style from './Menu.module.scss';

export function Menu() {
  const itemsMenu = [
    { icon: 'bag', description: 'Cliente omnicanal' },
    { icon: 'process', description: 'Procesos' },
    { icon: 'process', description: 'Producto' },
    // 'AIDA',
    // 'Ajustes y ayuda',
  ];
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
              <li key='item'>
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
