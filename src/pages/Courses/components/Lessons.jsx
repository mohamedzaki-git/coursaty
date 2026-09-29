import React from 'react';
import YouTube from 'react-youtube';

const Lessons = ({ videos }) => {

    return (
        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
            <h4 className='my-3 text-white fw-bold  border-bottom pb-3'>الدروس</h4>
            {videos.length > 0 ? (
                <div className="row">
                    {videos.map((video, index) => (
                        <div key={index} className="col-md-4 mb-3">
                            <div className="card bg-transparent">
                                <div className="card-body">
                                    <h5 className='card-title text-white text-center'>
                                        {index + 1}  - {video.title} <small className='text-white'>{video.duration}</small>
                                    </h5>
                                    {video.url ? (
                                        <YouTube
                                            videoId={video.url.split('v=')[1]}
                                            opts={{
                                                height: '200',
                                                width: '100%',
                                                playerVars: {
                                                    autoplay: 0
                                                }
                                            }}
                                        />
                                    ) : (
                                        <p>رابط الفيديو غير متاح</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>لا توجد فيديوهات لعرضها</p>
            )}
        </div>
    );
};

export default Lessons;
