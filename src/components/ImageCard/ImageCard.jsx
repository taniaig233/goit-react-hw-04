import css from "./ImageCard.module.css";


export default function ImageCard({
    imageItem: {
     alt_description,
     likes,
    urls: { small },
        user: {
            name,
            social: { portfolio_url },
    },
  },
}) {
    return (
    <div className={css.galleryThumb}>
      <img
        className={css.galleryImage}
        src={small}
        alt={alt_description}
        width="360"
      />
      <div className={css.thumbBlock}>
        <p className={css.textPhoto}>
        Author      
          <a href={portfolio_url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </p>
        <p className={css.textPhoto}>
         Likes {likes}
        </p>
      </div>
    </div>

    );   
}
