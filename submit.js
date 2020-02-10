import React from 'react';


class SubmitButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {ready: false}
  }
  render() {
    return (
      <input type="submit" name="Submit"/>
    );
  }
}

let submit = <div>
              <SubmitButton/>
             </div>;

export default submit
