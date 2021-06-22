import React, { useState, useContext, createContext } from 'react';

const DCState = createContext([]);
const DCStateDispatch = createContext(()=>{});

function DCModel({ children }) {
	const [DCData, setDCData] = useState([
		{ DC_CODE: 1, DC_NAME: '청소년 할인', DC_RATE: 15 },
		{ DC_CODE: 2, DC_NAME: '시니어 할인', DC_RATE: 20 },
		{ DC_CODE: 3, DC_NAME: '장애인 할인', DC_RATE: 20 },
		{ DC_CODE: 4, DC_NAME: 'LG 할인', DC_RATE: 30 },
		{ DC_CODE: 5, DC_NAME: 'SK 할인', DC_RATE: 35 },
		{ DC_CODE: 6, DC_NAME: 'KT 할인', DC_RATE: 35 }
	]);

	return (
		<DCState.Provider value={DCData}>
			<DCStateDispatch.Provider value={setDCData}>
				{children}
			</DCStateDispatch.Provider>
		</DCState.Provider>
	)
}

export default DCModel;

export function useDCState() {
	const context = useContext(DCState);
	return context;
}
export function useDCStateDispatch() {
	const context = useContext(DCStateDispatch);
	return context;
}