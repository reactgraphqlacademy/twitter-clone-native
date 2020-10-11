import React from 'react';

import * as api from '../../api/';
import { StyleSheet, Text } from 'react-native';
import { Screen, TweetItem, ViewLoading } from '../../components';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

export default class TimelineScreen extends React.Component {
  static navigationOptions = {
    title: 'Timeline',
  };

  state = {
    timeline: [],
  };

  componentDidMount() {
    this.fetchTimeline();
  }

  fetchTimeline = () => {
    this.props.api.fetchTimeline().then((timeline) => {
      this.setState({ timeline });
    });
  };

  handleTweetPress = (id) => {
    console.log('handlePress => ', id);
    this.props.navigation.navigate({
      routeName: TWEET_DETAIL_SCREEN,
      params: { id },
    });
  };

  renderItem = ({ item }) => (
    <TweetItem
      item={item}
      handlePress={() => this.handleTweetPress(item.id_str)}
    />
  );

  render() {
    const { timeline } = this.state;
    return (
      <Screen style={styles.screen}>
        {timeline.length == 0 ? (
          <ViewLoading />
        ) : (
          <FlatList
            data={this.state.timeline}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id_str}
          />
          // <ScrollView>
          //   <Text>{JSON.stringify(timeline, null, 4)}</Text>
          // </ScrollView>
        )}
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
  },
});

TimelineScreen.defaultProps = {
  api,
};
