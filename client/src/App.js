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
import API from './utils/API.js';

class App extends Component {


  state = {
    results: [],
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


  handleFormSubmit = event => {

    event.preventDefault();

    var topic = this.state.topic;
    var startYear = this.state.startYear;
    var endYear = this.state.endYear;

    var queryTerm = { topic, startYear, endYear };

    API.getArticles(queryTerm)
      .then(res => {
        console.log(res.data);
        this.setState({
          results: res.data.response.docs,
          topic: "",
          startYear: "",
          endYear: ""
        })
      })
      .catch(err => console.log(err));
  }


  handleSave = (id, snippet, web_url, pub_date) => {

    var savedArticle = {};

    
    savedArticle.snippet = snippet;
    savedArticle.web_url = web_url;
    savedArticle.pub_date = pub_date;
    
    //API.saveArticles(savedArticle);



    console.log(savedArticle);




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
              value={this.state.startYear}
              onChange={this.handleInputChange}
            />
            <Title name='endYear'> EndYear </Title>
            <Input
              name="endYear"
              value={this.state.endYear}
              onChange={this.handleInputChange} />
          </form>
          {/* <button type="submit" onClick={this.handleFormSubmit}>Submit</button> */}
          <SubmitBtn type="submit"
            onClick={this.handleFormSubmit}>Search</SubmitBtn>
        </Container>
        <Container title="Results" body="body">
          {this.state.results.length ? (
            <List>
              {this.state.results.map(resultRow => (
                <ListItem key={resultRow._id}>
                  {resultRow.snippet}<br />
                  {resultRow.web_url}<br />
                  {resultRow.pub_date}<br />
                  <SaveBtn onClick={() => this.handleSave(resultRow._id, resultRow.snippet, resultRow.web, resultRow.pub_date)} value="Save" />
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
