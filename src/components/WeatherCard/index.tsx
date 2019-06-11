import React from 'react';
import styled from 'styled-components';

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
      <img src={icon} />
      {highTemperature}° {lowTemperature}°
    </Card>
  );
};

export default WeatherCard;
