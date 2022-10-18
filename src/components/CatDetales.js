const CatDetales = (props) => {
    const {catDetales} = props;
    const{name, shortInfo} = catDetales
    return(
        <div>
            <h1>Поздравляем!</h1>
            <h2>Вы преобрели:</h2>
            <br />
            <h2>{name}</h2>
            <p>{shortInfo}</p>
        </div>
    )
}
export default CatDetales;