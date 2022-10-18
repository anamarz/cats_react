import style from './styles/catItem.module.css';

const CatItem = (props) => {
    const{name, shortInfo, id, toBuy, showCatDescription} = props;
    return (
        <div className={style.cat}>
            <div>
                <h4>{name}</h4>
                <p>{shortInfo}</p>
                <button
                className={style.buyCat}
                onClick={() => toBuy(id)}
                >Купить</button>
                <button
                className={style.catDescription}
                onClick={() => showCatDescription(id)}
                >Подробнее</button>
            </div>
        </div>
    )
}

export default CatItem;