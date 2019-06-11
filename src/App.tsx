import React from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  & > * {
    margin: 0 5px;
  }
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <Wrapper>
        <WeatherCard
          day="wt."
          icon="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          lowTemperature={32}
          highTemperature={17}
        />
        <WeatherCard
          day="śr."
          icon="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          lowTemperature={32}
          highTemperature={17}
        />
        <WeatherCard
          day="cz."
          icon="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          lowTemperature={32}
          highTemperature={17}
        />
        <WeatherCard
          day="pt."
          icon="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          lowTemperature={32}
          highTemperature={17}
        />
      </Wrapper>
    </div>
  );
};

export default App;
