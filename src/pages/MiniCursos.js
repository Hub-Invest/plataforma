import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppContainer from '../components/AppContainer';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import EuroIcon from '@material-ui/icons/Euro';
import MediaCard from '../components/Card';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

import financas3 from '../assets/financas3.jpg';

const useStyles = makeStyles({
	container: {
		padding: 40,
		display: 'flex',
		flexDirection: 'column'
	},

	item: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	submit: {
		marginLeft: 20,
		backgroundColor: '#E613D5',
		borderRadius: 15,
		height: 50,
		width: 50
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
	title: {
		paddingTop: 20,
		paddingBottom: 20
	},
	video: {
		marginRight: 30,
		backgroundColor: 'grey',
		height: '100%'
	},
	cards: {
		marginTop: 30,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	main: {
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	aulas: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	text: {
		marginTop: 15
	},
	subtitle: {
		marginLeft: 20
	}
});

const MiniCursos = () => {
	const classes = useStyles();
	const [ searchInput, setSearchInput ] = useState('');

	return (
		<div className="classes.root">
			<AppContainer>
				<Container className={classes.container}>
					<form onSubmit={() => {}} className={classes.form}>
						<Grid container className={classes.item}>
							<Grid item xs={9}>
								<TextField
									fullWidth
									type="search"
									required
									value={searchInput}
									onChange={(e) => setSearchInput(e.target.value)}
									label="Search"
									variant="outlined"
								/>
							</Grid>
							<Grid item xs={2}>
								<Button type="submit" variant="contained" color="primary" className={classes.submit}>
									<SearchIcon />
								</Button>
							</Grid>
						</Grid>
					</form>
					<Typography className={classes.title} variant="h5">
						Curso - Por onde eu começo?
					</Typography>
					<Grid container className={classes.main}>
						<Grid item xs={7}>
							<MediaCard image={financas3} />
						</Grid>
						<Grid className={classes.listaAulas} item xs={4}>
							<Typography className={classes.subtitle} variant="h6">
								Aulas
							</Typography>
							<div className={classes.aulas}>
								<Button type="submit" variant="contained" color="primary" className={classes.aula}>
									<MonetizationOnIcon />
								</Button>
								<Typography className={classes.text} variant="body2">
									O que é o Tesouro Direto?
								</Typography>
							</div>
							<div className={classes.aulas}>
								<Button type="submit" variant="contained" color="primary" className={classes.aula}>
									<AccountBalanceWalletIcon />
								</Button>
								<Typography className={classes.text} variant="body2">
									Como usar a plataforma
								</Typography>
							</div>
							<div className={classes.aulas}>
								<Button type="submit" variant="contained" color="primary" className={classes.aula}>
									<MoneyOffIcon />
								</Button>
								<Typography className={classes.text} variant="body2">
									Quanto devo investir
								</Typography>
							</div>
							<div className={classes.aulas}>
								<Button type="submit" variant="contained" color="primary" className={classes.aula}>
									<EuroIcon />
								</Button>
								<Typography className={classes.text} variant="body2">
									Quais as minhas opções
								</Typography>
							</div>
							<div className={classes.aulas}>
								<Button type="submit" variant="contained" color="primary" className={classes.aula}>
									<LocalAtmIcon />
								</Button>
								<Typography className={classes.text} variant="body2">
									Entendendo o meu perfil
								</Typography>
							</div>
						</Grid>
					</Grid>
					<Typography variant="h6">Aula 6 - Quanto devo investir?</Typography>
					<Typography variant="body2" style={{ marginTop: 20 }}>
						Upswing credit quality private financial health managed exchange traded funds issuer junk bonds
						public gains securities taxpayer money rollover. Municipal bonds economy income rollover Dow
						Jones federal money yield term volatile.
					</Typography>
				</Container>
			</AppContainer>
		</div>
	);
};

export default MiniCursos;
