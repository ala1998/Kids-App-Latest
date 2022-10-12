import {
} from '../actions/types';

const INITIAL_STATE = {
    isPlaying:false,
    currentPlayed: undefined
};

const app = (state = INITIAL_STATE, {type, payload}) => {
  console.log("payload",payload);
  switch (type) {
    case 'PLAYING_SOUND':
        return {...state, isPlaying:true}
    case 'PAUSED_SOUND':
        return {...state, isPlaying:false}
    case 'CURRENT_PLAYED':
        return {...state, currentPlayed: payload.sound}
    default:
      return state;
  }
};
export default app;
