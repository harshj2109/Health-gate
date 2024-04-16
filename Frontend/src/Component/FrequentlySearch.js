import React from "react";

const FrequentlySearch = () => {
  return (
    <div className="frequently-search-container">
      <div className="frequently-search-title">Frequently Searched</div>

      <div className="freq-img-box">
        <div className="freq-img-box-title" data-aos="flip-right">
          <img src="./Images/DERMAT.jpeg" alt="" className="freq-img" />

          <p>Dermatology</p>
          <div className="about-freq-search">
            Dermatology is the branch of medicine dealing with the skin. It is a
            speciality with both medical and surgical aspects.
          </div>
        </div>

        <div className="freq-img-box-title" data-aos="flip-right">
          <img src="./Images/GYNAEC.jpeg" alt="" className="freq-img" />

          <p>Gynaecology</p>
          <div className="about-freq-search">
            Gynaecology or gynecology is the area of medicine that involves the
            treatment of women's diseases, especially those of the reproductive
            organs.
          </div>
        </div>

        <div className="freq-img-box-title" data-aos="flip-right">
          <img src="./Images/ONCOLOGIST.jpeg" alt="" className="freq-img" />
          <p>Oncology</p>
          <div className="about-freq-search">
            Oncology is a branch of medicine that deals with the study,
            treatment, diagnosis, and prevention of cancer.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlySearch;
