import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppContainer from '../components/Container';

const useStyles = makeStyles({});

const Graficos = () => {
	const classes = useStyles();

	return (
		<div className="classes.root">
			<AppContainer>
				<div>Graficos</div>
			</AppContainer>
		</div>
	);
};

export default Graficos;
