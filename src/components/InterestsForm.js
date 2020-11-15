import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import RadioGroup from '@material-ui/core/RadioGroup';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
	interesses: {
		height: 150,
		backgroundColor: 'lightgrey',
		padding: 10,
		margin: 10,
		borderRadius: 20,
		width: '70%'
	}
});
function valuetext(value) {
	return `R$${value}00`;
}

const InterestsForm = () => {
	const classes = useStyles();
	const [ state, setState ] = useState({
		checkedA: true,
		checkedB: false,
		checkedC: true,
		checkedD: false,
		checkedE: true,
		checkedF: false,
		checkedG: false,
		checkedH: true,
		checkedI: false,
		checkedJ: false,
		checkedK: true
	});
	const [ value, setValue ] = useState('sim');

	const handleRadioChange = (event) => {
		setValue(event.target.value);
	};

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};
	return (
		<Container>
			<Typography variant="h5" style={{ marginTop: 50 }}>
				Interesses
			</Typography>
			<Typography variant="body2" style={{ marginTop: 10 }}>
				Esse paço vai nos ajudar a entender quais investimentos serão mais interessantes para você
			</Typography>
			<Typography variant="h6" style={{ marginTop: 10 }}>
				Tem interesse em investir em investimentos relacionados a ações sociais?{' '}
			</Typography>
			<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleRadioChange}>
				<FormControlLabel value="female" control={<Radio />} label="Sim" />
				<FormControlLabel value="male" control={<Radio />} label="Não" />
			</RadioGroup>
			<Grid container>
				<div>
					<Typography variant="h6" style={{ marginTop: 10 }}>
						Se sim, o que te interessa?
					</Typography>
					<FormGroup row>
						<Grid container>
							<Grid item style={{ width: '100%' }} xs={3}>
								<FormControlLabel
									className={classes.interesses}
									control={
										<Checkbox checked={state.checkedA} name="checkedA" onChange={handleChange} />
									}
									label="Aposentadoria"
									labelPlacement="bottom"
								/>
							</Grid>
							<Grid item xs={3}>
								<FormControlLabel
									className={classes.interesses}
									control={
										<Checkbox checked={state.checkedB} name="checkedB" onChange={handleChange} />
									}
									label="Uma viagem"
									labelPlacement="bottom"
								/>
							</Grid>
							<Grid item xs={3}>
								<FormControlLabel
									className={classes.interesses}
									control={
										<Checkbox checked={state.checkedC} name="checkedC" onChange={handleChange} />
									}
									label="Comprar um carro"
									labelPlacement="bottom"
								/>
							</Grid>
							<Grid item xs={3}>
								<FormControlLabel
									className={classes.interesses}
									control={
										<Checkbox checked={state.checkedD} name="checkedD" onChange={handleChange} />
									}
									label="Comprar uma casa"
									labelPlacement="bottom"
								/>
							</Grid>
						</Grid>
						<Grid container>
							<Grid item style={{ width: '100%' }} xs={3}>
								<FormControlLabel
									className={classes.interesses}
									control={
										<Checkbox checked={state.checkedE} name="checkedE" onChange={handleChange} />
									}
									label="Aposentadoria"
									labelPlacement="bottom"
								/>
							</Grid>
							<Grid item xs={3}>
								<FormControlLabel
									className={classes.interesses}
									control={
										<Checkbox checked={state.checkedF} name="checkedF" onChange={handleChange} />
									}
									label="Uma viagem"
									labelPlacement="bottom"
								/>
							</Grid>
							<Grid item xs={3}>
								<FormControlLabel
									className={classes.interesses}
									control={
										<Checkbox checked={state.checkedG} name="checkedG" onChange={handleChange} />
									}
									label="Comprar um carro"
									labelPlacement="bottom"
								/>
							</Grid>
							<Grid item xs={3}>
								<FormControlLabel
									className={classes.interesses}
									control={
										<Checkbox checked={state.checkedH} name="checkedH" onChange={handleChange} />
									}
									label="Comprar uma casa"
									labelPlacement="bottom"
								/>
							</Grid>
						</Grid>
					</FormGroup>
				</div>
			</Grid>
		</Container>
	);
};

export default InterestsForm;
