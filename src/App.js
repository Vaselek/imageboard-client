import React, {Component, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Container} from 'reactstrap';


import Messages from './containers/Messages/Messages';
import NewMessage from './containers/NewMessage/NewMessage';

class App extends Component {
  render() {
    return (
      <Fragment>
        <main>
            <Container style={{marginTop: '20px'}}>
                <Switch>
                    <Route path='/' exact component={Messages} />
                    <Route path='/messages/new' exact component={NewMessage}/>
                </Switch>
            </Container>
        </main>
      </Fragment>
    );
  }
}

export default App;
