exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const data = await graphql(`
    query MyQuery {
      allCountriesInfoJson {
        edges {
          node {
            country
            institution {
              name
              about
            }
            intro
            findings
          }
        }
      }
    }
  `)
  const Country = require.resolve("./src/components/pages/partners/Country.js")

  data.data.allCountriesInfoJson.edges.forEach(edge => {
    createPage({
      path: `/partners/${edge.node.country}/`,
      component: Country,
      context: {
        country: edge.node.country,
        intro: edge.node.intro,
        institutionName: edge.node.institution.name,
        institutionAbout: edge.node.institution.about,
        findings: edge.node.findings,
      },
    })
  })
  const newsData = await graphql(`
  query {
    allContentfulNews {
      edges {
        node {
          slug
          author
          bodyNormal {
            bodyNormal
          }
          date
          institution
          newsTitle
          subtitle
        }
      }
    }
  }
  `)
  const Article = require.resolve("./src/components/pages/News/Article.js")
 
  newsData.data.allContentfulNews.edges.forEach(edge => {
    createPage({
      path: `/news/${edge.node.slug}/`,
      component: Article,
      context: {
        author: edge.node.author,
        title: edge.node.newsTitle,
        subtitle: edge.node.subtitle,
        date: edge.node.date,
        body: edge.node.bodyNormal.bodyNormal
      },
    })
  })
}



