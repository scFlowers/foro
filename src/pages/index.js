import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  <div>
  {data.allMarkdownRemark.edges.map(({mode})=> (
  <div> {node.frontmatter.title}</h1>
  <p>{node.excerpt}</p>
  </div>
  ))}
  </div>
)

export default IndexPage
query HomePageQuery{
allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
totalCount
edges {
node {
id
fields {
slug
}
frontmatter {
title
date
author
}
excerpt(pruneLength: 80)
timeToRead
}
}
}
}
