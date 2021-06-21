import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Slider from "react-slick";

import { Button, Grid, InputBase, Link, Tab, Tabs, IconButton, TextField } from '@material-ui/core';
import { ReactComponent as Star } from '../assets/Star.svg'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';

import { Header, RatingCircle, useSessionStorage } from '../components';
import { API_URL } from '../CommonVariable';
import { useMovieDetailState } from '../MVVM/model/MovieModel';

const starScore = (num) => {
	// todo: 반복문으로 코드 줄이기 ;
	if(num===0)
		return (
			<Grid className="starScore-con">
				<Star fill="gray" width="20" height="20" />
				<Star fill="gray" width="20" height="20" />
				<Star fill="gray" width="20" height="20" />
				<Star fill="gray" width="20" height="20" />
				<Star fill="gray" width="20" height="20" />
			</Grid>
		)
	else if(num===1)
		return (
			<Grid className="starScore-con">
				<Star fill="yellow" width="20" height="20" />
				<Star fill="gray" width="20" height="20" />
				<Star fill="gray" width="20" height="20" />
				<Star fill="gray" width="20" height="20" />
				<Star fill="gray" width="20" height="20" />
			</Grid>
		)
	else if(num===2)
		return (
		<Grid className="starScore-con">
			<Star fill="yellow" width="20" height="20" />
			<Star fill="yellow" width="20" height="20" />
			<Star fill="gray" width="20" height="20" />
			<Star fill="gray" width="20" height="20" />
			<Star fill="gray" width="20" height="20" />
		</Grid>
		)
	else if(num===3)
		return (
		<Grid className="starScore-con">
			<Star fill="yellow" width="20" height="20" />
			<Star fill="yellow" width="20" height="20" />
			<Star fill="yellow" width="20" height="20" />
			<Star fill="gray" width="20" height="20" />
			<Star fill="gray" width="20" height="20" />
		</Grid>
		)
	else if(num===4)
	return (
	<Grid className="starScore-con">
		<Star fill="yellow" width="20" height="20" />
		<Star fill="yellow" width="20" height="20" />
		<Star fill="yellow" width="20" height="20" />
		<Star fill="yellow" width="20" height="20" />
		<Star fill="gray" width="20" height="20" />
	</Grid>
	)
	else return (
		<Grid className="starScore-con">
		<Star fill="yellow" width="20" height="20" />
		<Star fill="yellow" width="20" height="20" />
		<Star fill="yellow" width="20" height="20" />
		<Star fill="yellow" width="20" height="20" />
		<Star fill="yellow" width="20" height="20" />
		</Grid>
	)
}

