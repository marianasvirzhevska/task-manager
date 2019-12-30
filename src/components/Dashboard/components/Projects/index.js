import React from 'react'
import Button from '@material-ui/core/Button'
import {
	AppBar,
	AppBarBefore,
	AppBarAfter,
	SearchField
} from '../AppBar'

const Projects = () => {
	const handleCreate = () => {

	};

	return(
		<div className='dashboard-content'>
			<AppBar title="Projects">
				<AppBarBefore>
					<SearchField/>
				</AppBarBefore>
				<AppBarAfter>
					<Button size='small'
							variant='contained'
							color='secondary'
							onClick={handleCreate}>
						Add Project
					</Button>
				</AppBarAfter>
			</AppBar>
		</div>
	)
};

export default Projects;