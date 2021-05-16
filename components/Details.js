/** @component View */

import React, { Component } from 'react'
import { View } from 'react-native'
import moment from 'moment'
import { ListItem, Avatar } from 'react-native-elements'

class Details extends Component {
  render() {
    let { user } = this.props
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f0f8ff'
        }}
      >
        <Avatar
          containerStyle={{ marginTop: 30 }}
          size="xlarge"
          source={{ uri: user.avatar_url }}
        />
        <ListItem.Content>
          {user.bio ? (
            <ListItem.Subtitle h2>{user.bio}</ListItem.Subtitle>
          ) : null}
          <ListItem.Title h2>{user.name}</ListItem.Title>
          {user.email ? (
            <ListItem.Subtitle h5>{user.email}</ListItem.Subtitle>
          ) : null}
          {user.location ? (
            <ListItem.Subtitle h5>{user.location}</ListItem.Subtitle>
          ) : null}
          {user.twitter_username ? (
            <ListItem.Subtitle h5>{user.twitter_username}</ListItem.Subtitle>
          ) : null}
          {user.created_at ? (
            <ListItem.Subtitle h5>
              Created On{' '}
              {moment(user.created_at).format('MMMM Do YYYY, h:mm:ss a')}
            </ListItem.Subtitle>
          ) : null}
          {user.public_repos ? (
            <ListItem.Subtitle h5>
              No. of repos: {user.public_repos}
            </ListItem.Subtitle>
          ) : null}
        </ListItem.Content>
      </View>
    )
  }
}

export default function (props) {
  return <Details user={props.route.params} />
}
