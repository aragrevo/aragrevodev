import React from 'react';
import {JobItem} from './JobItem';

export const JobsList = ({jobs}) => {
  return (
    <ul className='jobs-content'>
      {jobs.map(job => (
        <li className='job' key={job.date}>
          <JobItem job={job} />
        </li>
      ))}
    </ul>
  );
};
