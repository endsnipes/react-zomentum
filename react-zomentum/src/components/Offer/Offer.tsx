import React from "react";
import "./styles.scss";
import airpods from "../../assets/airpods.png";
export const Offer = () => {
  return (
    <div className="offer">
      <div className="offer__container container">
        <h2 className="offer__title">List. Sell. Grow</h2>
        <div className="offer__container-inner">
          <div className="offer__card offer__card--img1">
            <h5 className="offer__card-text">
              Be a part of the only All-In-One platform for IT services{" "}
            </h5>
          </div>
          <div className="offer__card offer__card--search">
            <h5 className="offer__card-text">
              Come closer to finding your next customer
            </h5>
          </div>
          <div className="offer__card offer__card--histogram">
            <h5 className="offer__card-text">
              Grow your business with a single click
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
