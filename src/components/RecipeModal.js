import React from 'react';

function getIngredients(meal) {
  const list = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ing && ing.trim()) {
      list.push(`${measure ? measure.trim() : ''} ${ing.trim()}`.trim());
    }
  }
  return list;
}

export default function RecipeModal({ meal, onClose }) {
  if (!meal) return null;
  const ingredients = getIngredients(meal);

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', padding: 20
    }}>
      <div style={{ background: '#fff', padding: 20, borderRadius: 8, maxWidth: 800, width: '100%', maxHeight: '90vh', overflow: 'auto' }}>
        <button onClick={onClose} style={{ float: 'right' }}>Close</button>
        <h2>{meal.strMeal}</h2>
        <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100%', maxHeight: 300, objectFit: 'cover', borderRadius: 6 }} />
        <p><strong>Category:</strong> {meal.strCategory} &nbsp; <strong>Area:</strong> {meal.strArea}</p>
        <h4>Ingredients</h4>
        <ul>{ingredients.map((it, idx) => <li key={idx}>{it}</li>)}</ul>
        <h4>Instructions</h4>
        <p style={{ whiteSpace: 'pre-line' }}>{meal.strInstructions}</p>
        {meal.strYoutube && (
          <p><a href={meal.strYoutube} target="_blank" rel="noreferrer">Watch on YouTube</a></p>
        )}
      </div>
    </div>
  );
}
