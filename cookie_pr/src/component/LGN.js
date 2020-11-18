import React, { Component } from 'react';


class LGN extends Component {
    render(){
        return (
            <div className="LGN">
                    <form action="/userinfo">
                    <div class="form-group">
                    <label for="uname">Name:</label>
                    <input  class="form-control" type="text" id="uname" name="uname" value="" />
                    <label for="youtube_addr">Youtube:</label>
                    <input  class="form-control" type="text" id="youtube_addr" name="youtube_addr" value="" />
                    <label for="upw">Password:</label>
                    <input  class="form-control" type="text" id="upw" name="upw" value="" />
                    <input  class="btn btn-default" type="submit" value="Submit" />
                    </div>
                </form> 
            </div>
        );
    }
}

export default LGN;
