import createDataContext from './createDataContext';
import dianurseApi from '../api/dianurseApi';

const authReducer = (state, action) => {
	switch (action.type) {
		case 'set_dialog_message':
			return { ...state, dialogMessage: action.payload, messageDialogOpen: true };
		case 'close_dialog':
			return { ...state, dialogMessage: '', messageDialogOpen: false };
		case 'signin':
			return { ...state, token: action.payload, errorMessage: '' };
		case 'add_error':
			return { ...state, dialogMessage: action.payload, messageDialogOpen: true };
		case 'clear_error_message':
			return { ...state, errorMessage: '' };
		case 'signout':
			return { token: null, errorMessage: '' };
		default:
			return state;
	}
};

//only if the token lasts for a while:

// const tryLocalSignin = (dispatch) => async () => {
// 	const token = await localStorage.getItem('token');
// 	const history = useHistory();
// 	if (token) {
// 		dispatch({ type: 'signin', payload: token });
// 	} else {
// 		history.push('/');
// 		console.log('you must sign in ');
// 	}
// };

const clearErrorMessage = (dispatch) => () => {
	dispatch({ type: 'clear_error_message' });
};

const signup = (dispatch) => {
	return async ({ email, amIHCP }) => {
		try {
			const response = await dianurseApi.post('/account/register', {
				email,
				amIHCP,
				password: 'Teste1234_',
				preferredLang: 'en'
				// 'X-DEVICE-TYPE': 'desktop'
			});

			console.log(response);

			//TODO: encript decript sensitive data
			//save userID in local storage and say whether you are a doctor or not (amIHCP)

			// await localStorage.setItem('token', response.data.token);
			dispatch({ type: 'set_dialog_message', payload: response.data });
		} catch (err) {
			console.log(err.message);
			dispatch({ type: 'add_error', payload: err.message });
		}
	};
};

const signin = (dispatch) => {
	return async ({ email, password }) => {
		// console.log('inside signin auth context');
		try {
			const response = await dianurseApi.post('/account/login', {
				email,
				password
			});
			console.log(response);

			//TODO: how to encript? (ex: keychain)
			const user = {
				amIHCP: response.data.amIHCP,
				token: response.data.token,
				userId: response.data.userId
			};
			// console.log(user);
			await localStorage.setItem('user', JSON.stringify(user));
			dispatch({ type: 'signin', payload: response.data.token });
		} catch (err) {
			dispatch({
				type: 'add_error',
				payload: err.message
			});
		}
	};
};

const signout = (dispatch) => async () => {
	await localStorage.removeItem('token');
	dispatch({ type: 'signout' });
};

const recoverPassword = (dispatch) => async ({ email }) => {
	try {
		const response = await dianurseApi.post('/account/passwordrecovery', { email });
		dispatch({ type: 'set_dialog_message', payload: response.data });
	} catch (err) {
		dispatch({
			type: 'add_error',
			payload: err.message
		});
	}
};

const closeDialog = (dispatch) => () => {
	dispatch({ type: 'close_dialog' });
};

export const { Provider, Context } = createDataContext(
	authReducer,
	{ signin, signout, signup, clearErrorMessage, recoverPassword, closeDialog },
	{ token: null, errorMessage: '', dialogMessage: '', messageDialogOpen: false }
);
