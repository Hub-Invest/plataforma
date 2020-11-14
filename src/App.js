import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './pages/Home';
import EmAlta from './pages/EmAlta';
import MiniCursos from './pages/MiniCursos';
import Graficos from './pages/Graficos';
import Simulador from './pages/Simulador';
import Chat from './pages/Chat';
import Configuracoes from './pages/Configuracoes';
import './App.css';

const THEME = createMuiTheme({
	typography: {
		fontFamily: 'Poppins'
	}
});

const App = () => {
	return (
		<ThemeProvider theme={THEME}>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/emalta" exact component={EmAlta} />
					<Route path="/minicursos" exact component={MiniCursos} />
					<Route path="/graficos" exact component={Graficos} />
					<Route path="/simulador" exact component={Simulador} />
					<Route path="/chat" exact component={Chat} />
					<Route path="/configuracoes" exact component={Configuracoes} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
};

export default App;
