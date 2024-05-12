import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery ({ imageList, openModal}) {
  
  return (
    <section className={css.containerGallery}>
      
        <ul className={css.gallery} >
          {imageList.map(img => (
            <li className={css.galleryItem} key={img.id} >
              <ImageCard imageItem={img} openImage={openModal} />
            </li>
          ))}
        </ul>
    </section>
  );
}