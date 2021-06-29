import React, { useState, useContext, createContext } from 'react';

const movieState = createContext([]);
const movieDispatch = createContext(()=>{});

const movieDetailState = createContext([]);
const movieDetailDispatch = createContext(()=>{});

function MovieModel({ children }) {
	const initialState = [
		{
			AVG_STARS: 4.75,
			MOVIE_NAME: "크루엘라",
			MOVIE_NUM: 1,
			MOVIE_RATING_CODE: 10002,
			POSTER: "https://github.com/MOBUMIN/cdb_vercel/blob/main/assets/%ED%81%AC%EB%A3%A8%EC%97%98%EB%9D%BC%20%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg?raw=true",
			RELEASE_DATE: "2021-05-26",
			SCRN_STATUS: "Y",
			VIDEO: "https://www.youtube.com/embed/yfSMTFzw-Kw"
		},
		{
			AVG_STARS: 5,
			MOVIE_NAME: "노매드랜드",
			MOVIE_NUM: 2,
			MOVIE_RATING_CODE: 10002,
			POSTER: "https://github.com/MOBUMIN/cdb_vercel/blob/main/assets/%EB%85%B8%EB%A7%A4%EB%93%9C%20%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg?raw=true",
			RELEASE_DATE: "2021-04-15",
			SCRN_STATUS: "Y",
			VIDEO: "https://www.youtube.com/embed/tfmRVC_GADw"
		},
		{
			AVG_STARS: null,
			MOVIE_NAME: "콰이어트 플레이스2",
			MOVIE_NUM: 3,
			MOVIE_RATING_CODE: 10004,
			POSTER: "https://github.com/MOBUMIN/cdb_vercel/blob/main/assets/%EC%BD%B0%ED%94%8C%20%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg?raw=true",
			RELEASE_DATE: "2021-06-16",
			SCRN_STATUS: "Y",
			VIDEO: "https://www.youtube.com/embed/rf7SFaFSf5c"
		},
		{
			AVG_STARS: null,
			MOVIE_NAME: "분노의질주",
			MOVIE_NUM: 4,
			MOVIE_RATING_CODE: 10003,
			POSTER: "https://github.com/MOBUMIN/cdb_vercel/blob/main/assets/%EB%B6%84%EB%85%B8%EC%9D%98%EC%A7%88%EC%A3%BC%20%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg?raw=true",
			RELEASE_DATE: "2021-06-14",
			SCRN_STATUS: "Y",
			VIDEO: "https://www.youtube.com/embed/L9Y-hn2COm0"
		}
	]
	const detailState= [
		[
			{
				AVG_STARS: 4.75,
				CAST: "엠마스톤, 엠마톰슨",
				COUNTRY: "미국",
				DIRECTOR: "크레이그 질레스피",
				GENRE: "드라마,범죄,코미디",
				MOVIE_INTRO: "처음부터 난 알았어. 내가 특별하단 걸\n그게 불편한 인간들도 있겠지만 모두의 비위를 맞출 수는 없잖아?\n그러다 보니 결국, 학교를 계속 다닐 수가 없었지\n\n우여곡절 런던에 오게 된 나, 에스텔라는\n재스퍼와 호레이스를 운명처럼 만났고\n나의 뛰어난 패션 감각을 이용해\n완벽한 변장과 빠른 손놀림으로 런던 거리를 싹쓸이 했어",
				MOVIE_NAME: "크루엘라",
				MOVIE_NUM: 1,
				MOVIE_RATING_CODE: 10002,
				RELEASE_DATE: "2021-05-25",
				SCRN_STATUS: "Y",
				SCRN_TIME: 133
			},
			[
				{
					TRAILER_SHOT_NUM: 1,
					TRAILER_SHOT_ROUTE: "https://github.com/MOBUMIN/cdb_vercel/blob/main/assets/%ED%81%AC%EB%A3%A8%EC%97%98%EB%9D%BC%20%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg?raw=true"
				},
				{
					TRAILER_SHOT_NUM: 2,
					TRAILER_SHOT_ROUTE: "https://github.com/MOBUMIN/cdb_vercel/blob/main/assets/%ED%81%AC%EB%A3%A8%EC%97%98%EB%9D%BC%EC%82%AC%EC%A7%841.jpg?raw=true"
				},
				{
					TRAILER_SHOT_NUM: 3,
					TRAILER_SHOT_ROUTE: "https://github.com/MOBUMIN/cdb_vercel/blob/main/assets/%ED%81%AC%EB%A3%A8%EC%97%98%EB%9D%BC%EC%82%AC%EC%A7%842.jpg?raw=true"
				},
				{
					TRAILER_SHOT_NUM: 4,
					TRAILER_SHOT_ROUTE: "https://github.com/MOBUMIN/cdb_vercel/blob/main/assets/%ED%81%AC%EB%A3%A8%EC%97%98%EB%9D%BC%EC%82%AC%EC%A7%843.jpg?raw=true"
				},
				{
					TRAILER_SHOT_NUM: 5,
					TRAILER_SHOT_ROUTE: "https://github.com/MOBUMIN/cdb_vercel/blob/main/assets/%ED%81%AC%EB%A3%A8%EC%97%98%EB%9D%BC%EC%82%AC%EC%A7%844.jpg?raw=true"
				}
			],
			[
				{
					TRAILER_VIDEO_NUM: 1,
					TRAILER_VIDEO_ROUTE: "https://www.youtube.com/embed/yfSMTFzw-Kw"
				},
				{
					TRAILER_VIDEO_NUM: 2,
					TRAILER_VIDEO_ROUTE: "https://www.youtube.com/embed/LARtwiKmRmk"
				}
			],
			[
				{
					COMMENTS: "와 !! 재밌따!",
					MEM_NUM: 1,
					REVIEW_NUM: 1,
					STARS: 4,
				},
				{
					COMMENTS: "최고에요!",
					MEM_NUM: 2,
					REVIEW_NUM: 2,
					STARS: 5,
				}
			]
		],
		[
			{
				AVG_STARS: 5,
				CAST: "프란시스 맥도맨드",
				COUNTRY: "미국",
				DIRECTOR: "클로이 자오",
				GENRE: "드라마",
				MOVIE_INTRO: "전 세계가 동행한 가슴 벅찬 여정, 길이 계속되는 한 우리의 삶도 계속된다.\n모든 것이 무너진 후에야 비로소 열리는 새로운 길 그리고 희망\n\n경제적 붕괴로 도시 전체가 무너진 후\n홀로 남겨진 ‘펀’.(프란시스 맥도맨드)\n추억이 깃든 도시를 떠나 작은 밴과 함께\n한 번도 가보지 않은 낯선 길 위의 세상으로 떠난다.",
				MOVIE_NAME: "노매드랜드",
				MOVIE_NUM: 2,
				MOVIE_RATING_CODE: 10002,
				RELEASE_DATE: "2021-04-14",
				SCRN_STATUS: "Y",
				SCRN_TIME: 108
			},
			[
				{
					TRAILER_SHOT_NUM: 6,
					TRAILER_SHOT_ROUTE: "https://github.com/MOBUMIN/cdb_vercel/blob/main/assets/%EB%85%B8%EB%A7%A4%EB%93%9C%20%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg?raw=true"
				},
				{
					TRAILER_SHOT_NUM: 7,
					TRAILER_SHOT_ROUTE: "https://github.com/MOBUMIN/cdb_vercel/blob/main/assets/%EB%85%B8%EB%A7%A4%EB%93%9C%20%EC%82%AC%EC%A7%841.jpg?raw=true"
				},
				{
					TRAILER_SHOT_NUM: 8,
					TRAILER_SHOT_ROUTE: "https://github.com/MOBUMIN/cdb_vercel/blob/main/assets/%EB%85%B8%EB%A7%A4%EB%93%9C%20%EC%82%AC%EC%A7%842.jpg?raw=true"
				},
				{
					TRAILER_SHOT_NUM: 9,
					TRAILER_SHOT_ROUTE: "https://github.com/MOBUMIN/cdb_vercel/blob/main/assets/%EB%85%B8%EB%A7%A4%EB%93%9C%20%EC%82%AC%EC%A7%843.jpg?raw=true"
				}
			],
			[
				{
					TRAILER_VIDEO_NUM: 3, TRAILER_VIDEO_ROUTE: "https://www.youtube.com/embed/tfmRVC_GADw"
				},
				{
					TRAILER_VIDEO_NUM: 4, TRAILER_VIDEO_ROUTE: "https://www.youtube.com/embed/gZrl7pSJfM8"
				},
				{
					TRAILER_VIDEO_NUM: 5, TRAILER_VIDEO_ROUTE: "https://www.youtube.com/embed/DONmlizxbEU"
				}
			],
			[
				{
					COMMENTS: "와 !! 재밌따!",
					MEM_NUM: 1,
					REVIEW_NUM: 3,
					STARS: 4,
				},
				{
					COMMENTS: "최고에요!",
					MEM_NUM: 2,
					REVIEW_NUM: 4,
					STARS: 5,
				}
			]
		],
		[
			{	
				AVG_STARS: null,
				CAST: "에밀리 블런트, 킬리언 머피",
				COUNTRY: "미국",
				DIRECTOR: "존 크래신스키",
				GENRE: "스릴러",
				MOVIE_INTRO: "소리 없이 맞서 싸워라!\n \n실체를 알 수 없는 괴생명체의 공격으로 일상의 모든 것이 사라진 세상,\n아이들 대신 죽음을 선택한 아빠의 희생 이후 살아남은 가족들은 위험에 노출된다.",
				MOVIE_NAME: "콰이어트 플레이스2",
				MOVIE_NUM: 3,
				MOVIE_RATING_CODE: 10004,
				RELEASE_DATE: "2021-06-15",
				SCRN_STATUS: "Y",
				SCRN_TIME: 97
			},
			[
				{
					TRAILER_SHOT_NUM: 10,
					TRAILER_SHOT_ROUTE: "https://github.com/MOBUMIN/cdb_vercel/blob/main/assets/%EC%BD%B0%ED%94%8C%20%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg?raw=true"
				},
				{
					TRAILER_SHOT_NUM: 11,
					TRAILER_SHOT_ROUTE: "https://github.com/MOBUMIN/cdb_vercel/blob/main/assets/%EC%BD%B0%ED%94%8C%EC%82%AC%EC%A7%841.jpg?raw=true"
				},
				{
					TRAILER_SHOT_NUM: 12,
					TRAILER_SHOT_ROUTE: "https://github.com/MOBUMIN/cdb_vercel/blob/main/assets/%EC%BD%B0%ED%94%8C%EC%82%AC%EC%A7%842.jpg?raw=true"
				},
				{
					TRAILER_SHOT_NUM: 13,
					TRAILER_SHOT_ROUTE: "https://github.com/MOBUMIN/cdb_vercel/blob/main/assets/%EC%BD%B0%ED%94%8C%EC%82%AC%EC%A7%843.jpg?raw=true"
				},
				{
					TRAILER_SHOT_NUM: 14,
					TRAILER_SHOT_ROUTE: "https://github.com/MOBUMIN/cdb_vercel/blob/main/assets/%EC%BD%B0%ED%94%8C%EC%82%AC%EC%A7%844.jpg?raw=true"
				}
			],
			[
				{TRAILER_VIDEO_NUM: 6, TRAILER_VIDEO_ROUTE: "https://www.youtube.com/embed/rf7SFaFSf5c"},
				{TRAILER_VIDEO_NUM: 7, TRAILER_VIDEO_ROUTE: "https://www.youtube.com/embed/hKNlZcpOmAI"}
			],
			[
				{
					COMMENTS: "와 !! 재밌따!",
					MEM_NUM: 1,
					REVIEW_NUM: 5,
					STARS: 4,
				},
				{
					COMMENTS: "최고에요!",
					MEM_NUM: 2,
					REVIEW_NUM: 6,
					STARS: 5,
				}
			]
		],
		[
			{	
				AVG_STARS: null,
				CAST: "드웨인존슨",
				COUNTRY: "미국",
				DIRECTOR: "존 크래신스키",
				GENRE: "액션",
				MOVIE_INTRO: "소리 없이 맞서 싸워라!\n \n실체를 알 수 없는 괴생명체의 공격으로 일상의 모든 것이 사라진 세상,\n아이들 대신 죽음을 선택한 아빠의 희생 이후 살아남은 가족들은 위험에 노출된다.",
				MOVIE_NAME: "분노의질주",
				MOVIE_NUM: 3,
				MOVIE_RATING_CODE: 10004,
				RELEASE_DATE: "2021-06-15",
				SCRN_STATUS: "Y",
				SCRN_TIME: 97
			},
			[
				{
					TRAILER_SHOT_NUM: 15,
					TRAILER_SHOT_ROUTE: "https://github.com/MOBUMIN/cdb_vercel/blob/main/assets/%EB%B6%84%EB%85%B8%EC%9D%98%EC%A7%88%EC%A3%BC%20%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg?raw=true"
				},
				{
					TRAILER_SHOT_NUM: 16,
					TRAILER_SHOT_ROUTE: "https://github.com/MOBUMIN/cdb_vercel/blob/main/assets/%EB%B6%84%EB%85%B8%EC%9D%98%EC%A7%88%EC%A3%BC%20%EC%82%AC%EC%A7%841.jpg?raw=true"
				},
				{
					TRAILER_SHOT_NUM: 17,
					TRAILER_SHOT_ROUTE: "https://github.com/MOBUMIN/cdb_vercel/blob/main/assets/%EB%B6%84%EB%85%B8%EC%9D%98%EC%A7%88%EC%A3%BC%20%EC%82%AC%EC%A7%842.jpg?raw=true"
				}
			],
			[
				{TRAILER_VIDEO_NUM: 8, TRAILER_VIDEO_ROUTE: "https://www.youtube.com/embed/L9Y-hn2COm0"},
			],
			[
				{
					COMMENTS: "와 !! 재밌따!",
					MEM_NUM: 1,
					REVIEW_NUM: 7,
					STARS: 4,
				},
				{
					COMMENTS: "최고에요!",
					MEM_NUM: 2,
					REVIEW_NUM: 8,
					STARS: 5,
				}
			]
		]
	];

	const [movieData, setMovieData] = useState(initialState);
	const [movieDetailData, setMovieDetailData] = useState(detailState);
	return (
		<movieState.Provider value={movieData}>
			<movieDispatch.Provider value={setMovieData}>
				<movieDetailState.Provider value={movieDetailData}>
					<movieDetailDispatch.Provider value={setMovieDetailData}>
						{children}
					</movieDetailDispatch.Provider>
				</movieDetailState.Provider>
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
export function useMovieDetailState() {
	const context = useContext(movieDetailState);
	return context;
}
export function useMovieDetailDispatch() {
	const context = useContext(movieDetailDispatch);
	return context;
}