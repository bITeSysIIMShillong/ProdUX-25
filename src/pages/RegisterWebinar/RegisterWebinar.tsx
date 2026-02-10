import { Container, Grid, GridItem } from "@chakra-ui/react";
import { useEffect } from "react";
import Navbar from "../../components/custom/Navbar/Navbar";
import SEO from "../../components/custom/SEO/SEO";
import Footer from "../../components/custom/Footer/Footer";
import WorkshopInfoCard from "../../components/custom/Workshop/WorkshopInfoCard";
import WebinarForm from "../../components/custom/WebinarForm/WebinarForm";

function RegisterWebinar() {
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
            imageSrc="/images/Ocassion/product.png"
            title="Product Pioneers Webinar"
            description="An exclusive session with a Google Product Manager, providing insights on breaking into Product Management, career growth, and industry best practices."
          />
        </GridItem>
        <GridItem colSpan={1}>
          <WebinarForm />
        </GridItem>
      </Grid>
      <SEO />
      <Footer scrollStatus={true} />
    </Container>
  );
}

export default RegisterWebinar;
