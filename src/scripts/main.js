import '../styles/main.scss';

// import { heading } from './modules/test';

// heading.style.color = 'yellow';

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    console.log(latitude, longitude);
  });
}
