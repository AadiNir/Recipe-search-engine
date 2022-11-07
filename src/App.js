import './App.css';
import Axios from "axios";
import {useState} from "react";
import RecipeTile from './RecipeTile';

function App() {
  
  const [query, Setquery]=useState("")
  const YOUR_APP_ID="6532aab2";
  const YOUR_APP_KEY="2292148dd77659367aeb5fac9dffe3a4	";
  var url=`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;
  //this is how we define a url to fetch a api, this would be mostly present in documentation 
  const [recipes,setrecipes] = useState([]);
  async function getRecipes(){
    var result= await Axios.get(url);
    //async and await is used because this particular api has many data so to fetch all this data it will take a bit time so for tha we use async and await concept
    setrecipes(result.data.hits)
    console.log(result.data)
  }
  const onSubmit = (e) =>{
    e.preventDefault();
    getRecipes();
  }
  return (
    
    <div className="app">
      

      <h1>Recipe Search Engine</h1>
      <form className="app__searchform"  onSubmit={onSubmit}>
      <div class="search-container">
          <input 
          type="text" 
          className="search-input"
          placeholder="enter ingridents"
          value={query} 
          onChange={(e) => Setquery(e.target.value)}
        />
        <a href="#" class="search-btn">
                <i class="fas fa-search"></i>      
        </a>
      </div>
    
      
        {/*so in this input value we at first set a default value as query and if suppose there is any change in the input value it will store the change "e" and fetch that value */}
        <input className="app__submit" type="submit" value="Search"/>
      </form>
      <div className='mainrecipe'>
        {recipes.map((recipe)=>{
          return <RecipeTile recipe={recipe}/>;
        })}
      </div>
    </div>
  );
}

export default App;
