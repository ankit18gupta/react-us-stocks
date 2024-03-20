import { appConstants } from "../../utils/constants";

const Loader = () => (
  <div className="loader-wrapper" data-testid="loader-wrapper">
    <div className="spinner-border text-success loader" role="status">
      <span className="visually-hidden">{appConstants.LOADING_MESSAGE}</span>
    </div>
  </div>
);

export default Loader;
