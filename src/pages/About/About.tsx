import { Container } from "@chakra-ui/react";
import Navbar from "../../components/custom/Navbar/Navbar";
import EventDetails from "../../components/custom/EventDetails/EventDetails";
import TeamDetails from "../../components/custom/TeamDetails/TeamDetails";
import SEO from "../../components/custom/SEO/SEO";
import Footer from "../../components/custom/Footer/Footer";

const About = () => {
  return (
    <Container px={{ base: 4, md: 8 }} maxW="container.xl">
      <Navbar />
      <EventDetails />
      <TeamDetails />
      <SEO />
      <Footer scrollStatus={true} />
    </Container>
  );
};

export default About;
