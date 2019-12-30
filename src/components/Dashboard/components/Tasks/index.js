import React from 'react'
import Button from '@material-ui/core/Button'
import {
	AppBar,
	AppBarBefore,
	AppBarAfter,
	SearchField,
	Filters
} from '../AppBar'

const Tasks = () => {
	const handleCreate = () => {

	};

	return(
		<div className='dashboard-content'>
			<AppBar title="Tasks">
				<AppBarBefore>
					<Filters handleFilter={() => {}}/>
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

export default Tasks;