import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const playedTime = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(playedTime, data.seconds);
  console.log(data.seconds);
};
const currentTime = localStorage.getItem(playedTime);

player.on('timeupdate', throttle(onPlay, 1000));

if (currentTime) {
  player.setCurrentTime(currentTime);
}
