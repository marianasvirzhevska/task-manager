import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useRouteMatch } from 'react-router'

import {
	AppDialog,
	AppDialogTitle,
	AppDialogContent
} from '../../../../../common/Dialog'
import FilterSelect from './FilterSelect'

let FiltersDialog = (props) => {
	const {open, filterQuery, handleClose, handleApply} = props;

	const [filterType, setFilterType] = useState(filterQuery.propKey);
	const [filterOption, setFilterOption] = useState(filterQuery.propValue);

	const users = useSelector(state => state.users.users);
	const projects = useSelector(state => state.projects.projects);

	const history = useHistory();
	const { path } = useRouteMatch();

	const handleSubmit = () => {
		const query = {
			propKey: filterType,
			propValue: filterOption
		};

		handleApply(query);
		handleClose();

		if(query.propValue){
			history.push(`${path}?type=${query.propKey}&id=${query.propValue}`);
		} else {
			history.push('/dashboard/tasks');
		}
	};

	const handleFilterType = (value) => {
		setFilterType(value);
	};

	const getFilterOptions = (type) => {
		switch (type){
			case 'Projects':
				return projectsOptions;
			case 'Users':
				return usersOptions;
			case 'Task status':
				return taskStatus;
			default:
				return null
		}
	};
	const getOption = (value) => {
		setFilterOption(value);
	};

	const handleReset = () => {
		setFilterType('');
		setFilterOption('');
	};

	const filterTypes = ['Projects', 'Users', 'Task status'];
	const taskStatus = ['InProgress', 'Pending', 'Done'];
	const usersOptions = users.map(user => {
		return {
			id: user.id,
			label: `${user.firstName} ${user.lastName}`
		}
	});
	const projectsOptions = projects.map(project => {
		return {
			id: project.id,
			label: project.projectTitle
		}
	});

	return (
		<AppDialog
			open={open}
			handleClose={handleClose}
		>
			<AppDialogTitle
				handleReset={handleReset}
				handleClose={handleClose}
				title='Filter tasks'/>
			<AppDialogContent>
				<div className='filter-dialog'>
					<h3 className='filter-dialog-title'>Filter tasks by:</h3>
					<div className='flexed-row'>
						<FilterSelect
							id='filters'
							selected={filterType}
							data={filterTypes}
							handleChange={handleFilterType}
						/>
					</div>
					{
						getFilterOptions(filterType) ?
						<>
							<h3 className='filter-dialog-title'>{filterType}</h3>
							<div className='flexed-row'>
								<FilterSelect
									id={`option-${filterType}`}
									selected={filterOption}
									data={getFilterOptions(filterType)}
									handleChange={getOption}
								/>
							</div>
						</>
						: null
					}

					<div className="filter-dialog-action">
						<Button
							color='secondary'
							variant='contained'
							type="submit"
							onClick={handleSubmit}
						>Apply</Button>
					</div>
				</div>
			</AppDialogContent>
		</AppDialog>
	)
};


FiltersDialog.propTypes = {
	open: PropTypes.bool,
	handleClose: PropTypes.func.isRequired,
	handleApply: PropTypes.func.isRequired,
	filterQuery: PropTypes.object
};

export default FiltersDialog;