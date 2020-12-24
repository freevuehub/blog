import { graphql } from 'gatsby'

export const queryofAllPostList = () => graphql`{
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
