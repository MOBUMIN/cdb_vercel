import React from 'react';
import { MovieModel, VisitorModel, CodeModel, RoomModel, ScheduleModel, DCModel } from '.';

function ModelProvider({ children }) {
	return (
		<CodeModel>
			<RoomModel>
				<MovieModel>
					<VisitorModel>
						<ScheduleModel>
							<DCModel>
								{children}
							</DCModel>
						</ScheduleModel>
					</VisitorModel>
				</MovieModel>
			</RoomModel>
		</CodeModel>
	)
}

export default ModelProvider
