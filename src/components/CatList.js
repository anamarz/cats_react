import style from './styles/catList.module.css';
import CatItem from './CatItem';

const CatList = (props) => {
    const{cats, toBuy, showCatDescription} = props;

    const allCats = cats.map((cat) => 
        <CatItem key = {cat.id} {...cat} toBuy = {toBuy} showCatDescription = {showCatDescription}/> //формируется массив котов
    )
    return(
        <div className={style.listBlock}>
            <h1>Список кошек</h1>
            <div className={style.allCats}>
                {allCats}
            </div>
        </div>
    )
}
export default CatList;