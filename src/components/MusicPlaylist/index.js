import {Component} from 'react'
import {GoSearch} from 'react-icons/go'

import './index.css'
import MusicItem from '../MusicItem'

class MusicPlaylist extends Component {
  constructor(props) {
    super(props)
    this.state = {searchInput: '', tracksList: props.initialTracksList}
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onDeleteSong = id => {
    const {tracksList} = this.state
    const filteredTracksList = tracksList.filter(
      eachTrack => eachTrack.id !== id,
    )
    this.setState({
      tracksList: filteredTracksList,
    })
  }

  render() {
    const {searchInput, tracksList} = this.state
    const searchResults = tracksList.filter(eachTrack =>
      eachTrack.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const isEmpty = searchResults.length === 0
    return (
      <div className="bottom-container">
        <div className="bottom-cont-header">
          <h1> Songs Playlist</h1>
          <div className="search-container">
            <input
              type="search"
              placeholder="Search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
            <GoSearch />
          </div>
        </div>
        {isEmpty ? (
          <div className="songs-playlist empty-view">
            <p> No Songs Found </p>
          </div>
        ) : (
          <ul className="songs-playlist">
            {searchResults.map(eachTrack => (
              <MusicItem
                key={eachTrack.id}
                eachTrack={eachTrack}
                onDeleteSong={this.onDeleteSong}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default MusicPlaylist
