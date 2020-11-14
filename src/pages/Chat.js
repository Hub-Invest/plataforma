import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppContainer from '../components/AppContainer';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import chatImage from '../assets/chatImage.png';

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

	main: {
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	aulas: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10
	},
	text: {
		marginTop: 15
	},
	subtitle: {
		marginLeft: 20
	},
	chat: {
		height: 400,
		width: 350,
		backgroundColor: 'lightgrey',
		borderRadius: 20,
		backgroundImage: chatImage
	},
	avatar: {
		marginRight: 10
	}
});

const Chat = () => {
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
						Já perguntou para o seu amigo como ele investe?
					</Typography>
					<Grid container className={classes.main}>
						<Grid className={classes.listaAulas} item xs={5}>
							<Typography className={classes.subtitle} variant="h6">
								Amigos
							</Typography>
							<div className={classes.aulas}>
								<Avatar className={classes.avatar}>A</Avatar>
								<Typography className={classes.text} variant="body2">
									Aline
								</Typography>
							</div>
							<div className={classes.aulas}>
								<Avatar className={classes.avatar}>R</Avatar>
								<Typography className={classes.text} variant="body2">
									Roberta
								</Typography>
							</div>
							<div className={classes.aulas}>
								<Avatar className={classes.avatar}>V</Avatar>
								<Typography className={classes.text} variant="body2">
									Da Vinci
								</Typography>
							</div>
							<div className={classes.aulas}>
								<Avatar className={classes.avatar}>S</Avatar>
								<Typography className={classes.text} variant="body2">
									Shakespeare
								</Typography>
							</div>
							<div className={classes.aulas}>
								<Avatar className={classes.avatar}>M</Avatar>
								<Typography className={classes.text} variant="body2">
									Michelangelo
								</Typography>
							</div>
							<div className={classes.aulas}>
								<Avatar className={classes.avatar}>D</Avatar>
								<Typography className={classes.text} variant="body2">
									Donatello
								</Typography>
							</div>
							<div className={classes.aulas}>
								<Avatar className={classes.avatar}>B</Avatar>
								<Typography className={classes.text} variant="body2">
									Botticelli
								</Typography>
							</div>
							<div className={classes.aulas}>
								<Avatar className={classes.avatar}>R</Avatar>
								<Typography className={classes.text} variant="body2">
									Rembrandt
								</Typography>
							</div>
						</Grid>
						<Grid item xs={7}>
							<img alt="chat" className={classes.chat} src={chatImage} />
						</Grid>
					</Grid>
				</Container>
			</AppContainer>
		</div>
	);
};

export default Chat;
