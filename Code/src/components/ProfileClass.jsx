import { Component } from 'react';

/**
 * React keep track of classes which extends Component 
 * from react lib, invoke `render` method on any props or state change.
 */
class ProfileClass extends Component {

  constructor(props) {
    super(props);

    /* this how to maintain state variable in class based components,
      similar to  `const [count] = useState(0)`.
    */
    this.state = {
      count: 0,
      count2: 23,
      userInfo: {}
    };



    console.log('Child - constructor!');
  }

  async componentDidMount() {
    console.log('Child - component did mount!')
    const data = await fetch('https://api.github.com/users/prashantsinghgour');
    const json = await data.json();
    const userInfo = {
      name: json.name,
      company: json.company,
      avatar: json.avatar_url
    }
    this.setState({
      userInfo
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(prevState.count);
    }
    console.log('Child - component did update!!')
  }

  componentWillUnmount() {
    console.log('Child - component destroyed!');
  }

  render() {
    console.log('Child - render!');
    return (
      <div style={{
        border: '1px solid grey'
      }}>
        <h1>I am a Class Component.</h1>
        <h2>{this.props.name}</h2>
        <h3>Count: {this.state.count}</h3>
        <button onClick={() => {
          /* we should not mutate state directly.
          * we never do this.state = something          
          */
          this.setState({
            count: this.state.count + 1 // while updating count it is just updating count not the whole state object
          })
        }}>Update Count</button>
        <img style={{
          height: '10rem',
          marginTop: '2rem',
          marginLeft: '2rem',
          borderRadius: '50%',
          display: 'block'
        }} src={this.state.userInfo.avatar} alt="profile_picture" />
        <h2>{this.state.userInfo.name}</h2>
        <h3>{this.state.userInfo.company}</h3>
      </div>
    )
  }
}

export default ProfileClass;
