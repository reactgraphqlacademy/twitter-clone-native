import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  FlatList,
  Dimensions,
} from 'react-native';
import { ViewLoading, Avatar, TweetItem } from '../../components';
import { Appbar } from 'react-native-paper';
import * as api from '../../api';
import { PROFILE_AVATAR_SIZE } from '../../constants/Utils';
import Colors from '../../constants/Colors';

const HERO_HEIGHT = 180;
const { width } = Dimensions.get('window');

const FollowButton = ({ following = false }) => (
  <TouchableOpacity
    onPress={() => {
      alert('Follow!');
    }}
  >
    <View
      style={[
        {
          alignSelf: 'flex-end',
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderWidth: 2,
          borderColor: Colors.light.tint,
          marginBottom: 8,
          borderRadius: 20,
          backgroundColor: 'transparent',
        },
        following
          ? {
              backgroundColor: Colors.light.tint,
            }
          : {},
      ]}
    >
      <Text
        style={[
          {
            color: Colors.light.tint,
            fontWeight: '600',
            fontSize: 14,
            textAlign: 'center',
          },
          following
            ? {
                color: Colors.light.background,
              }
            : {},
        ]}
      >
        {`FOLLOW${following ? 'ING' : ''}`}
      </Text>
    </View>
  </TouchableOpacity>
);

export class ProfileScreen extends React.Component {
  scrollY = new Animated.Value(1);

  static navigationOptions = {
    header: null,
  };

  state = {
    user: null,
    loading: true,
    timeline: [],
    userError: '',
    timelineError: '',
  };

  componentDidMount() {
    this.getUsersData();
  }

  getUsersData = () => {
    const userId = this.props.route.key?.userId;
    const name = this.props.route.key?.name;
    this.fetchUser({ userId, name });
    this.fetchTimeline({ userId, name });
  };

  fetchUser = ({ userId, name }) => {
    if (userId && name) {
      this.props.api.fetchUser({ userId, name }).then((user) => {
        this.setState({ loading: false, user });
      });
    } else {
      this.setState({ userError: 'no user available. please go back' });
    }
  };

  fetchTimeline = ({ userId, name }) => {
    if (userId && name) {
      this.props.api.fetchTimeline({ userId, name }).then((timeline) => {
        this.setState({ timeline });
      });
    } else {
      this.setState({ timelineError: 'no timeline data. sorry! :(' });
    }
  };

  renderItem = ({ item }) => (
    <TweetItem item={item} handlePress={() => {}} withAvatar={false} />
  );

  render() {
    const { scrollY } = this;

    let opacity = scrollY.interpolate({
      inputRange: [0, 64, 100],
      outputRange: [0, 0, 1],
    });
    const { user, timeline, loading } = this.state;

    return (
      <View>
        {loading ? (
          <ViewLoading />
        ) : (
          <Animated.ScrollView
            scrollEventThrottle={1}
            contentContainerStyle={{ paddingTop: -64 }}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      y: this.scrollY,
                    },
                  },
                },
              ],
              { useNativeDriver: true }
            )}
          >
            <View style={[styles.header]}>
              <Animated.Image
                resizeMode="cover"
                style={[styles.headerCover]}
                source={{ uri: user.profile_banner_url }}
              />
            </View>
            <View style={styles.headerContent}>
              <FollowButton following={user.following} />
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userScreenName}>@{user.screen_name}</Text>
            </View>
            <Avatar
              profile
              style={[
                styles.headerAvatar,
                {
                  borderColor: `#${user.profile_background_color}`,
                },
              ]}
              image={user.profile_image_url_https}
            />
            <View style={styles.content}>
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
            </View>
          </Animated.ScrollView>
        )}
        <Animated.View
          style={{
            opacity,
            position: 'absolute',
            top: 0,
            width,
          }}
        >
          <Appbar.Header style={styles.appBarHeader}>
            <Appbar.BackAction onPress={() => this.props.navigation.goBack()} />
            {user && (
              <Appbar.Content
                title={user.name}
                titleStyle={{ fontWeight: '600', fontSize: 18 }}
                subtitle={`${timeline.length} Tweets`}
              />
            )}
          </Appbar.Header>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: HERO_HEIGHT,
  },
  headerCover: {
    height: HERO_HEIGHT,
    flex: 1,
  },
  headerAvatar: {
    position: 'absolute',
    top: HERO_HEIGHT - PROFILE_AVATAR_SIZE / 2,
    left: 16,
    borderWidth: 4,
  },
  headerContent: {
    padding: 16,
    borderBottomColor: Colors.light.tabIconDefault,
    borderBottomWidth: 1,
  },
  appBarHeader: {
    backgroundColor: Colors.light.tintPastel,
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
  content: {
    paddingHorizontal: 16,
    backgroundColor: Colors.light.background,
  },
});

ProfileScreen.defaultProps = {
  api,
};
