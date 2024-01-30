import React, {useState, useEffect} from 'react';
import './style.css';
import CardPokemonDetail from './CardPokemonDetail';

/* 
  1 - Récupérer tous les pokémons sur https://pokeapi.co/api/v2/pokemon/ et les afficher sur les cartes noires
  2 - Au clic sur une des cartes noires on souhaite afficher une nouvelle carte grise, avec le nom du pokémon (name), le poids (weight) et la taille (height) https://pokeapi.co/api/v2/pokemon/{name ou id}
  3 - Créer un champ de recherche pour chercher un pokémon et l'afficher dans la carte grise
  4 - Propositions de refacto
*/

export default function App() {
  const [pokemons, setPokemons] = React.useState([
    { name: 'Pikachu' },
    { name: 'Salameche' },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();
      console.log(data.results);
      setPokemons(data.results);
    };
    fetchData();
  },[]);

  return (
    <div>
      <h1>Liste de pokémons</h1>
      <div style={{ textAlign: 'center' }}>
        Emplacement de la carte de détail d'un pokémon ce sera le composant
        CardPokemonDetail
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {pokemons.map((pokemon) => (
          <div
            id="carte-pokemon"
            style={{
              background: '#222222',
              color: 'white',
              padding: '10px',
              margin: '15px',
              width: '100px',
              cursor: 'pointer',
            }}
          >
            <h3>{pokemon.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
