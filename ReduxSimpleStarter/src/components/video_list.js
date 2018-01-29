import React from 'react';
import VideoListItem from './video_list_item'

// Functional component - singelton
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        // Adding an item to a react list
        // key - the id in the list
        return <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag} 
                video = {video}/>
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;