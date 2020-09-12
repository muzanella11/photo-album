import Link from 'next/link'
import LayoutDefault from './../layouts/LayoutDefault'
import React, { Component } from 'react'

class AboutPage extends Component {
  render () {
    return (
      <LayoutDefault title="About | Next.js + TypeScript Example">
        <h1>About</h1>
        <p>This is the about page</p>
        <p>
          <Link href="/">
            <a>Go home</a>
          </Link>
        </p>
      </LayoutDefault>
    )
  }
}

export default AboutPage

