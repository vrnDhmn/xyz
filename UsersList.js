/** @component View */

import React, { PureComponent } from 'react'
import { VirtualizedList, View, Text } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'
import LinearGradient from 'react-native-linear-gradient'

import { Map, List, fromJS } from 'immutable'

import GetUsers from '../services/service'
import { users } from '../dummy.json'
class UsersList extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { users: List([]) }
  }

  componentDidMount() {
    setTimeout(() => {
      GetUsers().then(result => {
        this.setState({ users: this.state.users.concat(fromJS(result)) })
      })
    }, 5000)
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
        colors: ['#32cd32', '#b0e0e6'],
        start: { x: 1, y: 0 },
        end: { x: 0.2, y: 0 }
      }}
      ViewComponent={LinearGradient}
      onPress={() => {}}
    >
      <Avatar size="large" source={{ uri: item.get('avatar_url') }} />
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
      <ListItem.Chevron />
    </ListItem>
  )

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'pink'
        }}
      />
    )
    // return (
    //   <VirtualizedList
    //     data={this.state.users}
    //     initialNumToRender={4}
    //     renderItem={this.renderItem}
    //     keyExtractor={item => {
    //       return item.get('id')
    //     }}
    //     getItemCount={data => {
    //       return data.size
    //     }}
    //     getItem={this.getItem}
    //   />
    // )
  }
}
export { UsersList }
