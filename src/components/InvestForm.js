import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function valuetext(value) {
	return `R$${value}00`;
}

const InvestForm = () => {
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
	const [ value, setValue ] = useState([ 25, 87 ]);

	const handleSliderChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};
	return (
		<Container>
			<Typography variant="h5" style={{ marginTop: 50 }}>
				Perfil do Investidor
			</Typography>
			<Typography variant="body2" style={{ marginTop: 10 }}>
				Nos conte um pouco sobre você
			</Typography>
			<Typography variant="body1" style={{ marginTop: 10 }}>
				Quero investir para:
			</Typography>
			<Grid container>
				<div>
					<FormGroup row>
						<FormControlLabel
							control={<Checkbox checked={state.checkedA} name="checkedA" onChange={handleChange} />}
							label="Aposentadoria"
						/>
						<FormControlLabel
							control={<Checkbox checked={state.checkedB} name="checkedB" onChange={handleChange} />}
							label="Uma viagem"
						/>
						<FormControlLabel
							control={<Checkbox checked={state.checkedC} name="checkedC" onChange={handleChange} />}
							label="Comprar um carro"
						/>
						<FormControlLabel
							control={<Checkbox checked={state.checkedD} name="checkedD" onChange={handleChange} />}
							label="Comprar uma casa"
						/>
						<FormControlLabel
							control={<Checkbox checked={state.checkedE} name="checkedE" onChange={handleChange} />}
							label="Dominar o mundo"
						/>
						<FormControlLabel
							control={<Checkbox checked={state.checkedF} name="checkedF" onChange={handleChange} />}
							label="Não sei"
						/>
					</FormGroup>
				</div>
			</Grid>
			<Typography variant="body1" style={{ marginTop: 10 }}>
				Já investiu antes?
			</Typography>
			<Grid container>
				<div style={{ width: '100%' }}>
					<FormGroup row style={{ justifyContent: 'space-around' }}>
						<FormControlLabel
							control={<Checkbox checked={state.checkedG} name="checkedG" onChange={handleChange} />}
							label="Sim"
						/>
						<FormControlLabel
							control={<Checkbox checked={state.checkedH} name="checkedH" onChange={handleChange} />}
							label="Não"
						/>
					</FormGroup>
				</div>
			</Grid>
			<Typography variant="body1" style={{ marginTop: 10 }}>
				Quanto pretende investir esse ano?
			</Typography>
			<Slider
				value={value}
				// label={valuetext}
				onChange={handleSliderChange}
				valueLabelDisplay="auto"
				aria-labelledby="range-slider"
				getAriaValueText={valuetext}
			/>
			<Typography variant="body1" style={{ marginTop: 10 }}>
				Como se sentiria se perdesse dinheiro em um investimento?
			</Typography>
			<Grid container>
				<div style={{ width: '100%' }}>
					<FormGroup row style={{ justifyContent: 'space-between' }}>
						<FormControlLabel
							control={<Checkbox checked={state.checkedI} name="checkedI" onChange={handleChange} />}
							label="Péssimo"
						/>
						<FormControlLabel
							control={<Checkbox checked={state.checkedJ} name="checkedJ" onChange={handleChange} />}
							label="Fico chateado"
						/>
						<FormControlLabel
							control={<Checkbox checked={state.checkedK} name="checkedK" onChange={handleChange} />}
							label="No risk, no reward"
						/>
					</FormGroup>
				</div>
			</Grid>
		</Container>
	);
};

export default InvestForm;
