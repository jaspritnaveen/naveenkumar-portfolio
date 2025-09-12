import React from "react";
import "./Education.css";

const EducationTimeline = () => {
  return (
    <>
      <div class="container py-5">
        <h2 class="text-center mb-5">Our Journey Timeline</h2>
        <div class="timeline">
          
          <div class="timeline-item right">
            <div class="timeline-content">
              <p>2020 - 2021</p>
              <h6>Higher Secondary Education (HSC)</h6>
              <p> Government Higher Secondary School</p>
              <p>Percentage: 88.70%</p>
            </div>
          </div>
          <div class="timeline-item left">
            <div class="timeline-content">
              <p>2018 - 2019</p>
              <h6>Secondary School Leaving Certificate (SSLC)</h6>
              <p> Government Higher Secondary School</p>
              <p>Percentage: 80.00%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationTimeline;
