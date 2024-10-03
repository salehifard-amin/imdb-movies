import { Fragment } from "react";
import Header from "../../Header";
import Footer from "../../Footer"

export default function MainLayout( { children } ) {

  return (
    <Fragment>
      <Header />
      { children }
      <Footer />
    </Fragment>
  );
}
