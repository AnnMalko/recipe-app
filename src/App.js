import video from "./food_video.mp4";
import icon from "./images/search-icon.png";
import { useEffect, useState } from "react";
import "./App.css";
import MyRecepisComponents from "./MeRecipesComponent";

function App() {
  const MY_ID = "e99e89e5";
  const MY_KEY = "7d250b997fb58ee1a9d23ab76bbb3248";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("");

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`
      );
      const data = await response.json();

      console.log(data.hits);
      setMyRecipes(data.hits);
    };
    getRecipe();
  }, [wordSubmitted]);

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  };

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  };

  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div>
      <div className="container">
        <div className="container">
          <form className="form" onSubmit={finalSearch}>
            <img className="icon" src={icon} alt="icon" />
            <input
              className="search"
              placeholder="Search..."
              onChange={myRecipeSearch}
              value={mySearch}
            ></input>
          </form>
        </div>
      </div>

      {myRecipes.map((element, index) => (
        <MyRecepisComponents
          key={index}
          label={element.recipe.label}
          image={element.recipe.image}
          cuisine={element.recipe.cuisineType}
          calories={element.recipe.calories}
          ingredients={element.recipe.ingredientLines}
          diet={element.recipe.dietLabels}
        />
      ))}
    </div>
  );
}

export default App;
