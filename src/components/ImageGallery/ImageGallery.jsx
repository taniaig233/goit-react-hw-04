import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery ({ imageList, openModal }) {
  const imageClick = (event) => {
    const imgItem = event.target.closest("li");
    if (imgItem) {
      const imgID = imgItem.dataset.id;
      const clickedImageItem = imageList.find((image) => image.id === imgID);
      if (clickedImageItem) {
        openModal(clickedImageItem);
      }
    }
  };
  return (
    <section className={css.containerGallery}>
      {imageList.length > 0 && (
        <ul className={css.gallery} onClick={imageClick}>
          {imageList.map((img) => (
            <li className={css.galleryItem} key={img.id} data-id={img.id}>
              <ImageCard imageItem={img} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}