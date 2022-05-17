import style from './style.module.scss';
const Card = ({ name, image, description, id, key }) => {
    return (
        <div className={style.cardContainer} key={key}>
            <img src={image} className={style.image}></img>
            <div className={style.name}>{name}</div>
            <div className={style.description}>{description}</div>
        </div>
    )
}
export default Card;