function MovieDetail(props) {
	let today = new Date();
	const movieId = props.match.params.movieId;
	const getData = useMovieDetailState();
	const getDetailData = getData[movieId-1];
	console.log(getData);
	const [movie, setMovie] = useState(getDetailData[0]);
	console.log(movie);
	const [shot, setShot] = useState(getDetailData[1]);
	const [vid, setVid] = useState(getDetailData[2]);
	const [review, setReview] = useState(getDetailData[3]);
	const [len, setLen] = useState(getDetailData[1].length);
	const [videoLen, setvideoLen] = useState(getDetailData[2].length);
	const mem_num = Number(sessionStorage.getItem("memNum"));

	// <-- carousel setting
	const settings = {
		//infinite: true,
		speed: 500,
		slidesToShow: len>4 ? 4:len,
		slidesToScroll: 1,
		className: "movie-list",
	};
	// carousel setting -->
	const vidSettings = {
		//infinite: true,
		speed: 500,
		slidesToShow: videoLen>4 ? 4: videoLen,
		slidesToScroll: 1,
		className: "movie-list",
	};
	// carousel setting -->

	// <-- Tab
	const [tabValue, setTabValue] = useState(0);
	const tabChangeHandler = (e, newValue) => {
		setTabValue(newValue);
	}
	// Tab -->

	// <-- star
	const [clicked, setClicked] = useState([true,true,true,true,true]);
	const [score, setScore] = useState(5);
	const starClickHandler = (e, index) => {
		e.preventDefault();
		let clickStates = [...clicked];
		for(let i=0; i<5; i++){
			if(i <= index) clickStates[i] = true;
			else clickStates[i] = false;
		}
		setScore(index+1);
		setClicked(clickStates);
	}

	const [reviewEditMode, setReviewEditMode] = useState(-1);
	const [editC, setEditC] = useState([true,true,true,true,true])
	const [editS, setEditS] = useState(5);
	const starEditHandler = (e, index) => {
		console.log(index);
		e.preventDefault();
		let clickStates = [...editC];
		for(let i=0; i<5; i++){
			if(i <= index) clickStates[i] = true;
			else clickStates[i] = false;
		}
		setEditS(index+1);
		setEditC(clickStates);
	}
	const [editP, setEditP] = useState();
	const editModeHandler = (id, comment, star) => {
		setReviewEditMode(id)
		setEditP(comment);
		let clickStates = [...editC];
		for(let i=0; i<5; i++){
			if(i <= star-1) clickStates[i] = true;
			else clickStates[i] = false;
		}
		setEditS(star);
		setEditC(clickStates);
	}
	// star -->

	const [comment, setComment] = useState();

	const submitHandler = (e) => {
		e.preventDefault();
		if(comment===undefined || comment === "")
			alert('comment를 입력해주세요');
		else if(mem_num<0) alert('회원만 리뷰를 작성할 수 있습니다.')
		else{
			alert('리뷰를 작성하였습니다.');
			setComment("");
		}
	}

	const deleteHandler = (review_num) => {
		alert('리뷰를 삭제했습니다!');
	}

	const editSubmitHandler = (e) => {
		e.preventDefault();
		if(editP==undefined || editP === "")
			alert('comment를 입력해주세요');
		else{
			alert('리뷰를 수정하였습니다.');
			setReviewEditMode(-1);
		}
	}

	return (
		<Grid className="movieDetail">
			<Header />
			<Grid className="detail-body">
				<p className="head-typo">영화 상세</p>
				<Grid className="movie">
					<img alt="포스터" style={{height: '220px'}} src={shot && shot[0].TRAILER_SHOT_ROUTE} />
					<Grid className="movie-right">
						<Grid className="movie-header">
							<Grid className="circle">
								<RatingCircle rating={movie && movie.MOVIE_RATING_CODE} />
							</Grid>
							<p>{movie && movie.MOVIE_NAME}</p>
							{
								movie && movie.SCRN_STATUS ==='Y' && new Date(movie.RELEASE_DATE) <= today ?
								<Grid className="tag">현재 상영중</Grid> : null
							}
						</Grid>
						<Grid className="movie-middle">
							<Grid className="review">
								<p>관람객평점</p>
								<p style={{fontSize:'1.3rem', fontWeight:'bold', margin: '0 0.3rem 0 1rem'}}>{movie && (movie.AVG_STARS === null? 0:movie.AVG_STARS)}</p>
								<Star fill="yellow" width="25" height="25" />
							</Grid>
							<Button
								href="/reserve"
								variant="contained"
								style={{ backgroundColor:'#B48484', color:'#ffffff', fontWeight:'bold'}}
							>예매하기</Button>
						</Grid>
						<Grid className="movie-last">
							<p>감독 : {movie && movie.DIRECTOR} / 배우 : {movie && movie.CAST}</p>
							<p>장르 : {movie && movie.GENRE}</p>
							<p>개봉 : {movie && movie.RELEASE_DATE.substring(0,10)}</p>
						</Grid>
					</Grid>
				</Grid>
				<Grid>
					<Tabs
						value={tabValue}
						onChange={tabChangeHandler} variant="fullWidth"
						style={{ margin: '1.5rem 0'}}
					>
						<Tab label="영화 정보" className="tabLabel" />
						<Tab label="평점 및 관람평" className="tabLabel" />
					</Tabs>
					{
						tabValue === 0? // 영화 정보
						<Grid className="tab-content">
							<p className="body-head">시놉시스</p>
							<p>{movie && movie.MOVIE_INTRO}</p>
							<p className="body-head">트레일러</p>
							<Slider {...vidSettings}>
								{
									vid && vid.map(vid => (
										<Grid>
											<iframe width="90%" height="230" allowfullscreen src={vid.TRAILER_VIDEO_ROUTE} title="YouTube video player" frameBorder="0" allow="accelerometer"></iframe>
										</Grid>
									))
								}
							</Slider>
							<p className="body-head">포스터 & 스틸컷</p>
							
							<Slider {...settings}>
								{
									shot && shot.map(shot => (
										<Grid className="trailer_back">
											<a href={shot.TRAILER_SHOT_ROUTE} target="_blank">
												<img alt="예고 사진" style={{maxHeight:'230px'}} src={shot.TRAILER_SHOT_ROUTE} />
											</a>
										</Grid>
									))
								}
							</Slider>
						</Grid>
						: // 평점 및 관람평
						<Grid className="tab-content">
							<Grid className="comment">
								<Grid item xs={3} className="star-grid">
									<p>{score}점</p>
									<Grid className="star-con">
										<span className="star-clicker">
										<Star width="25" height="25" fill={clicked[0] ? 'yellow' : 'gray'} onClick={e => starClickHandler(e,0)} />
										<Star width="25" height="25" fill={clicked[1] ? 'yellow' : 'gray'} onClick={e => starClickHandler(e,1)} />
										<Star width="25" height="25" fill={clicked[2] ? 'yellow' : 'gray'} onClick={e => starClickHandler(e,2)} />
										<Star width="25" height="25" fill={clicked[3] ? 'yellow' : 'gray'} onClick={e => starClickHandler(e,3)} />
										<Star width="25" height="25" fill={clicked[4] ? 'yellow' : 'gray'} onClick={e => starClickHandler(e,4)} />
										</span>
									</Grid>
								</Grid>
								<Grid item xs={6} className="comment-body">
									<InputBase 
										placeholder="관람평을 작성해주세요(최대 200자)"
										fullWidth
										multiline
										required
										value={comment}
										onChange={(e)=>setComment(e.target.value)}
										rows={5}
										inputProps={{maxLength:200}}
									/>
								</Grid>
								<Grid item xs={3} className="comment-submit">
									<Button
										color="inherit"
										style={{width:'100%', height:'100%'}}
										onClick={submitHandler}
									>
										등록
									</Button>
								</Grid>
							</Grid>
							<Grid className="comment-list">
								<p>총 {review && review.length}건</p>
								<Grid className="list-con">
									{
										review && review.map(review => (
											review.REVIEW_NUM === reviewEditMode ?
											<Grid className="comment-box">
												<Grid className="starScore-con">
													<span className="star-clicker">
														<Star width="20" height="20" fill={editC[0] ? 'yellow' : 'gray'} onClick={e => starEditHandler(e,0)} />
														<Star width="20" height="20" fill={editC[1] ? 'yellow' : 'gray'} onClick={e => starEditHandler(e,1)} />
														<Star width="20" height="20" fill={editC[2] ? 'yellow' : 'gray'} onClick={e => starEditHandler(e,2)} />
														<Star width="20" height="20" fill={editC[3] ? 'yellow' : 'gray'} onClick={e => starEditHandler(e,3)} />
														<Star width="20" height="20" fill={editC[4] ? 'yellow' : 'gray'} onClick={e => starEditHandler(e,4)} />
													</span>
												</Grid>
												<TextField
													value={editP}
													multiline
													style={{width:'80%'}}
													onChange={(e)=>setEditP(e.target.value)}
												/>
												<IconButton color="inherit" style={{padding:'0 0.5rem'}} onClick={editSubmitHandler}>
													<CheckIcon />
												</IconButton>
												<IconButton color="inherit" style={{padding:'0 0.5rem'}} onClick={()=>editModeHandler(-1, "")}>
													<ClearIcon />
												</IconButton>
											</Grid>
											:
											<Grid className="comment-box">
												{starScore(review.STARS)}
												{review.COMMENTS}
												{	
													review.MEM_NUM === mem_num &&
													<>
														<IconButton color="inherit" style={{padding:'0 0.5rem 0 1rem'}} onClick={()=>editModeHandler(review.REVIEW_NUM, review.COMMENTS, review.STARS)}>
															<EditIcon />
														</IconButton>
														<IconButton color="inherit" style={{padding:'0 0.5rem'}} onClick={()=>deleteHandler(review.REVIEW_NUM)}>
														<DeleteIcon />
														</IconButton>
													</>
												}
											</Grid>
										))
									}
								</Grid>
							</Grid>
						</Grid>
					}
				</Grid>
			</Grid>
		</Grid>
	)
}

export default MovieDetail
