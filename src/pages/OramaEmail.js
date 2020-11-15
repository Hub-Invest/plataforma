import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';

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
		textAlign: 'center',
		maxWidth: '70%'
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
	},
	emailInput: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 50,
		alignItems: 'center'
	},
	send: {
		marginLeft: 20,
		backgroundColor: 'white',
		borderRadius: 15,
		height: 50,
		width: 50,
		padding: 20,
		minHeight: 0,
		minWidth: 0,
		marginRight: 10
	}
});

const OramaEmail = () => {
	const classes = useStyles();
	const [ email, setEmail ] = useState('');
	return (
		<Container className={classes.container}>
			<Paper elevation={3} className={classes.dialog}>
				<Typography variant="h4">Parabéns! Você já deu o primeiro passo para garantir o seu futuro!</Typography>
				<Typography style={{ marginTop: 20 }} variant="h6">
					Ainda está na dúvida? Assita <span style={{ color: '#61D339' }}>esse vídeo</span> para saber porque
					investir é tão importate!
				</Typography>
				<Typography style={{ marginTop: 20 }} variant="h5">
					E deixe o seu email para receber um convite exclusivo para o HUB +Invest, onde você vai aprender
					tudo sobre investir!
				</Typography>

				<Grid container className={classes.emailInput}>
					<Grid item xs={9}>
						<TextField
							style={{ backgroundColor: 'white', borderRadius: 5 }}
							fullWidth
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							label="Email"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={2}>
						<NavLink to="/welcome" style={{ textDecoration: 'none' }}>
							<Button type="submit" className={classes.send}>
								<SendIcon style={{ color: '#3F942B' }} />
							</Button>
						</NavLink>
					</Grid>
				</Grid>
			</Paper>
		</Container>
	);
};

export default OramaEmail;
