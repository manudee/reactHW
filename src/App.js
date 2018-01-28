import React, { Component } from 'react';
import Jumbotron from './Components/Jumbotron/Jumbotron.js';
import Container from './Components/Container/Container.js';
import {Input} from './Components/Form/Input.js';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <Container title="Search" body="body">
          <form>
           <Input name="topic" placeholder="Topic" />
           <Input name="startYear" placeholder="StartYear" />
           <Input name="endYear" placeholder="EndYear" />
          </form>
        </Container>
        <Container title="Results" body="body" />
        <Container title="Saved Articles" body="body" />
      </div>
    );
  }
}

export default App;
