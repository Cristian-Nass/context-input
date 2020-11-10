import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '100 :-',
            id: 2154
        },
        {
            name: 'Avatar',
            price: '120 :-',
            id: 2004
        },
        {
            name: 'Game Of Throne',
            price: '250 :-',
            id: 2050
        }
    ]);
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
} 