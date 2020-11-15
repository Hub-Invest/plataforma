import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link as MaterialLink } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import orama from '../assets/orama.png';

const useStyles = makeStyles({
	container: {
		display: 'flex',
		flexDirection: 'column',
		backgroundImage: `url(${orama})`,
		height: '100vh',
		backgroundRepeat: 'no-repeat',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundSize: 'contain'
	},
	dialog: {
		backgroundColor: '#3F942B',
		color: 'white',
		// height: '40%',
		padding: 50,
		justifyContent: 'center',
		textAlign: 'center'
	},
	submit: {
		marginLeft: 20,
		backgroundColor: 'white'
	},
	buttons: {
		display: 'flex',
		flexDirection: 'row',
		padding: '5%',
		marginTop: 50,
		justifyContent: 'space-between',
		color: '#3C8E34'
	}
});

const Orama = () => {
	const classes = useStyles();
	return (
		<Container className={classes.container}>
			<Paper elevation={3} className={classes.dialog}>
				<Typography variant="h4">Olá, seja muito bem vindo!</Typography>
				<Typography variant="h4">Você já sabe investir?</Typography>
				<Grid container className={classes.buttons}>
					<Grid item xs={5}>
						<MaterialLink
							href="https://www.orama.com.br/"
							color="inherit"
							onClick={(e) => e.preventDefault}
						>
							<Button variant="contained" className={classes.submit}>
								<Typography style={{ color: '#3C8E34' }}>Já sei o que estou fazendo</Typography>
							</Button>
						</MaterialLink>
					</Grid>
					<Grid item xs={5}>
						<NavLink to="/oramaemail" style={{ textDecoration: 'none' }}>
							<Button variant="contained" className={classes.submit}>
								<Typography style={{ color: '#3C8E34' }}>Quero aprender!!</Typography>
							</Button>
						</NavLink>
					</Grid>
				</Grid>
			</Paper>
		</Container>
	);
};

export default Orama;
