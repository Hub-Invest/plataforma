import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MediaCard from '../components/Card';
import financas1 from '../assets/financas1.jpg';
import financas2 from '../assets/financas2.jpg';
import financas3 from '../assets/financas3.jpg';
import financas4 from '../assets/financas4.jpg';
import financas5 from '../assets/financas5.jpg';
import sustentabilidade1 from '../assets/sustentabilidade1.jpg';
import sustentabilidade2 from '../assets/sustentabilidade2.jpg';
import sustentabilidade3 from '../assets/sustentabilidade3.png';
import sustentabilidade4 from '../assets/sustentabilidade4.jpg';
import sustentabilidade5 from '../assets/sustentabilidade5.jpg';
import { makeStyles } from '@material-ui/core/styles';

import AppContainer from '../components/AppContainer';

const useStyles = makeStyles({
	container: {
		padding: 40,
		display: 'flex',
		flexDirection: 'column'
	},

	title: {
		paddingTop: 20,
		paddingBottom: 20
	},

	cards: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	card: {
		paddingRight: 10
	}
});

const EmAlta = () => {
	const classes = useStyles();

	return (
		<div className="classes.root">
			<AppContainer>
				<Container className={classes.container}>
					<Typography className={classes.title} variant="h5">
						Em Alta
					</Typography>
					<Typography className={classes.title} variant="body1">
						Imóveis
					</Typography>

					<Grid className={classes.cards}>
						<Grid className={classes.card} item xs={3}>
							<MediaCard image={financas1} />
						</Grid>
						<Grid className={classes.card} item xs={3}>
							<MediaCard image={financas2} />
						</Grid>
						<Grid className={classes.card} item xs={3}>
							<MediaCard image={financas3} />
						</Grid>
						<Grid className={classes.card} item xs={3}>
							<MediaCard image={financas4} />
						</Grid>
						<Grid className={classes.card} item xs={3}>
							<MediaCard image={financas5} />
						</Grid>
					</Grid>
					<Typography className={classes.title} variant="body1">
						Sustentabilidade
					</Typography>

					<Grid className={classes.cards}>
						<Grid className={classes.card} item xs={3}>
							<MediaCard image={sustentabilidade1} />
						</Grid>
						<Grid className={classes.card} item xs={3}>
							<MediaCard image={sustentabilidade2} />
						</Grid>
						<Grid className={classes.card} item xs={3}>
							<MediaCard image={sustentabilidade3} />
						</Grid>
						<Grid className={classes.card} item xs={3}>
							<MediaCard image={sustentabilidade4} />
						</Grid>
						<Grid className={classes.card} item xs={3}>
							<MediaCard image={sustentabilidade5} />
						</Grid>
					</Grid>
				</Container>
			</AppContainer>
		</div>
	);
};

export default EmAlta;
