import searchYouTube from '../lib/searchYouTube.js'

var searchBarHandler (e) => {
  searchYouTube(e.target.value, (data) => {
      props.setCurrentList(data);
      props.setCurrentVideo(data[0];)
  });
};

var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={searchBarHandler(e)}/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;