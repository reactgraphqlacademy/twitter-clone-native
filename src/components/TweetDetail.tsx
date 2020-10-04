import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Paper } from './Paper';
import { Screen } from './Screen';
import { Avatar } from './Avatar';
import { Feather } from '@expo/vector-icons';
import { Icons } from '../constants/Utils';
import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';

const IconButton = ({ icon }) => (
  <Feather name={Icons[icon]} size={24} color={Colors.lightgrey} />
);

const TweetURL = ({ urls }) =>
  urls &&
  urls.length > 0 && (
    <ExternalLink
      url={urls[0].url}
      title={urls[0].display_url}
      style={[styles.tweet, styles.tweetURL]}
    />
  );

export const TweetDetail = ({ tweet, handleProfilePress }) => {
  const date = new Date(tweet.created_at);
  return (
    <Screen>
      <Paper style={styles.paper}>
        <TouchableOpacity onPress={handleProfilePress}>
          <View style={styles.header}>
            <Avatar image={tweet.user.profile_image_url_https} />
            <View style={styles.contentHeader}>
              <Text style={styles.userName}>{tweet.user.name}</Text>
              <Text style={styles.userScreenName}>
                @{tweet.user.screen_name}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.tweetContent}>
          <Text style={styles.tweet}>{tweet.text}</Text>
          <TweetURL urls={tweet.entities.urls} />
          <Text style={styles.timestamp}>{date.toLocaleTimeString()}</Text>
        </View>
        <View style={styles.footer}>
          <IconButton icon="rt" />
          <IconButton icon="likes" />
          <IconButton icon="open" />
        </View>
      </Paper>
    </Screen>
  );
};

const styles = StyleSheet.create({
  paper: {
    margin: 16,
  },
  header: {
    flexDirection: 'row',
  },
  contentHeader: {
    marginLeft: 8,
    flex: 1,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: '800',
    marginRight: 4,
  },
  userScreenName: {
    fontSize: 16,
    fontWeight: '200',
  },
  tweetContent: {
    margin: 8,
  },
  tweet: {
    fontSize: 24,
  },
  tweetURL: {
    color: 'blue',
    marginTop: 12,
  },
  timestamp: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.4)',
    marginVertical: 12,
  },
  footer: {
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
