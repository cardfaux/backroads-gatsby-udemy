import React from 'react';
import Title from '../Title.styled.component';
import { useStaticQuery, graphql } from 'gatsby';
import styles from '../../css/items.module.css';
import Tour from '../Tours/Tour.component';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const getFeaturedTours = graphql`
  query {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const FeaturedTours = () => {
  const response = useStaticQuery(getFeaturedTours);
  const tours = response.featuredTours.edges;

  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      <div className={styles.center}>
        {tours.map(({ node }) => {
          return <Tour key={node.contentful_id} tour={node} />;
        })}
      </div>
      <AniLink fade to="/tours" className="btn-primary">
        all tours
      </AniLink>
    </section>
  );
};

export default FeaturedTours;
