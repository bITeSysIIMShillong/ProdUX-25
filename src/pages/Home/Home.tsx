import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Highlight,
} from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "../../components/custom/Navbar/Navbar";
import Bokeh from "../../components/custom/Bokeh/Bokeh";
import Pacman from "../../components/custom/Loaders/Pacman";
import SEO from "../../components/custom/SEO/SEO";
import Footer from "../../components/custom/Footer/Footer";

function Home() {
  const [loading, setLoading] = useState(false);
  setTimeout(() => setLoading(true), 2500);

  if (!loading)
    return (
      <>
        <Pacman />
        <SEO />
      </>
    );
  return (
    <>
      <SEO />
      <Navbar />
      <Container px={{ base: 4, md: 8 }}>
        <Bokeh />
        <Grid
          templateRows="repeat(3, 1fr)"
          height={{ base: "calc(100vh - 350px)", md: "calc(100vh - 250px)" }}
          width="100%"
          gap={4}
        >
          <GridItem></GridItem>
          <GridItem
            display="flex"
            justifyContent={{ base: "center", md: "center" }}
          >
            <Box
              textAlign={{ base: "center", md: "left" }}
              gap={10}
              style={{
                position: "relative",
                zIndex: 1,
                mixBlendMode: "normal",
              }}
            >
              <Heading
                fontSize={{ base: "6xl", md: "9xl" }}
                fontWeight="bold"
                lineHeight="shorter"
                textAlign="center"
                fontFamily="Iceland"
              >
                <Highlight
                  query="ProdUX'25"
                  styles={{
                    color: "cyan",
                    filter:
                      "drop-shadow(0px 0px 0px cyan) drop-shadow(0px 0px 2px cyan)",
                  }}
                >
                  Welcome to ProdUX'25
                </Highlight>
              </Heading>
              <Heading
                fontSize={{ base: "4xl", md: "6xl" }}
                fontWeight="semibold"
                lineHeight="tall"
                textAlign="center"
                fontFamily="Iceland"
              >
                <Highlight
                  query="Tech & Business"
                  styles={{
                    color: "cyan",
                    filter:
                      "drop-shadow(0px 0px 0px cyan) drop-shadow(0px 0px 2px cyan)",
                  }}
                >
                  An Amalgamation of Tech & Business
                </Highlight>
              </Heading>
              <Heading
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="normal"
                lineHeight="taller"
                fontStyle="italic"
                textAlign="center"
                fontFamily="Iceland"
              >
                19th to 25th February, 2025
              </Heading>
            </Box>
          </GridItem>
          <GridItem></GridItem>
        </Grid>
        <Footer scrollStatus={false} />
      </Container>
    </>
  );
}

export default Home;
