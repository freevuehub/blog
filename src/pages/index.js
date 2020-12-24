import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { FaAngleDoubleRight } from 'react-icons/fa'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/Card.jsx'
import Featured from '../components/featured'
import ContactMail from '../components/ContactMail'
import RightSidePostList from '../components/RightSidePostList'
import { queryofAllPostList } from '../gql'

const allArticlesMap = ({ node }, index) => {
  return 3 <= index && index < 10 ? (
    <Card
      key={node.id}
      slug={node.fields.slug}
      frontmatter={node.frontmatter}
    />
  ) : null
}
const IndexPage = (props) => {
  const data = useStaticQuery(graphql`{
    tagsGroup: allMarkdownRemark(limit: 100) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            category
            tags
            featuredPost
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }`
  )
  const { edges } = data.allMarkdownRemark
  const posts = edges.filter(({ node }) => {
    return node.frontmatter.featuredPost
  })

  return (
    <Layout>
      <SEO title="Home" slug="/" />
      <Featured list={posts} markdown={data.allMarkdownRemark} />
      <div className="flex-layout main">
        <div className="cards">
          <h2 id="articles-title">Articles</h2>
          {posts.map(allArticlesMap)}
          <Link to="/archive/2" id="archive-link">
            More Articles
            <FaAngleDoubleRight className="icon-right" />
          </Link>
        </div>
        <div className="sidebar">
          <ContactMail />
          <RightSidePostList title="Algorithm Posts" list={edges} />
        </div>
      </div>
      <br />
    </Layout>
  )
}

export default IndexPage
