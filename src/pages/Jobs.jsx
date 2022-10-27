import React from 'react';
import {Header, JobsList} from '../components/jobs';
import {Card} from '../components/ui';
import {jobs} from '../data';

export const Jobs = () => {
  return (
    <section className='jobs'>
      <Card>
        <Header title='Experiencia' subtitle='En la industria del software' />
        <JobsList jobs={jobs.filter(j => j.isSoftware)} />
      </Card>
      <Card>
        <Header title='Experiencia previa' subtitle='En otros campos' />
        <JobsList jobs={jobs.filter(j => !j.isSoftware)} />
      </Card>
    </section>
  );
};
