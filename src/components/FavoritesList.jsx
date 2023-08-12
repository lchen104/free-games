import React from 'react'

const FavoritesList = ({favorites, handleFavoritesClick, favoriteComponent, handleGameId}) => {

    const FavoriteComponent = favoriteComponent;

    const loaded = () => {
        return (
            <div className='container'>

                {
                    favorites.map((favorite, index) => (
                        
                        <div className='item image-container' key={index}>
                            {/* <a href={favorite.game_url} target='_blank' ><img src={favorite.thumbnail} alt={favorite.title} /></a> */}
                            <img src={favorite.thumbnail} alt={favorite.title} onClick={() => handleGameId(favorite.id)} />
                            <div onClick={() => handleFavoritesClick(favorite)} className='overlay'>
                                <FavoriteComponent />
                            </div>
                        </div>
                            
                    ))
                }

            </div>
        )
    };

    const loading = () => {
        return <h1>No favorites to Display</h1>
    };
    // console.log(favorites)
    return favorites ? loaded() : loading();

}

export default FavoritesList