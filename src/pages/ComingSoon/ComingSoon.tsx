import { Container } from "@chakra-ui/react";
import Navbar from "../../components/custom/Navbar/Navbar";
import CountdownTimer from "../../components/custom/Countdown/Countdown";
import SEO from "../../components/custom/SEO/SEO";
import Footer from "../../components/custom/Footer/Footer";

function ComingSoon() {
  const eventDate = new Date(2025, 1, 12, 10);
  return (
    <Container fluid>
      <Navbar />
      <CountdownTimer eventDate={eventDate.toISOString()} />
      <SEO />
      <Footer scrollStatus={false} />
    </Container>
  );
}

export default ComingSoon;
