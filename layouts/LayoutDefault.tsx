import React, { Component } from 'react'
import { IAppProps } from './../components/app/types'
import Link from 'next/link'
import App from '../components/app/App'
import Header from '../components/header/Header'
import { IHeaderEntries } from '../components/header/types'

interface IProps extends IAppProps {
  //
}

interface IState {
  menus?: Array<IHeaderEntries>
}

class LayoutDefault extends Component<IProps, IState> {
  constructor (props: IProps) {
    super(props)
  }

  state = {
    menus: []
  }

  render () {
    return (
      <App title={ this.props.title }>
        <Header entries={ this.state.menus }></Header>

        <main>
          { this.props.children }
        </main>
      </App>
    )
  }
}

export default LayoutDefault
