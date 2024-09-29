import Navbar from "./Component/Components JS/navbar";
import News from "./Component/Components JS/news";
import Footer from "./Component/Components JS/footer";
import About from "./Component/Components JS/About";
import Contact from "./Component/Components JS/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { Component, useState } from "react";

class App extends Component{
  state = {
    progress:0
  };

  setProgress=(prog)=>{
    this.setState({progress:prog});
  }

  render(){
  const apikey = process.env.REACT_APP_api_key;
  
  return (
    <>
      <BrowserRouter>
      
        <Navbar />
        <LoadingBar
        height={5}
        color='#ffffff'
        progress={this.state.progress}
      />
        <Routes>
          <Route
            
            path="/"
            key="Top"
            element={
              <News
              setProgress={this.setProgress}
                category_type="top%20live-breaking%20news%20from%20all%20over%20the%20world"
                api_key={apikey}
              />
            }
          />
          <Route
            
            path="/business"
            key="Bussiness"
            element={
              <News setProgress={this.setProgress} category="Bussiness Headlines" category_type="business" api_key={apikey} />
            }
          />
          <Route
            
            path="/entertainment"
            key="Entertainment"
            element={
              <News
              setProgress={this.setProgress}
                category="Entertainment Headlines"
                category_type="entertainment"
              api_key={apikey} />
            }
          />
          <Route
            path="/general"
            key="General"
            element={
              <News setProgress={this.setProgress} category="General Headlines" category_type="general" api_key={apikey} />
            }
          />
          <Route
            path="/health"
            key="Health"
            element={
              <News setProgress={this.setProgress} category="Health Headlines" category_type="health" api_key={apikey} />
            }
          />
          <Route
            path="/science"
            key="Science"
            element={
              <News setProgress={this.setProgress} category="Science Headlines" category_type="science" api_key={apikey} />
            }
          />
          <Route
            path="/sports"
            key="Sports"
            element={
              <News setProgress={this.setProgress} category="Sports Headlines" category_type="sports" api_key={apikey} />
            }
          />
          <Route
            path="/technology"
            key="Technology"
            element={
              <News
              setProgress={this.setProgress}
                category="Technology Headlines"
                category_type="technologies"
              api_key={apikey} />
            }
          />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}}

export default App;
