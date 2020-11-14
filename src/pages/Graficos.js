import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppContainer from '../components/AppContainer';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import grafico from '../assets/grafico.png';
import minigraphs from '../assets/minigraphs.png';

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
	}
});

const Home = () => {
	const classes = useStyles();
	const [ searchInput, setSearchInput ] = useState('');

	return (
		<div className="classes.root">
			<AppContainer>
				<Container className={classes.container}>
					<form onSubmit={() => {}} className={classes.form}>
						<Grid container className={classes.item}>
							<Grid item xs={8}>
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
						Gráfico
					</Typography>

					<Grid item xs={12}>
						<img style={{ width: '100%' }} alt="grafico" src={grafico} />
					</Grid>
					<Grid item xs={12}>
						<img style={{ width: '100%', marginTop: 50 }} alt="grafico" src={minigraphs} />
					</Grid>
				</Container>
			</AppContainer>
		</div>
	);
};

export default Home;
