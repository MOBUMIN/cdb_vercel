import React, { useState, useContext, createContext } from 'react';

const schState = createContext([]);
const schStateDispatch = createContext(()=>{});

function ScheduleModel({ children }) {
	const initialState = [
		{
			MOVIE_NUM: 1,
			RESIDUAL_SEAT: 80,
			ROOM_NAME: "2관",
			ROOM_NUM: 2,
			SCHEDULE_NUM: 3,
			SCRN_DATE: "20210614090800",
			TOTAL_SEAT_CAP: 80
		},{
			MOVIE_NUM: 1,
			RESIDUAL_SEAT: 70,
			ROOM_NAME: "1관",
			ROOM_NUM: 1,
			SCHEDULE_NUM: 4,
			SCRN_DATE: "20210614090900",
			TOTAL_SEAT_CAP: 70
		},{
			MOVIE_NUM: 1,
			RESIDUAL_SEAT: 70,
			ROOM_NAME: "1관",
			ROOM_NUM: 1,
			SCHEDULE_NUM: 5,
			SCRN_DATE: "20210614130900",
			TOTAL_SEAT_CAP: 70
		},{
			MOVIE_NUM: 2,
			RESIDUAL_SEAT: 80,
			ROOM_NAME: "2관",
			ROOM_NUM: 2,
			SCHEDULE_NUM: 6,
			SCRN_DATE: "20210614130900",
			TOTAL_SEAT_CAP: 80
		}
	]
	const [schData, setSchData] = useState(initialState);

	return (
		<schState.Provider value={schData}>
			<schStateDispatch.Provider value={setSchData}>
				{children}
			</schStateDispatch.Provider>
		</schState.Provider>
	)
}

export default ScheduleModel;

export function useScheduleState() {
	const context = useContext(schState);
	return context;
}
export function useScheduleDispatch() {
	const context = useContext(schStateDispatch);
	return context;
}