import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ContactForm from '../components/ContactForm';

const useStyles = makeStyles({
	paper: {
		display: 'flex',
		flexDirection: 'column',

		// minHeight: '85vh',
		borderRadius: 10,
		// alignItems: 'center',
		justifyContent: 'start',
		color: 'black'
	},
	container: {
		marginTop: '7vh'
	},
	logo: {
		width: '80%'
	},
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	submit: {
		justifySelf: 'end',
		backgroundColor: '#E613D5'
	},
	logoContainer: {
		width: '90%',
		padding: 50
	},
	purpleText: {
		color: '#8900D6'
	},

	buttons: {
		padding: '5%',

		justifyContent: 'space-between'
	},
	menu: {
		backgroundColor: '#8900D6'
	},
	skip: {
		backgroundColor: 'white'
	}
});

const SignupFormPage = () => {
	const classes = useStyles();
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ telefone, setTelefone ] = useState('');
	const [ state, setState ] = useState('');
	return (
		<Container className={classes.container}>
			<Paper elevation={3} className={classes.paper}>
				<Grid container>
					<Grid item xs={3} className={classes.menu}>
						<div className={classes.logoContainer}>
							<img src={logo} className={classes.logo} alt="logo" />
						</div>
					</Grid>
					<Grid item xs={9} style={{ padding: 20 }}>
						<div
							style={{
								justifyContent: 'space-between',
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center'
							}}
						>
							<Typography className={classes.blackText} variant="body2">
								PASSO 1 de 3
							</Typography>
							<Typography style={{ alignItems: 'center' }} className={classes.purpleText} variant="body2">
								Está com dificuldades? Peça ajuda
								<ArrowRightAltIcon />
							</Typography>
						</div>
						<ContactForm />
						<Grid container className={classes.buttons}>
							<Grid item xs={3}>
								<NavLink to="/home" style={{ textDecoration: 'none' }}>
									<Button variant="contained" className={classes.skip}>
										<Typography style={{ color: '#E613D5' }}>Pular</Typography>
									</Button>
								</NavLink>
							</Grid>
							<Grid item xs={3}>
								<NavLink to="/investorprofile" style={{ textDecoration: 'none' }}>
									<Button variant="contained" className={classes.submit}>
										<Typography style={{ color: 'white' }}>Próximo</Typography>
									</Button>
								</NavLink>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</Container>
	);
};

export default SignupFormPage;
