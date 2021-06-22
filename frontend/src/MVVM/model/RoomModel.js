import React, { useState, useContext, createContext } from 'react';

const roomState = createContext([]);
const roomStateDispatch = createContext(()=>{});

function RoomModel({ children }) {
	const [roomData, setRoomData] = useState([
		{ROOM_NUM: 1, ROOM_NAME: "1관", TOTAL_SEAT_CAP: 70, ROW_NUM: 7, COL_NUM: 10},
		{ROOM_NUM: 2, ROOM_NAME: "2관", TOTAL_SEAT_CAP: 80, ROW_NUM: 8, COL_NUM: 10},
	]);

	return (
		<roomState.Provider value={roomData}>
			<roomStateDispatch.Provider value={setRoomData}>
				{children}
			</roomStateDispatch.Provider>
		</roomState.Provider>
	)
}

export default RoomModel;

export function useRoomState() {
	const context = useContext(roomState);
	return context;
}
export function useRoomStateDispatch() {
	const context = useContext(roomStateDispatch);
	return context;
}