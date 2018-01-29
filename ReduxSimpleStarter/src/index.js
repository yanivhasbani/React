import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
import FullheightIframe from "./components/full_height_iframe"

const API_KEY = 'AIzaSyAZT5-6fNn2QSvf7iHYCQ9MJyRpfq9-itc';

// Babel - How to translate JSX to js with react
// E.G:
//  https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=MYewdgzgLgBAggBwTAvDAZgVzMKBLcACgEoYBvAKBmpgCcBTKTWsGAHgBM8A3APgAk8AQjYB6LnwDcFAL5A&debug=false&circleciRepo=&evaluate=false&fileSize=false&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=6.26.0
//  https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=MYewdgzgLgBAggBwTAvDAZgVzMKBLcACgEoYBvAKBmpgCcBTKTWsGAHhABsA-Km6tpzzcAjGwD0Q3vwFSATBKl9-g4QGZFw5e3FduAbgoBfIA&debug=false&circleciRepo=&evaluate=false&fileSize=false&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=6.26.0
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos:[],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key:API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos,
                selectedVideo: videos[0]
             });
        });
    }

    render() {
        // call this function only once every 300 milisec
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 350);

        return (
            <div>
                {/* A call back that goes */}
                {/* App -> SearchBar -> App */}
                {/* When user types something to search bar */}
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <FullheightIframe video={this.state.selectedVideo}/>
                {/* props in react. re-rendered on every instance!  */}
                <VideoList
                    // A call back that goes
                    // App -> VideoList ->-> VideoListItem -> onVideoSelect
                    // When user click the list to change video
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
} 

// Take the above component and put it in a page(DOM)
ReactDOM.render(
    (
        <div>
            <App/>
        </div>
    ), document.querySelector('.container')
);

