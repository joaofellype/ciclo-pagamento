import React, { Component } from 'react';

import { bindActionCreators} from 'redux'
import { connect } from "react-redux";
import { getList,showUpdate,showDelete } from "./billyCyclesActions";
class BillingCycleList extends Component {

    componentWillMount(){
        this.props.getList();
        console.log(this.props.list.billing)
    }
    renderRows(){
        const list =this.props.list.billing || [];
        return list.map(bc =>(
                <tr key={bc._id}>
                    <td>{bc.name}</td>
                    <td>{bc.month}</td>
                    <td>{bc.year}</td>
                    <td>
                        <button className="btn btn-warning" onClick={() =>this.props.showUpdate(bc)}>
                            <i className="fa fa-pencil"></i>
                        </button>                 
                        <button className="btn btn-danger" onClick={() =>this.props.showDelete(bc)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
        ))
    }
    render() {
        return (
            <div>
                        <div className="card-body table-responsive p-0">
                            <table className="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Mês</th>
                                        <th>Ano</th>
                                        <th className="table-actions">Ações</th>
                              
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderRows()}
                                </tbody>
                            </table>
                        </div>
                    </div>
           
          
        );
    }
}

const mapStateToProps =  state => ({list:state.billingCycle.list});
const mapDispatchToProps = dispatch => bindActionCreators({getList,showUpdate,showDelete},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(BillingCycleList)