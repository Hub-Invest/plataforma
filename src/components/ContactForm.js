import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles({
	aulas: {
		marginBottom: 10,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	aula: {
		marginLeft: 20,
		backgroundColor: '#E613D5',
		borderRadius: 15,
		height: 30,
		width: 30,
		padding: 20,
		minHeight: 0,
		minWidth: 0,
		marginRight: 10
	},
	redes: {
		display: 'flex',
		flexDirection: 'row'
	}
});

const ContactForm = () => {
	const classes = useStyles();
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ telefone, setTelefone ] = useState('');
	const [ state, setState ] = useState('');
	return (
		<Container>
			<Typography variant="h5" style={{ marginTop: 50 }}>
				Informações de Contato
			</Typography>
			<Grid container>
				<Grid style={{ paddingRight: 15, marginTop: 20 }} item xs={6}>
					<TextField
						value={name}
						onChange={(e) => setName(e.target.value)}
						fullWidth
						label="Nome Completo"
						id="margin-none"
					/>
				</Grid>
				<Grid style={{ marginTop: 20 }} item xs={6}>
					<TextField
						fullWidth
						value={telefone}
						onChange={(e) => setTelefone(e.target.value)}
						label="Telefone"
						id="margin-none"
					/>
				</Grid>
				<Grid style={{ marginTop: 20 }} item xs={12}>
					<TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
				</Grid>
				<Grid style={{ marginTop: 20, paddingBottom: 60 }} item xs={12}>
					<TextField label="Estado" value={state} onChange={(e) => setState(e.target.value)} fullWidth />
				</Grid>
			</Grid>
			<Grid className={classes.redes} item xs={12}>
				<Typography variant="h6">Conecte às suas redes sociais</Typography>
				<div className={classes.aulas}>
					<Button type="submit" variant="contained" color="primary" className={classes.aula}>
						<TwitterIcon />
					</Button>
				</div>
				<div className={classes.aulas}>
					<Button type="submit" variant="contained" color="primary" className={classes.aula}>
						<InstagramIcon />
					</Button>
				</div>
				<div className={classes.aulas}>
					<Button type="submit" variant="contained" color="primary" className={classes.aula}>
						<MailOutlineIcon />
					</Button>
				</div>
				<div className={classes.aulas}>
					<Button type="submit" variant="contained" color="primary" className={classes.aula}>
						<FacebookIcon />
					</Button>
				</div>
			</Grid>
		</Container>
	);
};

export default ContactForm;
