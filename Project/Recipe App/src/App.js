/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import Recipe from "./recipes";
import './App.css';

const App = () => {

  const APP_ID = "ccd23d03";
  const APP_KEY = "23ccb2e102fed50adb1b79ccfa363b54";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  // const [counter, setCounter] = useState(0);

  // it will run everytime the counter changes
  // useEffect(() => {
  //   console.log('Effect has been run')
  // },[counter]);

  // run only once when the application mounts
  // useEffect(() => {
  //   getRecipes();
  // },[]);

  useEffect(() => {
    getRecipes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories}
        image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  )
}


export default App;
