import React from 'react';

export default function RecipeCard({ meal, onView, onToggleFavorite, isFavorite }) {
  return (
    <div style={{
      border: '1px solid #ddd', borderRadius: 8, padding: 8, width: 240, boxSizing: 'border-box'
    }}>
      <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100%', borderRadius: 6 }} />
      <h4 style={{ margin: '8px 0' }}>{meal.strMeal}</h4>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => onView(meal)}>View</button>
        <button onClick={() => onToggleFavorite(meal)}>{isFavorite ? 'Unfav' : 'Favorite'}</button>
      </div>
    </div>
  );
}
