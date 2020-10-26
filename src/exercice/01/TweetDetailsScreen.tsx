import React from 'react';
import { ScrollView, Text } from 'react-native';
import { TweetDetail, Screen, ViewLoading } from '../../components';
import * as api from '../../api';

// 🥑 Import the routing
// import { AppRoute } from '../02/AppRoutes';

class TweetDetailScreen extends React.Component {
  state = {
    tweet: null,
    error: null,
    loading: true,
  };

  componentDidMount() {
    this.fetchTweet();
  }

  fetchTweet = () => {
    const id = this.props.route.params.id;

    if (id) {
      this.props.api.fetchTweetById({ id }).then((tweet) => {
        this.setState({ loading: false, tweet });
      });
    } else {
      this.setState({ error: 'no tweet available. please go back' });
    }
  };

  handleProfilePress = () => {
    console.log('handleProfilePress -> handleProfilePress');
    // 🥑 navigate to profile screen and add `userId` and `name` keys
  };

  render() {
    return (
      <Screen>
        {this.state.loading ? (
          <ViewLoading />
        ) : (
          <ScrollView>
            {this.state.error ? (
              <Text>{this.state.error}</Text>
            ) : (
              <TweetDetail
                tweet={this.state.tweet}
                handleProfilePress={this.handleProfilePress}
              />
            )}
          </ScrollView>
        )}
      </Screen>
    );
  }
}

TweetDetailScreen.defaultProps = {
  api,
};

export default TweetDetailScreen;
