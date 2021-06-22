import React, { useState } from 'react'

import { Grid, TextField, Button, Link, Select, MenuItem } from '@material-ui/core'
import { useRoomState } from '../MVVM/model/RoomModel';

function Enter() {
	const room = useRoomState();
	console.log(room);
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [selectRoom, setSelectRoom] = useState(1);

	const SubmitHandler = (event) => {
		event.preventDefault();
		if(name !== "" && phone !== ""){
			alert('출입명부를 작성했습니다.');
			window.location.href='/';
		}
		else alert('내용을 채워주세요');
	};

	return (
		<Grid className="enter">
			<p style={{textAlign:"center", margin:'4rem 0', color:'white', fontSize:'3rem'}}>출입명부작성</p>
			<Grid item className="temp-input">
				<TextField
					variant="filled"
					margin="normal"
					fullWidth
					placeholder="Name"
					autoFocus
					style={{
						backgroundColor: '#ffffff'
					}}
					value={name}
					onChange={(e)=>setName(e.target.value)}
				/>
				<TextField
					variant="filled"
					margin="normal"
					fullWidth
					placeholder="000-0000-0000"
					autoFocus
					style={{
						backgroundColor: '#ffffff', marginBottom: '1rem'
					}}
					inputProps={{maxLength:13}}
					value={phone}
					onChange={(e)=>setPhone(e.target.value)}
				/>
				<Select
					variant="filled"
					margin="normal"
					required
					autoFocus
					fullWidth
					value={selectRoom}
					onChange={e => setSelectRoom(e.target.value)}
				>
					{room.map((room) => (
						<MenuItem value={room.ROOM_NUM}>
							{room.ROOM_NAME}
						</MenuItem>
					))}
				</Select>
				<Button 
					variant="contained"
					style={{
						width: '100%',
						height: '3rem',
						backgroundColor: '#DA8181',
						borderRadius: 0,
						padding: '10px 0',
						marginTop: '1rem'
					}}
					onClick={SubmitHandler}
				>
					출입명부 제출
				</Button>
				<Button 
					variant="contained"
					style={{
						width: '100%',
						height: '3rem',
						borderRadius: 0,
						padding: '10px 0',
						marginTop: '1rem',
						backgroundColor:'#cacaca',
						textDecoration:'none'
					}}
					component={Link}
					href="/"
				>
					취소하기
				</Button>
			</Grid>
		</Grid>
	)
}

export default Enter
