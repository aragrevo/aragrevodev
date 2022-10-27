import React from 'react';

export const JobItem = ({job}) => {
  return (
    <div className='job-card'>
      <div className='job-card-content'>
        <a href={job.company.link} target='_blank' rel='noopener noreferrer'>
          <img
            className='job-card-content__image'
            width={56}
            height={56}
            loading='lazy'
            src={job.company.image}
            alt={job.company.name}
          />
        </a>
        <div className='job-card-content__section'>
          <h3 className='job-card-content__section-title'>{job.title}</h3>
          <a
            className='job-card-content__section-subtitle'
            href={job.company.link}
            target='_blank'
            rel='noopener noreferrer'>
            {job.company.name}
          </a>
          <span className='job-card-content__section-caption'>
            {job.location} &nbsp;
            {job.isRemote ? '(En remoto)' : '(Presencial)'}
          </span>
          <span className='job-card-content__section-time'>{job.date}</span>
          {job.isSoftware && <TechnologyList technologies={job.technologies} />}
        </div>
      </div>
    </div>
  );
};

const TechnologyList = ({technologies}) => {
  return (
    <ul className='job-card-content__section-technologies'>
      {technologies.map((t, i) => (
        <li key={t + i}>
          <img src={`https://img.shields.io/badge/-${t}-333333?style=flat&logo=${t}`} alt='' />
        </li>
      ))}
    </ul>
  );
};
