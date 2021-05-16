/** @component View */

import React, { Component } from 'react'
import { VirtualizedList } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

import { Map, List, fromJS } from 'immutable'

import GetUsers from '../services/service'

class UsersList extends Component {
  constructor(props) {
    super(props)
    this.state = { users: List([]) }
  }

  componentDidMount() {
    GetUsers().then(result => {
      debugger
      this.setState({ users: this.state.users.concat(fromJS(result)) })
    })
  }

  getItem = (data, index) => {
    debugger
    data
    index
    return {
      id: Math.random().toString(12).substring(0),
      title: `Item ${index + 1}`
    }
  }

  renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <Avatar source={{ uri: item.avatar_url }} />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>
          {item.bio || item.email || item.company || item.blog}
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  )

  render() {
    return (
      <VirtualizedList
        data={this.state.users}
        initialNumToRender={4}
        renderItem={this.renderItem}
        keyExtractor={item => item.get('id')}
        getItemCount={data => data.size}
        getItem={this.getItem}
      />
    )
  }
}

export default function ({ navigation }) {
  return <UsersList />
}
