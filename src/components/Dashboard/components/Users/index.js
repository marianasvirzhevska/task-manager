import React from 'react'
import Button from '@material-ui/core/Button'
import {
	AppBar,
	AppBarBefore,
	AppBarAfter,
	SearchField
} from '../AppBar'

const Users = () => {
	const handleCreate = () => {

	};

	return(
		<div className='dashboard-content'>
			<AppBar title="Users">
				<AppBarBefore>
					<SearchField/>
				</AppBarBefore>
				<AppBarAfter>
					<Button size='small'
							variant='contained'
							color='secondary'
							onClick={handleCreate}>
						Create Task
					</Button>
				</AppBarAfter>
			</AppBar>
		</div>
	)
};

export default Users;