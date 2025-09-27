import React from "react";
import "./Education.css";

const EducationTimeline = () => {
  return (
    <section className="timeline-section">
      <div className="container py-5">
        <h2 className="text-center pb-5">My Education</h2>
        <div className="main-timeline">
          <div className="timeline left timeline-one">
            <div className="card">
              <div className="card-body p-4">
                <div className="timeline-content">
                  <p className="timeline-year">2021 - 2025</p>
                  <h6 className="timeline-title">
                    Bachelor of Engineering in Computer Science
                  </h6>
                  <p className="timeline-institute">
                    Bannari Amman Institute of Technology, Erode
                  </p>
                  <span className="timeline-percentage">
                    Percentage: 80.07%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline right timeline-two">
            <div className="card">
              <div className="card-body p-4">
                <div className="timeline-content">
                  <p className="timeline-year">2020 - 2021</p>
                  <h6 className="timeline-title">
                    Higher Secondary Education (HSC)
                  </h6>
                  <p className="timeline-institute">
                    Government Higher Secondary School
                  </p>
                  <span className="timeline-percentage">
                    Percentage: 88.70%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline left timeline-three">
            <div className="card">
              <div className="card-body p-4">
                <div className="timeline-content">
                  <p className="timeline-year">2018 - 2019</p>
                  <h6 className="timeline-title">
                    Secondary School Leaving Certificate (SSLC)
                  </h6>
                  <p className="timeline-institute">
                    Government Higher Secondary School
                  </p>
                  <span className="timeline-percentage">
                    Percentage: 80.00%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
