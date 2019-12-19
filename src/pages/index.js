import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout.component';
import Banner from '../components/Banner.component';
import About from '../components/Home/About.component';
import Services from '../components/Home/Services.component';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import StyledHero from '../components/StyledHero';
import FeaturedTours from '../components/Home/FeaturedTours.component';

export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="Continue Exploring"
        info="We Are The Best World Wide Travel Company, Helping You Find Your Freedom"
      >
        <AniLink fade to="/tours" className="btn-white">
          Explore Tours
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedTours />
  </Layout>
);

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
