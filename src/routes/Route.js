import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import store from '~/store';

import AuthLayout from '~/pages/_Layout/auth';
import DefaultLayout from '~/pages/_Layout/default';

export default function RouterWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) return <Redirect to="/" />;

  if (signed && !isPrivate) return <Redirect to="/dasboard" />;

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouterWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouterWrapper.defaultProps = {
  isPrivate: false,
};
