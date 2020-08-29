import React from 'react';
import './styles.css';

export default ({item}) => {
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

    let descr = item.overview;
    if(descr.length > 200){
        descr = descr.substring(0, 200)  + '...';
     }


    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featuredVertical">
                <div className="featuredHorizontal">
                    <div className="featuredName">{item.original_name}</div>
                    <div className="featuredInfo">
                        <div className="featuredSeasons">
                        {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                        <div className="featuredDescription">{descr}</div>
                        <div className="featuredButtons">
                            <a href={`/watch/${item.id}`} className="featuredWatchbutton">► Ver</a>
                            <a href={`/list/add/${item.id}`} className="featuredMoreInfo">i Mais informações</a>
                        </div>
                        <div className="featuredGenres">Gêneros: <strong> {genres.join(', ')} </strong></div>

                </div>
            </div>
       
        </section>
    )
}
