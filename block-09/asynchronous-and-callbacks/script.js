// 3
const getPlanet = () => {
  const mars = {
    name: 'Mars',
    distanceFromSun: {
      value: 227900000,
      measurementUnit: 'kilometers',
    },
  };
  setTimeout(() => console.log('Returned planet: ', mars), 4000);
};

// getPlanet(); // imprime Marte depois de 4 segundos

// 4
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (temperature, error) => {
  setTimeout(() => {
    if (!temperature)
      return console.log(`Mars temperature is: ${getMarsTemperature()} degree Celsius`);
    try {
      return temperature(getMarsTemperature());
    } catch {
      return error("Parameter isn't a function");
    }
  }, messageDelay());
};
// sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

//4 - 1
const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9) / 5 + 32;
const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

//4 - 2
const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

sendMarsTemperature(temperatureInFahrenheit, handleError); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet, handleError); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
