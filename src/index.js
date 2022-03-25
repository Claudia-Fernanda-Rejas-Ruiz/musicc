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
    content_modal.style.display = 'none'

})

function btnResponsive(nav_items) {
  nav_items.classList.toggle('ocultar')
}
/* 
  Add HTML to DOM 
*/
function addImage(div, data) {
  div.innerHTML = createImageOfNoticias(data)
}
function addCardsToDOM(div, data) {
  div.innerHTML = createCardsHorizontal(data)
}
function addListItemsToDOM(div, data) {
  div.innerHTML = createListItems(data)
}

/* 
  Create HTML 
*/
function createImageOfNoticias(data) {
  console.log(data)
  return `
      <img src="${data.image}" alt="${data.title}">
      <div>
          <h3>${data.title}</h3>
          <a href="${data.url}" target="_blank">
              <img src="./icons/play-circle.svg" alt="icon play">
          </a>
      </div>
  `
}
function createCardsHorizontal(info) {
  let htmlCards = ''
  info.forEach(data => {
      htmlCards += createCard(data)
  })
  return htmlCards
}
function createCard(data) {
  return `
  <div class="card">
      <a href="${data.url}" target="_blank" >
          <div class="imagen">
              <img src="${data.image}" alt="${data.title}">
          </div>
          <div class="texto">
              <h4>${data.title}</h4>
              <p>${data.subtitle}</p>
          </div>
      </a>
  </div>
  `
}
function createListItems(info) {
  let listHtml = ''
  info.forEach(data => {
      listHtml += createItem(data)
  })
  return listHtml
}
function createItem(data) {
  return `
  <div class="card">
      <div class="imagen">
          <img src="${data.image}" alt="${data.title}">
      </div>
      <div class="texto">
          <h4>${data.title}</h4>
          <p>${data.subtitle}</p>
      </div>
      <div class="boton">
          <a href="${data.url}" target="_blank">
              <img src="./icons/more-horizontal.svg" alt="link">    
          </a>
      </div>
      
  </div>
  `
}