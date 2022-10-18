import React from "react";
import style from './styles/catApp.module.css';
import CatList from "./CatList";
import CatDetales from "./CatDetales";
import FormforCat from "./FormForCat";
import CatDescription from "./CatDescription";
import axios from "axios";

const url = 'https://serene-mesa-35124.herokuapp.com/files/cats/list.json';
const aCatUrl = 'https://serene-mesa-35124.herokuapp.com/files';

class CatApp extends React.Component {
  state = {
    cats: null,
    selectedCat: null,
    catDescription: null,

  };

  componentDidMount() {
    axios.get(`${url}`)
      .then((response) => {
      const cats = response.data.data;
      console.log(cats);
      this.setState({ cats });
    });
  }

  toBuy = (id) => {
    const selectedCat = this.state.cats.filter(cat => {
      if(cat.id === id) {
        return cat;
      }
      return null;
    });
    console.log(selectedCat);
    this.setState({selectedCat: selectedCat[0]})
  };

  showCatDescription = (id) => {
    const catDescription = this.state.cats.filter((cat) => {
      if(cat.id === id) {
        return cat;
      }
      return null;
    });

    axios.get(`${aCatUrl + catDescription[0].more}`)
    .then((response) => {
      const cat = response.data;
      console.log(cat);
      this.setState({ catDescription: cat});
    });
  }; 

render() {
  const { cats, selectedCat, catDescription } = this.state;

  if(!cats) {
    return <div>Заргрузка...</div>
  }

  return(
    <div className={style.app}>
      <div className={style.mainBlock}>
    <CatList 
      cats = {cats} 
      toBuy = {this.toBuy}
      showCatDescription = {this.showCatDescription}
      />
      {catDescription && (
        < CatDescription CatDescription = {catDescription}/>
      )}
      </div>
      <br />
      {/*Условный рендеринг*/}
      {selectedCat && 
        <CatDetales catDetales = {selectedCat}/>
      }
      <br/>
      <FormforCat />
    </div>
    
  )
}
}

export default CatApp;

