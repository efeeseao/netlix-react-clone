import React, {useState} from 'react';
import './styles.css';
import { NavigateBefore } from 'styled-icons/material';
import { NavigateNext } from 'styled-icons/material';

export default ({title, items}) =>{

    const [scrollX, setScrollX]= useState(0);

    const handleLeftArrow = () => {
        let x = scrolNavigateNextIconlX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    }
    const handleRightArrow = () =>{
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if(window.innerWidth - listW > x)
        {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    return (
      <div className='movieRow'>
        <h2>{title}</h2>
        <div className='movieRowLeft' onClick={handleLeftArrow}>
          <NavigateBefore className='navigation' />
        </div>
        <div className='movieRowRight' onClick={handleRightArrow}>
          <NavigateNext className='navigation' />
        </div>

        <div className='movieRowListarea'>
          <div
            className='movieRowList'
            style={{
              marginLeft: scrollX,
              width: items.results.length * 150,
            }}>
            {items.results.length > 0 &&
              items.results.map((item, key) => (
                <div key={key} className='movieRowItem'>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    alt={item.original_title}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
}