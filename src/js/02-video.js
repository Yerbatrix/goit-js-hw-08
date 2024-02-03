import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  const currentTime = JSON.stringify(data.seconds);
  localStorage.setItem('videoplayer-current-time', currentTime);
};

const throttlePlay = throttle(onPlay, 1000);

player.on('timeupdate', throttlePlay);

player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time'))
);
