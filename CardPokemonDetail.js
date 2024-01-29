import React from 'react';

export default function CardPokemonDetail(props) {
  return (
    <div
      style={{
        background: 'grey',
        color: 'white',
        padding: '10px',
        margin: '15px',
        width: '100px',
      }}
    >
      <h2>{props.name}</h2>
      <p>
        <strong>Taille:</strong> {props.height}
        <br />
        <strong>Poids:</strong> {props.weight}
        <br />
      </p>
    </div>
  );
}

