import { Outlet } from "react-router-dom";
import { Component } from "react";
import ProfileClass from "./ProfileClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log('Parent - constructor!');
  }

  componentDidMount() {
    console.log('Parent - Component did mount!');

  }

  render() {
    console.log('Parent - render!');
    return (<div>

      <Outlet />
      <ProfileClass name={'Class props passed!'} />
    </div>);
  }
}

export default About;
