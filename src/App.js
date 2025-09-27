import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeModal from './components/RecipeModal';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selected, setSelected] = useState(null);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  async function searchRecipes(q) {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(q)}`);
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (err) {
      console.error(err);
      setRecipes([]);
    }
  }

  function toggleFavorite(meal) {
    const exists = favorites.find(f => f.idMeal === meal.idMeal);
    if (exists) {
      setFavorites(favorites.filter(f => f.idMeal !== meal.idMeal));
    } else {
      setFavorites([meal, ...favorites]);
    }
  }

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Recipe Finder 🍳</h1>
      <SearchBar onSearch={searchRecipes} />
      <div style={{ marginBottom: 12 }}>
        <strong>Favorites:</strong> {favorites.length} &nbsp;
        {favorites.length > 0 && (
          <button onClick={() => setRecipes(favorites)}>Show favorites</button>
        )}
      </div>
      <RecipeList recipes={recipes} onVie
