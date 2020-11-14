import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppContainer from '../components/AppContainer';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
	container: {
		padding: 40,
		display: 'flex',
		flexDirection: 'column'
	}
});

const Simulador = () => {
	const classes = useStyles();

	return (
		<div className="classes.root">
			<AppContainer>
				<Container className={classes.container}>
					<Typography variant="h5">Simule o investimento dos seus sonhos</Typography>
				</Container>
			</AppContainer>
		</div>
	);
};

export default Simulador;
