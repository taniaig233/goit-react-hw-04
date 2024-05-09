import css from "./ErrorMessage.module.css";

export default function ErrorMessage () {
  return (
    <>
      <p className={css.errorMessage}>
        Whoops, something went wrong! Try reloading this page.       
      </p>
    </>
  );
}