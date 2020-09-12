import Link from 'next/link'
import LayoutDefault from './../layouts/LayoutDefault'
import React, { Component } from 'react'

class IndexPage extends Component {
  render () {
    return (
      <LayoutDefault title="Home | Next.js + TypeScript Example">
        <h1>Hello Next.js 👋</h1>
        <p>
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>
      </LayoutDefault>
    )
  }
}

export default IndexPage
