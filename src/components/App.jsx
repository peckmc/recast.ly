import exampleVideoData from '/compiled/src/data/exampleVideoData.js';
import VideoList from '/compiled/src/components/VideoList.js';
import VideoPlayer from '/compiled/src/components/VideoPlayer.js';
import VideoListEntry from '/compiled/src/components/VideoListEntry.js';
import searchYoutube from '/compiled/src/lib/searchYouTube.js';

const { useState } = React;

var App = () => {
  // Initialize a state in App to keep track of all the videos in the video list.
  const [currentList, setCurrentList] = useState(exampleVideoData);

  // initialize state in App to keep track of the current video in the player.
  const [currentVideo, setCurrentVideo] = useState(exampleVideoData[0]);



  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={currentList} setCurrentVideo={setCurrentVideo} />
        </div>
      </div>
    </div>
  );
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App
