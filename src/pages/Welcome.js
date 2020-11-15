import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
	paper: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#8900D6',
		// minHeight: '85vh',
		borderRadius: 10,
		// alignItems: 'center',
		justifyContent: 'start',
		color: 'white'
	},
	container: {
		marginTop: '7vh'
	},
	logo: {
		width: '20%'
	},
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	submit: {
		marginLeft: 20,
		backgroundColor: '#11E4C1'
	},
	logoContainer: {
		width: '90%',
		padding: 50
	},
	title: {
		paddingTop: 20,
		paddingBottom: 20,
		width: '100%',
		textAlign: 'center'
	},
	subtitle: {
		width: '80%',
		textAlign: 'center',
		alignSelf: 'center',
		paddingBottom: 20
	},
	buttons: {
		padding: '5%',
		justifyContent: 'space-between',
		color: '#8900D6'
	}
});

const Welcome = () => {
	const classes = useStyles();
	return (
		<Container className={classes.container}>
			<Paper elevation={3} className={classes.paper}>
				<div className={classes.logoContainer}>
					<img src={logo} className={classes.logo} alt="logo" />
				</div>
				<Typography className={classes.title} variant="h4">
					Bom vindo ao HUB+Invest
				</Typography>
				<Typography className={classes.subtitle} variant="h5">
					Antes de mais nada, precisamos te conhecer melhor!!
				</Typography>
				<Typography className={classes.subtitle} variant="h5">
					Esse formulário é muito importante para que possamos te oferecer o melhor conteúdo possivel! Juro
					que não demora muito.
				</Typography>
				<Typography className={classes.subtitle} variant="h5">
					Vamos começar?
				</Typography>
				<Grid container className={classes.buttons}>
					<Grid item xm={3}>
						<NavLink to="/home" style={{ textDecoration: 'none' }}>
							<Button variant="contained" className={classes.submit}>
								<Typography style={{ color: '#8900D6' }}>Mais tarde</Typography>
							</Button>
						</NavLink>
					</Grid>
					<Grid item xm={3}>
						<NavLink to="/signup" style={{ textDecoration: 'none' }}>
							<Button variant="contained" className={classes.submit}>
								<Typography style={{ color: '#8900D6' }}>Estou Pronto</Typography>
							</Button>
						</NavLink>
					</Grid>
				</Grid>
			</Paper>
		</Container>
	);
};

export default Welcome;
