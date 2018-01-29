import React, { Component } from 'react';
import Jumbotron from './Components/Jumbotron/Jumbotron.js';
import Container from './Components/Container/Container.js';
import { Input } from './Components/Form/Input.js';
import { SubmitBtn } from './Components/Form/SubmitBtn.js';
import { Title } from './Components/Title/Title.js';
import { List } from './Components/List/List.js';
import { ListItem } from './Components/List/ListItem.js';
import { SaveBtn } from './Components/Buttons/SaveBtn.js';
import { RemoveBtn } from './Components/Buttons/RemoveBtn.js';


class App extends Component {


  state = {
    results: ['result1', 'result2', 'result3'],
    savedArticles: ['SavedArticle1', 'SavedArticle2', 'SavedArticle3'],
    topic: "",
    startYear: "",
    endYear: ""

  }

  handleInputChange = (event) => {

    const { name, value } = event.target;

    this.setState({

      [name]: value
    })
  };


  handleFormSubmit = event =>{

      event.preventDefault();

     if(this.state.topic){
        //make a call to API with above inputs fields of topic, startyear and endyear

        var topic = this.state.topic;
        var startYear = this.state.startYear;
        var endYear = this.state.endYear;
        console.log(this.state.topic);
        console.log(this.state.startYear);
        console.log(this.state.endYear);

    
      }


  }


  render() {
    return (
      <div>
        <Jumbotron />
        <Container title="Search" body="body">
          <form>
            <Title name='topic'> Topic </Title>
            <Input 
            name="topic"
            value={this.state.topic}
            onChange={this.handleInputChange} />
            <Title name='startYear'> StartYear </Title>
            <Input 
            name="startYear"
            value={this.state.startyear}
            onChange={this.handleInputChange}
             />
            <Title name='endYear'> EndYear </Title>
            <Input 
            name="endYear"
            value={this.state.endYear}
            onChange={this.handleInputChange} />
          </form>
          <SubmitBtn
          onClick={() => this.handleFormSubmit()}>Search</SubmitBtn>
        </Container>
        <Container title="Results" body="body">
          {this.state.results.length ? (
            <List>
              {this.state.results.map(resultRow => (
                <ListItem>
                  {resultRow}
                  <SaveBtn value="Save" />
                </ListItem>))}
            </List>
          ) : (<h3> No Results to display </h3>)}
        </Container>
        <Container title="Saved Articles" body="body" />
        {this.state.savedArticles.length ? (
          <List>
            {this.state.savedArticles.map(savedArticlesRow => (
              <ListItem>
                {savedArticlesRow}
                <RemoveBtn value="Remove" />
              </ListItem>))}
          </List>
        ) : (<h3> No Results to display </h3>)}
      </div>
    );
  }
}

export default App;
