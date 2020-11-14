import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as MaterialLink } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import logo from '../assets/logo.png';

const useStyles = makeStyles({
	paper: {
		display: 'flex',
		flexWrap: 'wrap',
		backgroundColor: '#8900D6',
		height: '100vh',
		borderRadius: 10
	},
	container: {
		marginTop: 20
	},
	drawer: {
		paddingLeft: 30,
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		color: 'white'
	},
	icon: {
		color: 'white'
	},
	selected: {
		color: '#8900D6',
		backgroundColor: 'white'
	},
	logo: {
		width: '100%'
	},
	logoContainer: {
		width: '90%',
		paddingRight: 10,
		paddingBottom: 50,
		alignItems: 'center',
		justifyContent: 'center'
	},
	contentPaper: {
		backgroundColor: 'white',
		height: '95%',
		width: '97%',
		borderRadius: 40
	},
	content: {
		// alignSelf: 'left',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'left'
	},
	listItem: {
		borderRadius: 20
	}
});

const AppContainer = ({ children }) => {
	const classes = useStyles();
	// const [ isDrawerOpen, setIsDrawerOpen ] = useState(true);
	return (
		<div className="classes.root">
			<Container className={classes.container}>
				<Paper className={classes.paper}>
					{/* {isDrawerOpen ? ( */}
					<Grid container>
						<Grid className={classes.drawer} item xs={12} sm={3} lg={2}>
							<div className={classes.logoContainer}>
								<img src={logo} className={classes.logo} alt="logo" />
							</div>
							<List component="nav">
								<ListItem component={Link} to="/" button className={classes.listItem}>
									<ListItemIcon>
										<HomeOutlinedIcon className={classes.icon} />
									</ListItemIcon>

									<ListItemText primary="Home" />
								</ListItem>
								<ListItem button component={Link} to="/emalta">
									<ListItemIcon>
										<FavoriteBorderOutlinedIcon className={classes.icon} />
									</ListItemIcon>
									<ListItemText primary="Em alta" />
								</ListItem>
								<ListItem button component={Link} to="/minicursos">
									<ListItemIcon>
										<MenuBookOutlinedIcon className={classes.icon} />
									</ListItemIcon>
									<ListItemText primary="Mini cursos" />
								</ListItem>
								<ListItem button component={Link} to="/graficos">
									<ListItemIcon>
										<InsertChartOutlinedIcon className={classes.icon} />
									</ListItemIcon>
									<ListItemText primary="Gráficos" />
								</ListItem>
								<ListItem button component={Link} to="/simulador">
									<ListItemIcon>
										<EditOutlinedIcon className={classes.icon} />
									</ListItemIcon>
									<ListItemText primary="Simulador de Investimentos" />
								</ListItem>
								<ListItem button component={Link} to="/chat">
									<ListItemIcon>
										<ForumOutlinedIcon className={classes.icon} />
									</ListItemIcon>
									<ListItemText primary="InvestorChat" />
								</ListItem>
								<ListItem button component={Link} to="/configuracoes">
									<ListItemIcon>
										<SettingsOutlinedIcon className={classes.icon} />
									</ListItemIcon>
									<ListItemText primary="Configurações" />
								</ListItem>
								<MaterialLink
									href="https://www.orama.com.br/"
									color="inherit"
									onClick={(e) => e.preventDefault}
								>
									<ListItem button>
										<ListItemIcon>
											<AccountBalanceOutlinedIcon className={classes.icon} />
										</ListItemIcon>
										<ListItemText primary="Quero investir!" />
									</ListItem>
								</MaterialLink>
							</List>
						</Grid>
						<Grid item className={classes.content} xs={1} sm={9} lg={10}>
							<Paper elevation={0} className={classes.contentPaper}>
								{children}
							</Paper>
						</Grid>
					</Grid>
					{/* ) : (
						<Grid>
							<Typography>Drawer is open</Typography>
						</Grid>
					)} */}
				</Paper>
			</Container>
		</div>
	);
};

export default AppContainer;
