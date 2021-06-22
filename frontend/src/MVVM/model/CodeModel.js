import React, { useState, useContext, createContext } from 'react';

const movieRatingState = createContext([]);
const movieRatingDispatch = createContext(()=>{});

function CodeModel({ children }) {
	const [movieRatingData, setMovieRatingData] = useState([
		{COMMON_CODE: 10001, CODE_NAME: "전체 이용가"},
		{COMMON_CODE: 10002, CODE_NAME: "12세 이상 관람가"},
		{COMMON_CODE: 10003, CODE_NAME: "15세 이상 관람가"},
		{COMMON_CODE: 10004, CODE_NAME: "청소년 관람불가"}
	])

	return (
		<movieRatingState.Provider value={movieRatingData}>
			<movieRatingDispatch.Provider value={setMovieRatingData}>
				{children}
			</movieRatingDispatch.Provider>
		</movieRatingState.Provider>
	)
}

export default CodeModel;

export function useMovieRatingState() {
	const context = useContext(movieRatingState);
	return context;
}
export function useMovieRatingDispatch() {
	const context = useContext(movieRatingDispatch);
	return context;
}