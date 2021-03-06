import React, { useState, forwardRef, useEffect } from 'react'
import { Grid } from '@material-ui/core';
import { RatingCircle } from '../components'
import DatePicker from "react-datepicker";
import { useScheduleState } from '../MVVM/model/ScheduleModel';

function dateTimeToString(date){
    var year = date.getFullYear();              //yyyy
    var month = (1 + date.getMonth());          //M
    month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
    var day = date.getDate();                   //d
    day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
    return  year + '' + month + '' + day; 
}

const stringToDate = (str) => {
	var year = str.substring(0,4);
	var mon = str.substring(4,6);
	var day = str.substring(6,8);

	return year + '-' + mon + '-' + day;
}

function StepZero({next, data, selectMovie, selectSch}) {
	const schData = useScheduleState();

	const [ratingCode, setRatingCode] = useState("12세이용가");
	const [selectedMovie, setSelectedMovie] = useState(1);

	const handleMovieSelect = (i) => { // movie_num
		setSelectedMovie(i);
		selectMovie(i);
		setRatingCode(data.filter(d => d.MOVIE_NUM===i)[0].MOVIE_RATING_CODE);
	}
	const [selectedDate, setSelectedDate] = useState(new Date('2021-06-14'));
	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	const CustomInput = forwardRef(({ value, onClick}, ref) => {
		const split = value.split('/')
		return (
			<button className="custom-input" onClick={onClick} ref={ref}>
				{split[2]}년 {split[0]}월 {split[1]}일
			</button>
		)
	});

	const HandlerNext = (sch) => {
		console.log(sch);
		selectSch(sch);
		next();
	}
	return (
		<Grid className="stepZero">
			<Grid item xs={6} className="left">
				<Grid className={`${'right-border'} ${'zeroHead'}`}>
					영화선택
				</Grid>
				<Grid className={`${'right-border'} ${'zeroBody'}`}>
					<Grid className="movie-con">
						{
							data && data.map((movie)=>(
								movie.SCRN_STATUS=='Y' &&
								<Grid className={selectedMovie===movie.MOVIE_NUM ? 'leftContent leftContent-active' : 'leftContent'} onClick={() => handleMovieSelect(movie.MOVIE_NUM)}>
									{movie.MOVIE_NAME}
								</Grid>
							))
						}
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={6} className="right">
				<Grid className="zeroHead">
					날짜선택
				</Grid>
				<Grid className="zeroBody">
					{/* 추후 custom 하기 */}
					<Grid className="dateGrid">
						<DatePicker
							selected={selectedDate}
							onChange={handleDateChange}
							customInput={<CustomInput />}
						/>
					</Grid>
					<Grid className="timeGrid">
						<Grid className="timeGrid-head">
							<Grid
								style={{
									width:'2rem',
									height:'2rem',
									color:'white',
									marginRight:'5px'}}
							>{ratingCode !="" && <RatingCircle rating={ratingCode} />}</Grid>
							{
								data.filter(d => d.MOVIE_NUM===selectedMovie)[0] !== undefined?
								(data.filter(d => d.MOVIE_NUM===selectedMovie)[0].MOVIE_NAME != undefined && data.filter(d => d.MOVIE_NUM===selectedMovie)[0].MOVIE_NAME) : null
							}
						</Grid>
						<Grid className="timeGrid-body">
							{
								schData && schData.map(sch=>{
									return(sch.MOVIE_NUM === selectedMovie &&
										dateTimeToString(selectedDate) === sch.SCRN_DATE.substring(0,8) &&
										<Grid className="timeGrid-content" onClick={() => HandlerNext(sch)}>
											<Grid style={{fontWeight:'bold', marginBottom:'5px'}}>{sch.SCRN_DATE.substring(8,10)}:{sch.SCRN_DATE.substring(10,12)}</Grid>
											<Grid style={{fontSize:'0.5rem'}}>{sch.RESIDUAL_SEAT}/{sch.TOTAL_SEAT_CAP} {sch.ROOM_NAME}</Grid>
										</Grid>)
								})
							}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default StepZero