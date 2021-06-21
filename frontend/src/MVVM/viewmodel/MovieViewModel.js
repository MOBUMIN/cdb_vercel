// import React, { useState, useEffect, useContext, createContext } from 'react';
// import axios from 'axios';

// import { API_URL } from '../../CommonVariable';

// import { useMovieState, useMovieDispatch } from '../model/MovieModel';

// const GetMovies = createContext(()=>{});

// const MovieViewModel = ({id, children}) => {
// 	const movie = useMovieState();
// 	const setMovie = useMovieDispatch();

// 	return (
// 		{children}
// 	)
// }

// export default MovieViewModel

// export function useGetMovies() {
// 	const context = useContext(GetMovies);
// 	return context;
// }