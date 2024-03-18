import { appConstants } from "../../utils/constants";

const NotFound = () => (
  <div className="not-found-page m-5">
    <section className="not-found-page-container container-fluid">
      <p>{appConstants.NOT_FOUND_PAGE_MESSAGE}</p>
    </section>
  </div>
);

export default NotFound;
