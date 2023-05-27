import React from 'react';
import { Fragment } from 'react';
import { Profile } from './Profile/Profile';
import user from 'path/user';
import { Statistics } from './Statistics/Statistics';
import data from 'path/data';

export const App = () => {
  return (
    <Fragment>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </Fragment>
  );
};
