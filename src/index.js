import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

window.addEventListener('DOMContentLoaded', async () => {

  /* 
      Elements 
  */
  const content_modal = document.querySelector('.content_modal')
  const btn_responsive = document.querySelector('.btn_responsive')
  const nav_items = document.querySelector('.navItems')
  const div_image_popLatino = document.getElementById('image_popLatino')
  const div_image_artista = document.getElementById('image_artista')

  // Button nav responsive
  btn_responsive.addEventListener('click', () => btnResponsive(nav_items))

  /* 
      Data
  */
    const data = await getData()
    addImage(div_image_popLatino, data.topLatinos[0])
    /* Top Artista */
    addImage(div_image_artista, data.topArtistas[0])
    /* Año nuevo */
    addCardsToDOM(document.querySelector('.content_anioNuevo .content_cards'), data.newYear)
    /* Musica nueva */
    addCardsToDOM(document.querySelector('.content_musicaNueva .content_cards'), data.newMusic)
    /* Lista de canciones destacadas */
    addListItemsToDOM(document.querySelector('.content_cancionesNuevasDestacadas .listaDeCanciones'), data.listTop)
