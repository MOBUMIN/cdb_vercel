import axios from 'axios';
import React, { useState, useContext, createContext, useEffect } from 'react';
import { API_URL } from '../../CommonVariable';

const visitorState = createContext([]);
const visitorDispatch = createContext(()=>{});

function VisitorModel({ children }) {
	const initialData = [
		{
			VISIT_NUM: 1,
			VISIT_TIME: '2021062205300000',
			VISIT_NAME: '김수빈',
			VISIT_CONTACT: '010-0000-0000',
			ROOM_NUM: '1관'
		},
		{
			VISIT_NUM: 2,
			VISIT_TIME: '2021062217300000',
			VISIT_NAME: '김수빈',
			VISIT_CONTACT: '010-0000-0000',
			ROOM_NUM: '2관'
		}
	]
	const [visitorData, setVisitorData] = useState(initialData);
	return (
		<visitorState.Provider value={visitorData}>
			<visitorDispatch.Provider value={setVisitorData}>
				{children}
			</visitorDispatch.Provider>
		</visitorState.Provider>
	)
}

export default VisitorModel;

export function useVisitorState() {
	const context = useContext(visitorState);
	return context;
}