// reference:-took help from google and friend.
import React, { Component } from "react";
 
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>Player info</h2>
        <label1 for = "player1">Player1 <input type = "text" id = "player1" placeholder = "enter player 1 name" autofocus/></label1><br/>
        <label1 for = "player1">Player1 select colour <select id="colour" name="colour">
                    
                    <option value="canada">yellow</option>
                    <option value="usa">pink</option>
                  </select></label1><br/>
        <label1 for = "player2">Player2 <input type = "text" id = "player2" placeholder = "enter player 2 name" autofocus/></label1><br/>
        <label1 for = "player1">Player2 select colour <select id="colour" name="colour">
                    
                    <option value="canada">yellow</option>
                    <option value="usa">pink</option>
                  </select></label1><br/>
        <button>Submit</button>
      </div>
    );
  }
}
 
export default Stuff;