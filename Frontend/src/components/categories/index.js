import React, {useState, useEffect } from 'react';

import './style.css';

import api from '../../services/api';

export default function Categories({ catg }){
    const [games, setGames] = useState([]);     
    

    useEffect (() => {
        async function loadCategories(){
            const response = await api.get('/gamesCtg', {
                params:  { catg } 
            })          
            setGames(response.data);                         
        }

        loadCategories();         
    }, [catg]);  

    return (
        <div className="categories">
            <h3 className="categoryTitle"> {catg} </h3>
            <ul>
                {games.map(game => (

                    <li key={game._id} >
                        <div className="gameContainer">
                            <img src={game.thumbnail_url} alt="" />

                        </div>

                    </li>
                ))}
            </ul>

        </div>
   
    ); 
}

/*
<div className="categories">
    <h3 class="categoryTitle"> {catg} </h3>
    <ul>
        {games.map(game => (

            <li key={game._id} >
                <div className="gameContainer">
                    <img src={game.thumbnail_url} alt="" />

                </div>

            </li>
        ))}
    </ul>

</div>

*/