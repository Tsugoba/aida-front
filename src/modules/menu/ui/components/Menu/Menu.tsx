import style from './Menu.module.scss';

export function Menu() {
  const itemsMenu = [
    'Cliente omnicanal',
    'Procesos',
    'Producto',
    'AIDA',
    'Ajustes y ayuda',
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
          {/* {itemsMenu.map((item) => )} */}
        </div>
      </section>
    </div>
  );
}
