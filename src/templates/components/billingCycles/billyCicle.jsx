import React, { Component } from 'react'
import { bindActionCreators} from 'redux'
import { connect} from 'react-redux'

import {create,update,Delete,init} from './billyCyclesActions'
import ContentHeader from '../headerContent'
import Content from '../contentForm'
import Tabs from '../../tab/tabs'
import TabsHeader from '../../tab/tabsHeader'
import TabsContent from '../../tab/tabsContent'
import TabHeader from '../../tab/tabHeader'
import TabContent from '../../tab/tabContent'
import List from  './billingCyleList'
import Form from './billingCycleForm'
class BillingCycles extends Component {

    componentWillMount(){
            this.props.init()
    }
    render() {

        return (
            <div>
                <ContentHeader title="Ciclo de Pagamento" small="Versão 1.0" />

                <Content>

                    <Tabs>
                        <TabsHeader>
                            <TabHeader target="tbListar" icon="bars" label="listar" />
                            <TabHeader  target="tbAdicionar" icon="plus" label="Incluir" />
                            <TabHeader target="tbEditar"icon="pencil" label="Editar" />
                            <TabHeader  target="tbExcluir"icon="trash" label="Excluir" />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tbListar">
                                <List/>
                            </TabContent>
                            <TabContent id="tbAdicionar">
                                <Form submitLabel="Cadastrar" submitClass="primary"  onSubmit={this.props.create} />
                            </TabContent>
                            <TabContent id="tbEditar">
                                <Form  submitLabel="Editar" submitClass="info" onSubmit={this.props.update}/>
                            </TabContent>''
                            <TabContent id="tbExcluir"> 
                                <Form  submitLabel="Deletar" submitClass="danger" onSubmit={this.props.Delete} readyOnly={true} />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>

            </div>
        )

    }

}

const mapDispatchToProps = dispatch => bindActionCreators({create,init,update,Delete},dispatch)
export default connect(null,mapDispatchToProps)(BillingCycles);