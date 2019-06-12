import React from 'react';
import WeatherCard from './components/WeatherCard';
import styled from 'styled-components';
import './App.css';

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
          icon="sunny"
          highTemperature={31}
          lowTemperature={18}
        />
        <WeatherCard
          day="śr."
          icon="sunny"
          highTemperature={31}
          lowTemperature={18}
        />
        <WeatherCard
          day="cz."
          icon="rain"
          highTemperature={31}
          lowTemperature={18}
        />
        <WeatherCard
          day="pt."
          icon="sunny"
          highTemperature={31}
          lowTemperature={18}
        />
      </Wrapper>
    </div>
  );
};

export default App;
