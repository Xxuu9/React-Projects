import React,{useState, createContext} from 'react';


export const MovieContext = createContext();


export const MovieProvider = props => {
     // eslint-disable-next-line
     const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23124
        },
        {
            name: 'Friends',
            price: '$10',
            id: 2596324
        },
        {
            name: 'The Big Bang Theory',
            price: '$10',
            id: 2313324
        }
    ]);
    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}


