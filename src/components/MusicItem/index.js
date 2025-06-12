import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const MusicItem = props => {
  const {eachTrack, onDeleteSong} = props
  const {id, imageUrl, name, genre, duration} = eachTrack

  const deleteSong = () => {
    onDeleteSong(id)
  }

  return (
    <li>
      <img src={imageUrl} alt="track" />
      <div className="name-genre-cont">
        <p className="name">{name}</p>
        <p className="genre">{genre}</p>
      </div>
      <div className="duration-delete-cont">
        <p>{duration}</p>
        <button
          aria-label="delete"
          data-testid="delete"
          onClick={deleteSong}
          type="button"
        >
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}

export default MusicItem
