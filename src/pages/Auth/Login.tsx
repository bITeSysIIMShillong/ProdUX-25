import { Container } from "@chakra-ui/react";
import { useEffect } from "react";
import Navbar from "../../components/custom/Navbar/Navbar";
import SEO from "../../components/custom/SEO/SEO";
import Footer from "../../components/custom/Footer/Footer";
import LoginForm from "../../components/custom/Auth/Login";

function Login() {
  useEffect(() => {
    document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);
  return (
    <Container fluid>
      <Navbar />
      <LoginForm />
      <SEO />
      <Footer scrollStatus={true} />
    </Container>
  );
}

export default Login;
