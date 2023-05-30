import React from 'react';
import PropTypes from 'prop-types';
import S from './Statistics.module.css';

export const Statistics = props => {
  return (
    <section className={S.statistics}>
      <h2 className={S.title}>{props.title}</h2>

      <ul className={S.statList}>
        {props.stats.map(data => {
          return (
            <StatisticsItem
              key={data.id}
              label={data.label}
              percentage={data.percentage}
            />
          );
        })}
      </ul>
    </section>
  );
};

const StatisticsItem = props => {
  return (
    <li className={S.item}>
      <span className={S.label}>{props.label}</span>
      <span className={S.percentage}>{props.percentage}%</span>
    </li>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

StatisticsItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
