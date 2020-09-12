import React, { Component } from 'react'
import App from '../components/app/App'
import { IAppProps } from './../components/app/types'

interface IProps extends IAppProps {
  //
}

class LayoutBlank extends Component<IProps> {
  constructor (props: IProps) {
    super(props)
  }

  render () {
    return (
      <App title={ this.props.title }>
        <main>
          { this.props.children }
        </main>
      </App>
    )
  }
}

export default LayoutBlank
