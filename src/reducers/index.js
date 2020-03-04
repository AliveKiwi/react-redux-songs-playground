//REDUCER
import { combineReducers } from 'redux';

const songsReducers = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'All Star', duration: '3:15' },
    { title: 'Macrena', duration: '2:30' },
    { title: 'I Want it That Way', duration: '1:45' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducers,
  selectedSong: selectedSongReducer
});
