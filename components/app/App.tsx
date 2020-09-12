import React, { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { IAppProps } from './types'

class App extends Component<IAppProps> {
  constructor (props: IAppProps) {
    super(props)
  }

  render () {
    return (
      <div id="app">
        <Head>
          <title>{this.props.title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        
        { this.props.children }
      </div>
    )
  }
}

export default App
