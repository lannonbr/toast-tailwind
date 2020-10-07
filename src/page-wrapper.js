/** @jsx h */
import { Fragment, h } from "preact";
import { Helmet } from "react-helmet";

const PageWrapper = (props) => {
  return (
    <Fragment>
      <Helmet>
        <link rel="stylesheet" href="/style.css" />
      </Helmet>
      {props.children}
    </Fragment>
  );
};

export default PageWrapper;
