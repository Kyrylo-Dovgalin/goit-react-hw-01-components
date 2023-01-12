import PropTypes from 'prop-types';

import {
  StatisticsCard,
  CardTitle,
  StatList,
  StatItem,
  Label,
  Value,
} from './Ststistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsCard>
      {title && <CardTitle>{title}</CardTitle>}

      <StatList>
        {stats.map(item => (
          <StatItem key={item.id}>
            <Label>{item.label} </Label>
            <Value>{item.percentage}</Value>
          </StatItem>
        ))}
      </StatList>
    </StatisticsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
