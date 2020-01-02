import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import {
	AppBar,
	AppBarBefore,
	AppBarAfter,
	SearchField
} from '../AppBar'
import AddProjectDialog from './components/AddProjectDialog'

const Projects = () => {
	const [createCred, setCreate] = useState(false);

	const handleCreate = () => {
		setCreate(!createCred);
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
			<AddProjectDialog
				open={createCred}
				handleClose={handleCreate}
				handleCreate={handleCreate}
			/>
		</div>
	)
};

export default Projects;