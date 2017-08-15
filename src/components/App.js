import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap'

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {

    const buttonsInstance = (
      <ButtonToolbar>
        {/* Standard button */}
        <Button>Default</Button>

        {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
        <Button bsStyle="primary">Primary</Button>

        {/* Indicates a successful or positive action */}
        <Button bsStyle="success">Success</Button>

        {/* Contextual button for informational alert messages */}
        <Button bsStyle="info">Info</Button>

        {/* Indicates caution should be taken with this action */}
        <Button bsStyle="warning">Warning</Button>

        {/* Indicates a dangerous or potentially negative action */}
        <Button bsStyle="danger">Danger</Button>

        {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
        <Button bsStyle="link">Link</Button>
      </ButtonToolbar>
    );


    return (
      <div>
        <div>
          <h1>Application Bootstrapped with bootstrap!</h1>
          { buttonsInstance }
        </div>
      </div>
    );
  }
}

export default App


