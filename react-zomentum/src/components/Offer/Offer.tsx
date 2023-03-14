import { ReactComponent as AirpodsIcon } from "../../assets/icons/airpods.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as HistogramIcon } from "../../assets/icons/histogram.svg";

import "./styles.scss";

export const Offer = () => {
  return (
    <div className="offer">
      <div className="offer__container container">
        <h2 className="offer__title">List. Sell. Grow</h2>
        <div className="offer__container-inner">
          <div className="offer__card">
            <AirpodsIcon />
            <h5 className="offer__card-text">
              Be a part of the only All-In-One platform for IT services
            </h5>
          </div>
          <div className="offer__card">
            <SearchIcon />
            <h5 className="offer__card-text">
              Come closer to finding your next customer
            </h5>
          </div>
          <div className="offer__card">
            <HistogramIcon />
            <h5 className="offer__card-text">
              Grow your business with a single click
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
