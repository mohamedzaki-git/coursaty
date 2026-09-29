import React from "react";

const Description = ({ description = "", objectives = [], outcomes = [] }) => {
  return (
    <div
      className="tab-pane fade show active description"
      id="home-tab-pane"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <h4 className="my-3">حول هذه الدورة</h4>
      <p>{description || "No description available."}</p>
    </div>
  );
};

export default Description;
