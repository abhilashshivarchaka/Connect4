// reference:-took help from google and friend.
import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
class Stuff extends Component {
  render() {
    return (
      <div>
        {/* <h2 id="info">Player info</h2> */}
        <label1 id="info1" for = "player1">Player1 <input  type = "text" id = "player1" placeholder = "enter player 1 name" autofocus/></label1><br/>
        <label1 id="info2" for = "player1">Player1 select colour <select id="player1" name="colour">
                    
                    <option value="canada">yellow</option>
                    <option value="usa">blue</option>
                  </select></label1><br/>
        <label1 id="info3" for = "player2">Player2 <input type = "text" id = "player1" placeholder = "enter player 2 name" autofocus/></label1><br/>
        <label1 id="info4" for = "player1">Player2 select colour <select id="player1" name="colour">
                    
                    <option value="canada">yellow</option>
                    <option value="usa">blue</option>
                  </select></label1><br/>
                  <NavLink to="/game">
<button id="sub" >Submit</button></NavLink>

      </div>
    );
  }
}
 
export default Stuff;