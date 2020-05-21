import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../../auth/authActions'
class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }
    changeOpen() {
        this.setState({ open: !this.state.open })
    }
    render() {
        console.log(this.state)
        const { nome, email } = this.props.user.user
        return (
            <li className="nav-item">
                <a className="nav-link" data-toggle="dropdown" href="#">

                    {nome}
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <div className="card card-primary card-outline">
                        <div className="card-body box-profile">
                            <div className="text-center">
                                <img className="profile-user-img img-fluid img-circle"
                                    src="../../dist/img/user4-128x128.jpg"
                                    alt="User profile picture" />
                            </div>

                            <h3 className="profile-username text-center">{nome}</h3>

                            <p className="text-muted text-center">{email}</p>

                          

                            <a href="#" onClick={this.props.logout} className="btn btn-primary btn-block"><b>Sair</b></a>
                        </div>

                    </div>
                </div>

            </li>
        )
    }
}
const mapStateToProps = state => ({ user: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(Navbar)
