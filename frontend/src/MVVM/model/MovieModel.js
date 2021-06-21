import React, { useState, useContext, createContext } from 'react';

const movieState = createContext([]);
const movieDispatch = createContext(()=>{});

function MovieModel({ children }) {
	const initialState = [
		{
			AVG_STARS: 4.75,
			MOVIE_NAME: "크루엘라",
			MOVIE_NUM: 1,
			MOVIE_RATING_CODE: 10002,
			POSTER: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202105/17387_103_1.jpg",
			RELEASE_DATE: "2021-05-26",
			SCRN_STATUS: "Y",
			VIDEO: "https://www.youtube.com/embed/yfSMTFzw-Kw"
		},
		{
			AVG_STARS: 5,
			MOVIE_NAME: "노매드랜드",
			MOVIE_NUM: 2,
			MOVIE_RATING_CODE: 10002,
			POSTER: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202104/17185_103_1.jpg",
			RELEASE_DATE: "2021-04-15",
			SCRN_STATUS: "Y",
			VIDEO: "https://www.youtube.com/embed/tfmRVC_GADw"
		},
		{
			AVG_STARS: null,
			MOVIE_NAME: "콰이어트 플레이스2",
			MOVIE_NUM: 3,
			MOVIE_RATING_CODE: 10004,
			POSTER: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202003/15474_103_1.jpg",
			RELEASE_DATE: "2021-06-16",
			SCRN_STATUS: "Y",
			VIDEO: "https://www.youtube.com/embed/rf7SFaFSf5c"
		},
		{
			AVG_STARS: null,
			MOVIE_NAME: "ㅇㄹ",
			MOVIE_NUM: 6,
			MOVIE_RATING_CODE: 10003,
			POSTER: "ㅇㄹ",
			RELEASE_DATE: "2021-06-14",
			SCRN_STATUS: "Y",
			VIDEO: "ㅇㄹ"
		}
	]
	const [movieData, setMovieData] = useState([])
	// back에서 받아올때 예매율 순으로 받아오기
	return (
		<movieState.Provider value={movieData}>
			<movieDispatch.Provider value={setMovieData}>
				{children}
			</movieDispatch.Provider>
		</movieState.Provider>
	)
}

export default MovieModel;

export function useMovieState() {
	const context = useContext(movieState);
	return context;
}
export function useMovieDispatch() {
	const context = useContext(movieDispatch);
	return context;
}