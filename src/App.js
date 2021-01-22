import React, { Component } from 'react'
import Navigation from './components/Navigation';
import Header from './components/Header';
import Features from './components/Features'
import PhotoSection from './components/PhotoSection'
import Book from './components/Book'
import ExtraFeature from './components/ExtraFeature'
import Footer from './components/Footer'
import JsonData from './data/data.json';



export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <Features data={this.state.landingPageData.features} />
        <PhotoSection/>
        <Book  data={this.state.landingPageData.Book}/>
        <ExtraFeature data={this.state.landingPageData.extraFeatures}  />
        <Footer/>
      </div>
    )
  }
}

export default App;

