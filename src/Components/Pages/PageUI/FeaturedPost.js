
import s from './FeaturedPost.module.css';

const FeaturedPost = (props) => {
    let {name, description, image} = props.post;
    console.log(props,props.post)
    return(
        <div className={s.FeaturedPost_container}>
            <div className={s.FeaturedPost__img}>
                <img src={image} alt={name} />
            </div>
            <div className={s.FeaturedPost__content}>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className={s.FeaturedPost__overlay}></div>
        </div>
    )
}

export default FeaturedPost;