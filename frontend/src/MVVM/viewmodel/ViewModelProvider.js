import React from 'react'
import { CodeViewModel } from '.'

function ViewModelProvider({ children }) {
	return (
		<CodeViewModel>
				{children}
		</CodeViewModel>
	)
}

export default ViewModelProvider
