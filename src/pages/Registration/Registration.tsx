import {
  Container,
  Grid,
  GridItem,
  Heading,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/custom/Navbar/Navbar";
import SEO from "../../components/custom/SEO/SEO";
import Footer from "../../components/custom/Footer/Footer";
import RegisterEventCard from "../../components/custom/RegisterEventCard/RegisterEventCard";
import { API_ENDPOINT } from "../../utils/constants";

function Registration() {
  const [seatsLeft, setSeatsLeft] = useState({
    figma: undefined,
    google_analytics: undefined,
  });

  const [loading, setLoading] = useState(true);

  const getSeatsLeft = async () => {
    try {
      const response = await axios.get(`${API_ENDPOINT}/workshop/seats`);
      setSeatsLeft(response.data.data);
    } catch (error) {
      console.log("Error while fetching seats left", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "auto";
    getSeatsLeft();
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);

  return (
    <>
      <Container maxW="100%" centerContent>
        <Navbar />

        {loading ? (
          <Center h="60vh">
            <Spinner size="xl" color="cyan.400" />
          </Center>
        ) : (
          <>
            {/* Competitions */}
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
              gap={{ base: 4, md: 6 }}
              justifyContent="center"
              placeItems="center"
              mb={10}
              mt={10}
              w="90%"
            >
              <GridItem colSpan={{ md: 3, base: 1 }}>
                <Heading
                  size={{ md: "6xl", base: "4xl" }}
                  textAlign="center"
                  filter="drop-shadow(0px 0px 0px gold) drop-shadow(0px 0px 2px gold)"
                  fontFamily="Iceland"
                  style={{ textDecoration: "underline" }}
                >
                  Competitions
                </Heading>
              </GridItem>
              {[
                {
                  title: "Boardroom Simulation",
                  link: "https://unstop.com/competitions/boardroom-battle-produx-iim-shillong-1399567",
                  image: "/images/Ocassion/boardroom.png",
                  external: true,
                },
                {
                  title: "Shillong Venture Clash",
                  link: "/register/venture-clash",
                  image: "/images/Ocassion/ecell.png",
                  external: false,
                },
                {
                  title: "Design Sync",
                  link: "https://unstop.com/competitions/design-sync-produx-iim-shillong-1399340",
                  image: "/images/Ocassion/design_sync.png",
                  external: true,
                },
              ].map((event, index) => (
                <GridItem
                  key={index}
                  colSpan={1}
                  mt={5}
                  display="flex"
                  justifyContent="center"
                >
                  <RegisterEventCard
                    image={event.image}
                    title={event.title}
                    redirectionLink={event.link}
                    external={event.external}
                  />
                </GridItem>
              ))}
            </Grid>

            {/* Workshops */}
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={{ base: 4, md: 6 }}
              justifyContent="center"
              placeItems="center"
              mb={10}
              mt={10}
              w="90%"
            >
              <GridItem colSpan={{ md: 3, base: 1 }}>
                <Heading
                  size={{ md: "6xl", base: "4xl" }}
                  textAlign="center"
                  filter="drop-shadow(0px 0px 0px gold) drop-shadow(0px 0px 2px gold)"
                  fontFamily="Iceland"
                  style={{ textDecoration: "underline" }}
                >
                  Workshops
                </Heading>
              </GridItem>
              {[
                {
                  title: "Figma Workshop",
                  link: "/register/figma",
                  image: "/images/Ocassion/figma.png",
                  external: false,
                  seatsLeft: seatsLeft.figma,
                },
                {
                  title: "Google Analytics Workshop",
                  link: "/register/google-analytics",
                  image: "/images/Ocassion/google-analytics.png",
                  external: false,
                  seatsLeft: seatsLeft.google_analytics,
                },
              ].map((event, index) => (
                <GridItem
                  key={index}
                  colSpan={1}
                  mt={5}
                  display="flex"
                  justifyContent="center"
                >
                  <RegisterEventCard
                    image={event.image}
                    title={event.title}
                    redirectionLink={event.link}
                    external={event.external}
                    seatsLeft={event.seatsLeft}
                  />
                </GridItem>
              ))}
            </Grid>

            {/* Webinar */}
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(1, 1fr)" }}
              gap={{ base: 4, md: 6 }}
              justifyContent="center"
              placeItems="center"
              mb={10}
              mt={10}
              w="90%"
            >
              <GridItem colSpan={{ md: 3, base: 1 }}>
                <Heading
                  size={{ md: "6xl", base: "4xl" }}
                  textAlign="center"
                  filter="drop-shadow(0px 0px 0px gold) drop-shadow(0px 0px 2px gold)"
                  fontFamily="Iceland"
                  style={{ textDecoration: "underline" }}
                >
                  Speaker Sessions
                </Heading>
              </GridItem>
              {[
                {
                  title: "Product Pioneers",
                  link: "/register/webinar",
                  image: "/images/Ocassion/product.png",
                  external: false,
                },
              ].map((event, index) => (
                <GridItem
                  key={index}
                  colSpan={1}
                  mt={5}
                  display="flex"
                  justifyContent="center"
                  ml={{ base: undefined, md: 10 }}
                >
                  <RegisterEventCard
                    image={event.image}
                    title={event.title}
                    redirectionLink={event.link}
                    external={event.external}
                  />
                </GridItem>
              ))}
            </Grid>

            {/* Quiz  */}
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(1, 1fr)" }}
              gap={{ base: 4, md: 6 }}
              justifyContent="center"
              placeItems="center"
              mb={10}
              mt={10}
              w="90%"
            >
              <GridItem colSpan={{ md: 3, base: 1 }}>
                <Heading
                  size={{ md: "6xl", base: "4xl" }}
                  textAlign="center"
                  filter="drop-shadow(0px 0px 0px gold) drop-shadow(0px 0px 2px gold)"
                  fontFamily="Iceland"
                  style={{ textDecoration: "underline" }}
                >
                  Informal Events
                </Heading>
              </GridItem>
              {[
                {
                  title: "bITeWars",
                  link: "/register/quiz",
                  image: "/images/Ocassion/quiz.png",
                  external: false,
                },
              ].map((event, index) => (
                <GridItem
                  key={index}
                  colSpan={1}
                  mt={5}
                  display="flex"
                  justifyContent="center"
                  ml={{ base: undefined, md: 10 }}
                >
                  <RegisterEventCard
                    image={event.image}
                    title={event.title}
                    redirectionLink={event.link}
                    external={event.external}
                  />
                </GridItem>
              ))}
            </Grid>
          </>
        )}

        <SEO />
      </Container>
      <Footer scrollStatus={true} />
    </>
  );
}

export default Registration;
