import React from 'react';
import { Link } from 'react-router-dom';

import LoginForm from '../forms/LoginForm';

const LoginPage = () => (
<div>
  <h1>Login Page</h1>

<LoginForm submit={this.submit} />
</div>
);


export default LoginPage;
