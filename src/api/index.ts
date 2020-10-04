import timeline from './timeline.json';
import tweet from './tweet.json';
import user from './user.json';
import userTimeline from './userTimeline.json';

export const fetchTimeline = () => Promise.resolve(timeline.statuses);

export const fetchTweetById = ({ id }) => Promise.resolve(tweet);

export const fetchUser = ({ userId, name }) => Promise.resolve(user);

export const fetchUsersTimeline = ({ userId, name }) =>
  Promise.resolve(userTimeline);
