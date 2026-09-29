
const Reviews = ({ reviews = [] }) => {
    return (
        <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex="0">
            <h3 className="my-3 text-white border-bottom pb-3 border-secondary">الآراء</h3>
            {reviews.length > 0 ? (
                reviews.map((review, index) => (
                    <div key={index} className="review-item mb-4 p-3 border-bottom ">
                        <h5 className="reviewer-name text-info">{review.name}</h5>
                        <p className="review-text text-white">{review.text}</p>
                        <div className="review-rating">
                            <i className="fas fa-star text-warning"></i> <span className="text-white" >{review.rating} / 5</span>
                        </div>
                    </div>
                ))
            ) : (
                <p>No reviews available.</p>
            )}
        </div>
    );
};

export default Reviews;
