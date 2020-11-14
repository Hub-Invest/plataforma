import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppContainer from '../components/Container';

const useStyles = makeStyles({});

const Configuracoes = () => {
	const classes = useStyles();

	return (
		<div className="classes.root">
			<AppContainer>
				<div>Configuracoes</div>
			</AppContainer>
		</div>
	);
};

export default Configuracoes;
