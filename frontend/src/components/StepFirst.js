import React, { useState } from 'react'
import { Grid, Button } from '@material-ui/core';
import { RatingCircle } from '../components';

function StepFirst({ next, prev, movie, schedule, movieId, setSeatCount }) {
	const movieData = movie.filter(m=>m.MOVIE_NUM===movieId)[0];

	const stringToDate = (str) => {
		var year = str.substring(0,4);
		var mon = str.substring(4,6);
		var day = str.substring(6,8);
		var hour = str.substring(8,10);
		var min = str.substring(10,12);
	
		return year + '년 ' + mon + '월 ' + day + '일 ' + hour + '시 '+ min + '분';
	}

	const seatRow = 10;
	const seatCol = 20;
	const arr = Array.from(Array(seatRow), () => Array(seatCol).fill(false))
	const [selectInfo, setSelectInfo] = useState({"arr": arr});
	const [selectCount, setSelectCount] = useState(0);

	console.log(selectInfo);
	function handelClick(e){
		const c = e.target.getAttribute('c');
		const r = e.target.getAttribute('r');
		console.log("clicked");
		const newState = selectInfo.arr;
		// console.log(r +" " +c);
		// console.log(newState[0]);
		if (newState[r][c])
		{
			setSelectCount(selectCount - 1);
			setSeatCount(selectCount -1);
		}
		else 
		{
			setSelectCount(selectCount + 1);
			setSeatCount(selectCount + 1);
		}
		newState[r][c] = !newState[r][c];
		setSelectInfo({arr: newState});
		console.log(selectInfo);
		
	}
	function Seat(props) {
		if (selectInfo.arr[props.r][props.c] === true) {
			return (
				<div className="selected-seat"
					style={{cursor:'pointer'}}
					id={props.id}
					r={props.r}
					c={props.c}
					onClick={handelClick}>
				{props.c}
				</div>
			);
		}
		else {
			return (
				<div className="seat"
					style={{cursor:'pointer'}}
					id={props.id}
					r={props.r}
					c={props.c}
					onClick={handelClick}>
				{props.c}
				</div>
			);
		}	
	}
	
	
	return (
		<Grid className="stepFirst">
			<Grid className="label">
				<Grid className="label-name">
					<Grid
						style={{
							width:'2.3rem',
							height:'2.3rem',
							color:'white',
							marginLeft:'1rem',
							marginRight:'5px',
							fontWeight:'bold',
							fontSize:'1.2rem'
						}}
					><RatingCircle rating={movieData.MOVIE_RATING_CODE} /></Grid>
					<p style={{fontSize:'1.5rem', fontWeight:'bold'}}>{movieData.MOVIE_NAME}</p>
				</Grid>
				<p style={{marginRight:'1rem'}}>{stringToDate(schedule.SCRN_DATE)}</p>
				{schedule.ROOM_NAME}
			</Grid>
			<Grid className="map">
				<Grid className="screen">S C R E E N</Grid>
				<Grid className="seats">
					{[...Array(seatRow)].map((r, indexR) => (
						<Grid className="seat-row" id={indexR}>
							{[...Array(seatCol)].map((c, indexC) => (
								<Seat r={indexR} c={indexC}/>
							))}
						</Grid>
					))}
					
				</Grid>
			</Grid>
			<Grid className="info">
				<Grid className="info-left">
					<Grid className="info-left-content">선택된 좌석 {selectCount}개</Grid>
					<Grid className="info-left-content">총 금액 {selectCount*5000}원</Grid>
				</Grid>
				<Grid className="btn-wrapper">
					<Button onClick={prev} className="btn-back">뒤로가기</Button>
					<Button className="btn" onClick={next}>결제하기</Button>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default StepFirst
