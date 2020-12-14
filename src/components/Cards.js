import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Hasil Pengerjaan</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/gambar1.jpg'
              text='Renovasi dan perbaikan'
              label='Renovasi dan Perbaikan'
              path='/services'
            />
            <CardItem
              src='images/gambar2.jpg'
              text='Renovasi dan perbaikan'
              label='Renovasi dan Perbaikan'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/gambar3.jpg'
              text='Desain interior Matahari Department Store'
              label='Desain interior'
              path='/services'
            />
            <CardItem
              src='images/gambar4.jpg'
              text='Desain interior Matahari Department Store'
              label='Desain interior'
              path='/services'
            />
            <CardItem
              src='images/gambar5.jpg'
              text='Desain interior Matahari Department Store'
              label='Desain interior'
              path='/services'
            />
            <CardItem
              src='images/gambar6.jpg'
              text='Desain interior Matahari Department Store'
              label='Desain interior'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
