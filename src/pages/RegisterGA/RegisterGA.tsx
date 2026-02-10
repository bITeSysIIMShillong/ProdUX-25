import { Container, Grid, GridItem } from "@chakra-ui/react";
import { useEffect } from "react";
import Navbar from "../../components/custom/Navbar/Navbar";
import SEO from "../../components/custom/SEO/SEO";
import Footer from "../../components/custom/Footer/Footer";
import WorkshopInfoCard from "../../components/custom/Workshop/WorkshopInfoCard";
import GoogleAnalyticsForm from "../../components/custom/Workshop/WorkshopForm";

function RegisterGA() {
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
            imageSrc="/images/Ocassion/google-analytics.png"
            title="Google Analytics Workshop"
            description="A hands-on session on Google Analytics, enabling participants to harness data for strategic decision-making and business insights."
          />
        </GridItem>
        <GridItem colSpan={1}>
          <GoogleAnalyticsForm workshopType="google_analytics" />
        </GridItem>
      </Grid>
      <SEO />
      <Footer scrollStatus={true} />
    </Container>
  );
}

export default RegisterGA;
