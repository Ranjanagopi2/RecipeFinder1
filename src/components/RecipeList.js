import React from 'react';
import RecipeCard from './RecipeCard';

export default function RecipeList({ recipes, onView, onToggleFavorite, favorites }) {
  if (!recipes || recipes.length === 0) {
    return <div>No recipes found. Try another search.</div>;
  }
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      {recipes.map((meal) => (
        <RecipeCard
          key={meal.idMeal}
          meal={meal}
          onView={onView}
          onToggleFavorite={onToggleFavorite}
          isFavorite={favorites.some(f => f.idMeal === meal.idMeal)}
        />
      ))}
    </div>
  );
}
