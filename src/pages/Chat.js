import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppContainer from '../components/AppContainer';

const useStyles = makeStyles({});

const Chat = () => {
	const classes = useStyles();

	return (
		<div className="classes.root">
			<AppContainer>
				<div>Chat</div>
			</AppContainer>
		</div>
	);
};

export default Chat;
