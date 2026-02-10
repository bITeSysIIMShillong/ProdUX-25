import { Container, Grid, GridItem } from "@chakra-ui/react";
import { useEffect } from "react";
import Navbar from "../../components/custom/Navbar/Navbar";
import SEO from "../../components/custom/SEO/SEO";
import Footer from "../../components/custom/Footer/Footer";
import WorkshopInfoCard from "../../components/custom/Workshop/WorkshopInfoCard";
import QuizForm from "../../components/custom/QuizForm/QuizForm";

function RegisterQuiz() {
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
            imageSrc="/images/Ocassion/quiz.png"
            title="bITeWars"
            description="Think you're the ultimate trivia champ? 🧠🔥 Join us for a fun-filled quiz where every participant gets pizza 🍕 and winners take home awesome goodies! Bring your A-game (and your appetite)!"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <QuizForm />
        </GridItem>
      </Grid>
      <SEO />
      <Footer scrollStatus={true} />
    </Container>
  );
}

export default RegisterQuiz;
