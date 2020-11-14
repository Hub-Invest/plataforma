import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppContainer from '../components/AppContainer';

const useStyles = makeStyles({});

const MiniCursos = () => {
	// const classes = useStyles();

	return (
		<div className="classes.root">
			<AppContainer>
				<div>Mini Cursos</div>
			</AppContainer>
		</div>
	);
};

export default MiniCursos;
