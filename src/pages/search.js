import React from 'react'
import { navigate, useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Search from '../components/search'

const SearchPage = (props) => {
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
  const [queryType, query] = props.location.search.split("=")

  if (!(queryType === "?word" && query.length > 0)) {
    navigate('/')

    return <></>
  }

  return (
    <Layout>
      <SEO title={`${query} : 검색`} slug="/search" />
      <Search
        markdown={data.allMarkdownRemark}
        tagsGroup={data.tagsGroup}
        query={query}
      />
    </Layout>
  )
}

export default SearchPage
