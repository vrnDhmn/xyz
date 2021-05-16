import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
export default () => (
  <Input
    ref={ref => {
      this.input = ref
    }}
    placeholder="search user"
    onEndEditing={value => (this.value = value)} //searchAPI
  />
)
