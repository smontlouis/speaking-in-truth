import React from 'react'
import Link from 'gatsby-link'
import glamorous from 'glamorous'

const Container = glamorous.div({
  background: 'blue'
})

const IndexPage = () => (
  <Container>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to='/page-2/'>Go to page 2</Link>
  </Container>
)

export default IndexPage
