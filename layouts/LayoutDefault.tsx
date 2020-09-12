import React, { Component } from 'react'
import Link from 'next/link'
import App from '../components/app/App'
import { IAppProps } from './../components/app/types'

interface IProps extends IAppProps {
  //
}

class LayoutDefault extends Component<IProps> {
  constructor (props: IProps) {
    super(props)
  }

  render () {
    return (
      <App title={ this.props.title }>
        <header>
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>{' '}
            |{' '}
            <Link href="/about">
              <a>About</a>
            </Link>{' '}
            |{' '}
            <Link href="/users">
              <a>Users List</a>
            </Link>{' '}
            | <a href="/api/users">Users API</a>
          </nav>
        </header>

        <main>
          { this.props.children }
        </main>
        
        <footer>
          <hr />
          <span>I'm here to stay (Footer)</span>
        </footer>
      </App>
    )
  }
}

export default LayoutDefault
