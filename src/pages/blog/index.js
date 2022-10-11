import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <h5 className="total--post-count">
        Total Post: {data.allMdx.totalCount}
      </h5>
      {data.allMdx.nodes.map((node) => (
        <article className="post--card" key={node.id}>
          <h4 className="post--title">
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h4>
          <p className="post--body">{node.excerpt}</p>
          <p className="post--date">Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "D, MMMM, YYYY")
          title
          slug
        }
        id
        excerpt
      }
      totalCount
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
