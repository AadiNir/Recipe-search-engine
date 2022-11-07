import React from 'react';
function RecipeTile({recipe}) {
  const menuoption =()=>{
  

    console.log(recipe)
  }
  return (
    
    <div className="recipeTile">
        
        <h2 className="recipe_name">{recipe["recipe"]["label"]}</h2>
        <img className="recipe_image" src={recipe["recipe"]["image"]}/>
        <a href={recipe["recipe"]["url"]}>
        <button class="btn1">
          Want to know more about this dish

        </button>
  
        </a>
        <br></br>
        
        


    </div>
  )
}

export default RecipeTile;