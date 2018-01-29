import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

class FullheightIframe extends Component {
    constructor() {
        super();
        this.state = {
            iFrameHeight: '200px'
        }
    }

    render() {
        if (!this.props.video) {
            return <div>Loading...</div>;
        }
        const videoId = this.props.video.id.videoId;
        const url = `https://www.youtube.com/embed/${videoId}`;

        console.log(url);

        return (
            <iframe 
                style={{maxWidth:640, width:'100%', height:this.state.iFrameHeight, overflow:'visible'}}
                onLoad={() => {
                    const obj = ReactDOM.findDOMNode(this);
                    this.setState({
                        "iFrameHeight":  obj.contentWindow.document.body.scrollHeight + 'px'
                    });
                }} 
                ref="iframe" 
                src={url} 
                width="100%" 
                height={this.state.iFrameHeight} 
                scrolling="no" 
                frameBorder="0"
            />
        );
    }
}

export default FullheightIframe;