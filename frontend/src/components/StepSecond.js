import React, { useState,useEffect } from 'react'
import {
	Grid,
	Button,
	FilledInput,
	FormControl,
	FormHelperText,
	InputAdornment,
	Link
} from '@material-ui/core';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { RatingCircle } from '../components'
import { useDCState } from '../MVVM/model/DCModel';

function StepSecond({next, prev, movie, movieId, schedule, seatCount}) {
	const dcData = useDCState();
	console.log(dcData);

	const movieData = movie.filter(m=>m.MOVIE_NUM===movieId)[0];
	console.log(movieData);
	const [point, setPoint] = useState(0);
	const [DC, setDC] = useState(-1);
	const [payment, setPayment] = useState(0);

	const handlerDCClick = (i) => {
		if(i===DC) setDC(-1); // 다시 누르면 취소
		else setDC(i);
	}

	const stringToDate = (str) => {
		var year = str.substring(0,4);
		var mon = str.substring(4,6);
		var day = str.substring(6,8);
		var hour = str.substring(8,10);
		var min = str.substring(10,12);
	
		return year + '년 ' + mon + '월 ' + day + '일 ' + hour + '시 '+ min + '분 ';
	}

	return (
		<Grid className="stepSecond">
			<Grid item xs={3} className="left">
				<Grid className={`${'right-border'} ${'SecondHead'}`}>
					예매정보
				</Grid>
				<Grid className={`${'right-border'} ${'SecondBody'}`}>
					<img alt="포스터" style={{width: '45%', height:'50%'}} src={movieData.POSTER} />
					<Grid className="left-content-head">
						<Grid
							style={{
								width:'1.5rem',
								height:'1.5rem',
								color:'white',
								marginRight:'5px'}}
						><RatingCircle /></Grid>
						{movieData!=undefined && movieData.MOVIE_NAME}
					</Grid>
					<Grid className="movie-info">
						<Grid className="movie-info-col">
							<p style={{marginBottom:'2rem'}}>일시</p>
							<p style={{marginBottom:'1rem'}}>상영관</p>
							<p>좌석</p>
						</Grid>
						<Grid className="movie-info-col2">
							<p style={{marginBottom:'1.2rem'}}>{stringToDate(schedule.SCRN_DATE)}</p>
							<p style={{marginBottom:'1rem'}}>{schedule.ROOM_NAME}</p>
							<p>좌석정보</p>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={6} className="middle">
				<Grid className={`${'right-border'} ${'SecondHead'}`}>
					결제수단
				</Grid>
				<Grid className={`${'right-border'} ${'SecondBody'}`}>
					<Grid className="middle-content">
						<p className="content-head">포인트 사용</p>
						<FormControl>
						{sessionStorage.getItem("memNum")==="-1" || sessionStorage.getItem("memNum")===null?
							<FilledInput
							disabled
							value={point}
							onChange={(e)=>setPoint(e.target.value)}
							endAdornment={<InputAdornment position="end">원</InputAdornment>}
							disableUnderline
							/>
						: <FilledInput
						value={point}
						onChange={(e)=>setPoint(e.target.value)}
						endAdornment={<InputAdornment position="end">원</InputAdornment>}
						disableUnderline
						/>}
							<FormHelperText>잔여 포인트 : </FormHelperText>
						</FormControl>
					</Grid>
					<Grid className="middle-content">
						<p className="content-head">할인</p>
						{/* 할인 방법 불러오기 */}
						<Grid className="DC-grid">
							{
								dcData && dcData.map(dc=>(
									<Grid className={DC===dc.DC_CODE ? 'DC-content content-active' : 'DC-content'} onClick={()=>handlerDCClick(dc.DC_CODE)}>
										{dc.DC_NAME}
									</Grid>
								))
							}
						</Grid>
					</Grid>
					<Grid className="middle-content">
						<p className="content-head">결제방법</p>
						<Grid className="payment-grid">
							<Grid className={payment===0 ? 'payment-content content-active' : 'payment-content'} onClick={()=>setPayment(0)}>
								<CreditCardIcon />
								신용카드
							</Grid>
							<Grid className={payment===1 ? 'payment-content content-active' : 'payment-content'} onClick={()=>setPayment(1)}>
								<AccountBalanceWalletIcon />
								무통장입금
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={3} className="final">
				<Grid className="SecondHead">
					결제하기
				</Grid>
				<Grid className="SecondBody">
					<Grid className="final-row">
						<p className="final-head">상품금액</p>
						<p style={{fontWeight:'bold'}}>{seatCount*5000}원</p>
					</Grid>
					<Grid className="final-row">
						<p className="final-head">할인금액</p>
						<p style={{fontWeight:'bold'}}>0원</p>
					</Grid>
					<Grid className="final-row">
						<p className="final-head">총 금액</p>
						<p style={{fontWeight:'bold'}}>{seatCount*5000}원</p>
					</Grid>
					<Button
						variant="contained"
						fullWidth
						style={{
							backgroundColor:'#985555',
							color:'white',
							fontWeight:'bold',
							marginBottom:'1rem',
						}}
						onClick={next}
					>
						결제하기
					</Button>
					<Button
						variant="contained"
						fullWidth
						style={{
							backgroundColor:'gray',
							color:'white',
							marginBottom:'1rem',
						}}
						onClick={prev}
					>
						이전단계
					</Button>
					<Button
						variant="contained"
						fullWidth
						style={{
							backgroundColor:'gray',
							color:'white',
							textDecoration:'none'
						}}
						component={Link}
						href="/"
					>
						취소하기
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default StepSecond
