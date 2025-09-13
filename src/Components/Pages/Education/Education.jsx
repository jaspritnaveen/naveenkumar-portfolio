import React from "react";
import "./Education.css";

const EducationTimeline = () => {
  return (
    <>
      <section style={{ backgroundColor: "#f0f2f5" }} class="timeline-section">
        <div class="container py-5">
          <h4 className="text-center pb-5">My Education</h4>
          <div class="main-timeline">
            <div class="timeline left timeline-one ">
              <div class="card">
                <div class="card-body p-4">
                  <div class="timeline-content">
                    <p>2021 - 2025</p>
                    <h6>Bachelor of Engineering in Computer Science</h6>
                    <p>Bannari Amman Institute of Technology, Erode</p>
                    <p>CGPA: 8.07</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="timeline right timeline-two">
              <div class="card">
                <div class="card-body p-4">
                  <div class="timeline-content">
                    <p>2020 - 2021</p>
                    <h6>Higher Secondary Education (HSC)</h6>
                    <p>Government Higher Secondary School</p>
                    <p>Percentage: 88.70%</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="timeline left timeline-three ">
              <div class="card">
                <div class="card-body p-4">
                  <div class="timeline-content">
                    <p>2018 - 2019</p>
                    <h6>Secondary School Leaving Certificate (SSLC)</h6>
                    <p>Government Higher Secondary School</p>
                    <p>Percentage: 80.00%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationTimeline;
