import style from './styles/catDescription.module.css'

const CatDescription = (props) => {
    const { CatDescription } = props;
    const { name, bio, pic } = CatDescription;

    return(
        <div className={style.cat_description}>
            <div className= {style.cat_description_container}>
                <h2>О породе:</h2>
                <img 
                className={style.cat_description_picture}
                src = {'https://serene-mesa-35124.herokuapp.com/files' + pic}
                alt = 'cat picture'
                />
                <p>{bio}</p>
            </div>
        </div>
    )
}
export default CatDescription;