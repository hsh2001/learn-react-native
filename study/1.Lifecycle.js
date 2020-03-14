import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';

class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      timeout: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        timeout: true,
      });
    }, 3000);
  }

  render() {
    const component = this.state.timeout ? <View /> : <TestWillUnmount />;
    return (
      <View>
        <TestDidMount />
        {component}
      </View>
    );
  }
}

class TestDidMount extends Component {
  constructor(props) {
    super();
    this.state = {
      text: 'not mounted.',
    };
  }

  render() {
    return (
      <View>
        <Text>
          componentDidMount:
          {this.state.text}
        </Text>
      </View>
    );
  }

  componentDidMount() {
    this.setState({
      text: 'mounted!',
    });
  }
}

class TestWillUnmount extends Component {
  componentWillUnmount() {
    Alert.alert('Component unmount!');
  }

  render() {
    return (
      <View>
        <Text>
          Hi TestWillUnmount is here! This text will disappear in 3 sec ago.
        </Text>
      </View>
    );
  }
}

export default LifeCycle;
