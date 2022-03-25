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
