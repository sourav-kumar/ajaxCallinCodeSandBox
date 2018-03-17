import React from "react";
import { render } from "react-dom";
import Box from "./Box";
import './css/box.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    let that = this;
    fetch("/list1.json", {
      headers: {
        "content-type": "application/json"
      }
    })
      .then(function(res) {
        return res.json();
      })
      .then(function(list) {
        that.setState({ items:list.list});
      })
      .catch(function(err) {
        console.log(err);
      });
  }
  render() {
    const {items} = this.state;
    return (
      <div className="box-container">
        {
          items.map(details=>{
            return (<Box key={details.id} name={details.name} age={details.Age} desc={details.desc} />);
          })
        }
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
