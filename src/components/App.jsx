import exampleVideoData from '/compiled/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import VideoListEntry from './VideoListEntry.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from './Search.js'

const { useState, useEffect } = React;

var App = (props) => {
  // Initialize a state in App to keep track of all the videos in the video list.
  const [currentList, setCurrentList] = useState([]);

  // initialize state in App to keep track of the current video in the player.
  const [currentVideo, setCurrentVideo] = useState({});

  useEffect(() => {
    searchYouTube('', (data) => {
      setCurrentList(data);
      setCurrentVideo(data[0]);
    })
  }, []);

  if (currentList.length === 0 || Object.keys(currentVideo).length === 0) {
    var isFirstRender = true;
  }

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          {isFirstRender ? <div className='form-control'></div> : <Search setCurrentList={setCurrentList} setCurrentVideo={setCurrentVideo} />}
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          {isFirstRender ? <div className='video-player'></div> : <VideoPlayer video={currentVideo}/>}
        </div>
        <div className="col-md-5">
          {isFirstRender? <div className='video-list'></div> : <VideoList videos={currentList} setCurrentVideo={setCurrentVideo} />}
        </div>
      </div>
    </div>
  );
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App
