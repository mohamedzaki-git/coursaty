


const IntroVideo = ({ videos, videoIntro }) => {
    return (
        <div className="intro text-start">
            {/* <h3>Intro Video</h3> */}
            {videoIntro && (
                <div className="intro-video mb-4">
                    <h6 className="fw-bold">
                        {videoIntro.title} <i className="fa-solid fa-play  mx-2"></i>
                    </h6>
                    <video controls width="100%" className="mb-3">
                        <source src={videoIntro.url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}

        </div>
    );
};

export default IntroVideo;
