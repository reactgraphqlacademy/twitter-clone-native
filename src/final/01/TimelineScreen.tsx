import React, { useEffect, useState } from 'react';

import * as api from '../../api/';
import { StyleSheet, Text } from 'react-native';
import { Screen, TweetItem, ViewLoading } from '../../components';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

import { TweetItemProps, TimelineScreenProps } from './types';
import { TWEET_DETAIL_SCREEN } from '../02/PublicNavigator';

export default function TimelineScreen(props: TimelineScreenProps) {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    fetchTimeline();
  }, []);

  function fetchTimeline() {
    props.api.fetchTimeline().then((timeline: []) => {
      setTimeline(timeline);
    });
  }

  function handleTweetPress(id: string) {
    console.log('handlePress => ', id);
    props.navigation.navigate(TWEET_DETAIL_SCREEN, { id });
  }

  function Item({ item }: { item: TweetItemProps }) {
    return (
      <TweetItem
        item={item}
        handlePress={() => handleTweetPress(item.id_str)}
      />
    );
  }

  return (
    <Screen style={styles.screen}>
      {timeline.length == 0 ? (
        <ViewLoading />
      ) : (
        <FlatList
          data={timeline}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id_str}
        />
        // <ScrollView>
        //   <Text>{JSON.stringify(timeline, null, 4)}</Text>
        // </ScrollView>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
  },
});

TimelineScreen.defaultProps = {
  api,
};
