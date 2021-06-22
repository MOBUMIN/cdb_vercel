import React from 'react';
import { MovieModel, VisitorModel, CodeModel, RoomModel, ScheduleModel } from '.';

function ModelProvider({ children }) {
	return (
		<CodeModel>
			<RoomModel>
				<MovieModel>
					<VisitorModel>
						<ScheduleModel>
							{children}
						</ScheduleModel>
					</VisitorModel>
				</MovieModel>
			</RoomModel>
		</CodeModel>
	)
}

export default ModelProvider
