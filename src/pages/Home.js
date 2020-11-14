import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppContainer from '../components/AppContainer';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	container: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column'
	},

	item: {
		paddingTop: 30,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	submit: {
		marginLeft: 20,
		backgroundColor: '#E613D5',
		borderRadius: 15,
		height: 50,
		width: 50
	}
});

const Home = () => {
	const classes = useStyles();
	const [ searchInput, setSearchInput ] = useState('');

	return (
		<div className="classes.root">
			<AppContainer>
				<Container>
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
					<Typography variant="h4">Dica do Dia</Typography>
					<div>Home</div>
				</Container>
			</AppContainer>
		</div>
	);
};

export default Home;
