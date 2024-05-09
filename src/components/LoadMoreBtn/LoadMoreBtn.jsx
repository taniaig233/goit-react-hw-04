import css from "./LoadMoreBtn.module.css";


export default function LoadMoreBtn ({ onClick, isVisible }) {
  return (
    <div className={css.btnThumb}>
      {isVisible() && (
        <button className={css.btnLoad} onClick={onClick}>
          Load More
        </button>
      )}
    </div>
  );
}
