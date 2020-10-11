import React from 'react';

import * as api from '../api/';
import { FlatList, StyleSheet } from 'react-native';
import { Screen, TweetItem, ViewLoading } from '../components';
// import { TWEET_DETAIL_SCREEN } from './TimelineNavigator';

// export default function TimelineScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Timeline</Text>
//       <View
//         style={styles.separator}
//         lightColor="#eee"
//         darkColor="rgba(255,255,255,0.1)"
//       />
//     </View>
//   );
// }

export default class TimelineScreen extends React.Component {
  /*
  - the header title for this view should be `Timeline`
  */

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
    /*
    - navigate to `TWEET_DETAIL_SCREEN` passing the id as a param
    */
    this.props.navigation.navigate({
      routeName: TWEET_DETAIL_SCREEN,
      params: { id },
    });
  };
  /*
    - create a TweetItem component with this API:
      <TweetItem item={item} handlePress={() => this.handleTweetPress(item.id_str)} />
    */
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
