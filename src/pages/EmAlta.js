import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
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
import info from '../assets/info.png';
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
	},
	backButton: {
		marginLeft: 20,
		backgroundColor: '#E613D5',
		borderRadius: 15,
		height: 40,
		width: 40,
		minHeight: 0,
		minWidth: 0
	}
});

const EmAlta = () => {
	const classes = useStyles();
	const [ isInfoOpen, setIsInfoOpen ] = useState(false);

	return (
		<div className="classes.root">
			<AppContainer>
				<Container className={classes.container}>
					{isInfoOpen ? (
						<div>
							<Button
								variant="contained"
								onClick={() => setIsInfoOpen(false)}
								color="primary"
								className={classes.backButton}
							>
								<ArrowBackIosIcon />
							</Button>
							<Typography className={classes.title} variant="h3">
								Kinea
							</Typography>
							<img alt="info" src={info} style={{ width: '100%' }} />
						</div>
					) : (
						<div>
							<Typography className={classes.title} variant="h5">
								Em Alta
							</Typography>
							<Typography className={classes.title} variant="body1">
								Imóveis
							</Typography>

							<Grid className={classes.cards}>
								<Grid className={classes.card} item xs={3}>
									<MediaCard image={financas1} text="Credit Suisse" />
								</Grid>
								<Grid className={classes.card} item xs={3}>
									<MediaCard image={financas2} text="BTG Pactual" />
								</Grid>
								<Grid
									className={classes.card}
									onClick={() => {
										setIsInfoOpen(true);
									}}
									item
									xs={3}
								>
									<MediaCard image={financas3} text="Kinea" />
								</Grid>
								<Grid className={classes.card} item xs={3}>
									<MediaCard image={financas4} text="HSI Malls" />
								</Grid>
								<Grid className={classes.card} item xs={3}>
									<MediaCard image={financas5} text="Cyrela" />
								</Grid>
							</Grid>
							<Typography className={classes.title} variant="body1">
								Sustentabilidade
							</Typography>

							<Grid className={classes.cards}>
								<Grid className={classes.card} item xs={3}>
									<MediaCard image={sustentabilidade1} text="Natura" />
								</Grid>
								<Grid className={classes.card} item xs={3}>
									<MediaCard image={sustentabilidade2} text="Unilever" />
								</Grid>
								<Grid className={classes.card} item xs={3}>
									<MediaCard image={sustentabilidade3} text="Nestlé" />
								</Grid>
								<Grid className={classes.card} item xs={3}>
									<MediaCard image={sustentabilidade4} text="Samsung" />
								</Grid>
								<Grid className={classes.card} item xs={3}>
									<MediaCard image={sustentabilidade5} text="Ekofootprint" />
								</Grid>
							</Grid>
						</div>
					)}
				</Container>
			</AppContainer>
		</div>
	);
};

export default EmAlta;
