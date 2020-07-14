import React, { Component } from "react";
import "./Youtube.css";

class Youtube extends Component {
  constructor() {
    super();
    this.state = {
      youtubeVideos: [],
    };
  }
  // componentDidMount will make sure our html loads before we do anything, like making the dom ready in pure js
  componentDidMount() {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCau6aO0G580bEmMrahjli_XuTXCbo0VRk&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=12"
    )
      .then((response) => response.json())
      .then((data) => {
        const youtubeVideos = data.items;
        this.setState((state) => {
          return {
            youtubeVideos: youtubeVideos,
          };
        });
      });
  }

  render() {
    return (
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper">
                Latest Videos <br />
                <br />
              </div>
            </div>
            {this.state.youtubeVideos.map((singleVideo) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank">
                        <img src={singleVideo.snippet.thumbnails.high.url} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}
            {this.videoWrapper};
          </div>
        </div>
      </div>
    );
  }
}

export default Youtube;
