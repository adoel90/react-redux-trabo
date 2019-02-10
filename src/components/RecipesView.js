import React from 'react';

const RecipesView = props => {

    const { handleClickRecipe, recipes, handleInputChange} = props;

    return (
        <div>
            <ul> 
                {recipes.map((data, i) => {
                    return <li key={i}> {data.name}</li>
                })}
            </ul>   
            <input type="text" name="recipe" placeholder="Add recipe" onChange={(e) => handleInputChange(e, 'data')}/>
            <button onClick={() => handleClickRecipe() }>Add</button>  
            <hr />
        </div>
    )
}

export default RecipesView;