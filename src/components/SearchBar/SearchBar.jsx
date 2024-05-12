import { Field, Form, Formik } from "formik";
import { IoIosSearch } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";


export default function SearchBar ({ onSubmit }){
  const handleSubmit = (values, actions) => {
      const lowerCaseSearch = values.search.trim().toLowerCase();
      if (lowerCaseSearch === " ") {
          toast.error("Please enter a serch information");
          return;
      }

    onSubmit(lowerCaseSearch);
    actions.resetForm();
  };

  return (
    <>
      <header className={css.searchHeader}>
        <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
          <Form className={css.form}>
            <Field
              className={css.inputSearch}
              type="text"
              name="search"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button className={css.btnSearch} type="submit">
              <IoIosSearch size="20" />
            </button>
            <Toaster position ="top-right" reverseOrder={false}/>
          </Form>
        </Formik>
      </header>
    </>
  );
}