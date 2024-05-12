import css from "./ImageCard.module.css";


export default function ImageCard({openImage, imageItem }){ 

    return (
      <div className={css.galleryThumb}>
        <img
          className={css.galleryImage}
          src={imageItem.urls.small}
          alt={imageItem.alt_description}
          width="360"
          onClick={() => openImage(imageItem)}
        />
        <div className={css.thumbBlock}>
          <p className={css.textPhoto}>
            Author
            <a href={imageItem.user.portfolio_url} target="_blank" rel="noopener noreferrer">
              {imageItem.name}
            </a>
          </p>
          <p className={css.textPhoto}>
            Likes {imageItem.likes}
          </p>
        </div>
      </div>
    );
  }

