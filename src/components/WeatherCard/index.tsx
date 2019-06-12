import React from 'react';
import styled from 'styled-components';
import WeatherIcons from 'react-weathericons';
import './css/weather-icons.css';
import './css/weather-icons-wind.css';

interface IProps {
  day: string;
  icon: string;
  highTemperature: number;
  lowTemperature: number;
}

const color = '#a6a6a6';

const Card = styled.div`
  width: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${color};
  border: ${color} solid 1px;
  border-radius: 4px;
  padding: 5px 0 5px;
`;

const WeatherCard: React.FC<IProps> = ({
  day,
  icon,
  highTemperature,
  lowTemperature
}) => {
  return (
    <Card>
      {day}
      <WeatherIcons name={icon} size="1x" color="#000" />
      {highTemperature}° {lowTemperature}°
    </Card>
  );
};

export default WeatherCard;
