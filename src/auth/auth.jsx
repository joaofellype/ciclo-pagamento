import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login, signup } from './authActions'

import Grid from '../templates/layout/grid'
import If from '../templates/operator/if'
import Messages from '../templates/msg/message'
import Input from '../templates/form/inputAuth'

class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = { loginMode: true }
  }
  changeMode() {
    this.setState({ loginMode: !this.state.loginMode })
  }
  onSubmit(values) {
    const { login, signup } = this.props
    this.state.loginMode ? login(values) : signup(values)
  }
  render() {
    console.log(this)
    const { loginMode } = this.state
    const { handleSubmit } = this.props
    return (
      <div className="login-box">
        <div className="login-logo">
          <a><b>My</b>Money</a>
        </div>

        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Faça o  login para Iniciar Sessão</p>

            <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
              <Field type="input" component={Input} placeholder="Insira seu nome" icon="user" name="nome" hide={loginMode} />
              <Field type="email" component={Input} placeholder="Insira seu Email" icon="envelope" name="email"  />
              <Field type="password" component={Input} placeholder="Insira sua Senha" icon="lock" name="password"  />
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">
                      Lembrar -me
              </label>
                  </div>
                </div>
                <div className="col-4">
    <button type="submit" className="btn btn-primary btn-block">{login ? 'Entrar':'Registrar'}</button>
                </div>
              </div>
            </form>

            <p className="mb-1">
              <a>Lembrar Senha</a>
            </p>
            <p className="mb-0">
    <a onClick={() => this.changeMode()} className="text-center">{loginMode ? 'Novo Usuario? Registre Aqui':'faca o login'}</a>
            </p>
          </div>
        </div>
        <Messages/>
      </div>
    )
  }
}
Auth = reduxForm({ form: 'authForm' })(Auth)
const mapDispatchToProps = dispatch => bindActionCreators({ login, signup },
  dispatch)
export default connect(null, mapDispatchToProps)(Auth)