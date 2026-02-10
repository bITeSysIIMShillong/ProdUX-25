import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import Navbar from "../../components/custom/Navbar/Navbar";
import Footer from "../../components/custom/Footer/Footer";
import { useEffect } from "react";

const sponsors = [
  {
    name: "PRIME Meghalaya",
    title: "Title Sponsor",
    image: "/images/sponsors/prime.png",
    isTitleSponsor: true,
  },
  {
    name: "Cesim Business Simulations",
    title: "Business Simulation Partner",
    image: "/images/sponsors/cesim.png",
    isTitleSponsor: false,
  },
  {
    name: "Product Space",
    title: "Case Partner",
    image: "/images/sponsors/product-space.jpeg",
    isTitleSponsor: false,
  },
];

const Sponsors = () => {
  useEffect(() => {
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);

  return (
    <>
      <Container maxW="100%" centerContent>
        <Navbar />
        <Box textAlign="center" mt={10} mb={10}>
          <Heading
            size={{ md: "6xl", base: "4xl" }}
            filter="drop-shadow(0px 0px 0px gold) drop-shadow(0px 0px 2px gold)"
            fontFamily="Iceland"
            textDecoration="underline"
          >
            Our Sponsors
          </Heading>
        </Box>

        {/* Title Sponsor */}
        {sponsors
          .filter((sponsor) => sponsor.isTitleSponsor)
          .map((sponsor, index) => (
            <VStack key={index} gap={4} textAlign="center" mb={10}>
              <Text fontSize={{ md: "5xl", base: "3xl" }} color="white.400">
                {sponsor.title}
              </Text>
              <Image
                src={sponsor.image}
                alt={sponsor.name}
                background="white"
              />
              <Text fontSize="2xl" fontWeight="bold" color="white">
                {sponsor.name}
              </Text>
            </VStack>
          ))}

        {/* Other Sponsors */}
        <Text fontSize={{ md: "4xl", base: "2xl" }} color="gray.300">
          Other Sponsors
        </Text>
        <HStack gap={10} justifyContent="center" wrap="wrap" mb={10}>
          {sponsors
            .filter((sponsor) => !sponsor.isTitleSponsor)
            .map((sponsor, index) => (
              <VStack key={index} gap={4} textAlign="center">
                <Image src={sponsor.image} alt={sponsor.name} />
                <Text fontSize="xl" fontWeight="bold" color="white">
                  {sponsor.name}
                </Text>
              </VStack>
            ))}
        </HStack>
      </Container>
      <Footer scrollStatus={true} />
    </>
  );
};

export default Sponsors;
