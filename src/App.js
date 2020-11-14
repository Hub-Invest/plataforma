import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './pages/Home';
import './App.css';
import Poppins from 'typeface-poppins';

const THEME = createMuiTheme({
	typography: {
		fontFamily: 'Poppins'
	}
});

function App() {
	return (
		<ThemeProvider theme={THEME}>
			<div className="App">
				<Home />
			</div>
		</ThemeProvider>
	);
}

export default App;
