import exampleVideoData from '/compiled/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import VideoListEntry from './VideoListEntry.js';
import searchYouTube from '../lib/searchYouTube.js';
// import Search from '/compiled/src/components/Search.js'

const { useState, useEffect } = React;

var App = (props) => {
  // Initialize a state in App to keep track of all the videos in the video list.
  const [currentList, setCurrentList] = useState(exampleVideoData);

  // initialize state in App to keep track of the current video in the player.
  const [currentVideo, setCurrentVideo] = useState(exampleVideoData[0]);

  useEffect(() => {
    console.log('useEffect is working');
    console.log(searchYouTube);
    searchYouTube('cat', (data) => {
      setCurrentList(data);
    })
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          {/* <Search setCurrentList={setCurrentList} setCurrentVideo={setCurrentVideo} /> */}
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
