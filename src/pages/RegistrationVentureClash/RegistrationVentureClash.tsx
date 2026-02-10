import { Container, Grid, GridItem } from "@chakra-ui/react";
import { useEffect } from "react";
import Navbar from "../../components/custom/Navbar/Navbar";
import SEO from "../../components/custom/SEO/SEO";
import Footer from "../../components/custom/Footer/Footer";
import VentureClashForm from "../../components/custom/VentureClashForm/VentureClashForm";
import WorkshopInfoCard from "../../components/custom/Workshop/WorkshopInfoCard";

function RegistrationVentureClash() {
  useEffect(() => {
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);
  return (
    <Container fluid>
      <Navbar />
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={{ base: 2, md: 1 }}
        alignContent="center"
      >
        <GridItem colSpan={1}>
          <WorkshopInfoCard
            imageSrc="/images/Ocassion/ecell.png"
            title="Shillong Venture Clash"
            description="A high-impact entrepreneurial challenge where participants, guided by industry experts, conceptualize startups, develop business models, and compete for virtual funding."
          />
        </GridItem>
        <GridItem colSpan={1}>
          <VentureClashForm />
        </GridItem>
      </Grid>
      <SEO />
      <Footer scrollStatus={true} />
    </Container>
  );
}

export default RegistrationVentureClash;
