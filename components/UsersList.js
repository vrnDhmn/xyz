/** @component View */

import React, { Component } from 'react'
import { VirtualizedList, View, Text } from 'react-native'
import { ListItem, Avatar, Chip } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'
import LinearGradient from 'react-native-linear-gradient'

import { Map, List, fromJS } from 'immutable'

import GetUsers from '../services/service'

class UsersList extends Component {
  constructor(props) {
    super(props)
    this.state = { users: List([]) }
  }

  componentDidMount() {
    GetUsers().then(result => {
      this.setState({ users: this.state.users.concat(fromJS(result)) })
    })
  }

  getItem = (data, index) => data.get(index)

  renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      Component={TouchableScale}
      friction={90} //
      tension={100} // These props are passed to the parent component (here TouchableScale)
      activeScale={0.95} //
      linearGradientProps={{
        colors: ['#000', '#708090'],
        start: { x: 1, y: 0 },
        end: { x: 0.2, y: 0 }
      }}
      ViewComponent={LinearGradient}
      onPress={() => {
        this.props.onPress(item.toJS())
      }}
    >
      <Avatar size="large" rounded source={{ uri: item.get('avatar_url') }} />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: 'bold' }}>
          {item.get('name')}
        </ListItem.Title>
        <ListItem.Subtitle style={{ fontWeight: 'bold' }}>
          {item.get('bio') ||
            item.get('email') ||
            item.get('company') ||
            item.get('blog')}
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Content right>
        <Chip
          title={`${item.get('public_repos')} repos`}
          type="outline"
          disabled
        />
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  )

  render() {
    return (
      <VirtualizedList
        data={this.state.users}
        renderItem={this.renderItem}
        keyExtractor={item => {
          return item.get('id')
        }}
        getItemCount={data => {
          return data.size
        }}
        getItem={this.getItem}
      />
    )
  }
}

export default function ({ navigation }) {
  return (
    <UsersList
      onPress={user => {
        navigation.navigate('Details', user)
      }}
    />
  )
}
