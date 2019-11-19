import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

import history from '~/services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    console.tron.log('chego aqui');

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('Usuário não é um prestador de serviço');
      return;
    }

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na autenticação, verifique usuário e senha.');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
