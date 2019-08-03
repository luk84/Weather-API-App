import '../styles/main.scss';

<<<<<<< HEAD
import ExternalAPI from './modules/ExternalApi';

const externalAPI = new ExternalAPI();

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;

    externalAPI
      .getWeather(latitude, longitude)
      .then(data => console.log(data))
      .catch(err => console.log(err.message));
  });
}

externalAPI
  .getCityPosition('الناصرة')
  .then(data => console.log(data))
  .catch(err => console.log(err.message));
=======
// import { heading } from './modules/test';

// heading.style.color = 'yellow';

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    console.log(latitude, longitude);
  });
}
>>>>>>> tests
