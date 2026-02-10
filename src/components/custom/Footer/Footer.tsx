import {
  Box,
  Grid,
  GridItem,
  Text,
  Link,
  Icon,
  Image,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

interface FooterProps {
  scrollStatus: boolean;
}

function Footer({ scrollStatus }: FooterProps) {
  return (
    <Box
      as="footer"
      bg="blackAlpha.900"
      color="gray.300"
      py={{ base: 4, md: 6 }}
      px={{ base: 4, md: 12 }}
      textAlign="center"
      width="100%"
      position={scrollStatus ? "absolute" : "fixed"}
      left={0}
      bottom={scrollStatus ? undefined : 0}
      right={0}
      boxShadow="0px -4px 10px rgba(0, 255, 255, 0.2)"
    >
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
        gap={{ md: 6, base: 4 }}
        alignItems="center"
        maxW="1200px"
        mx="auto"
      >
        {/* Contact Section with Logo */}
        <GridItem
          display="flex"
          justifyContent="center"
          colSpan={{ base: 2, md: 1 }}
        >
          <HStack gap={3}>
            <Image
              src="/bitesys-logo.png"
              alt="bITeSys Logo"
              boxSize={{ base: "40px", md: "60px" }}
              objectFit="contain"
              backgroundColor="white"
            />
            <VStack align="flex-start" gap={0}>
              <Text fontSize={{ base: "sm", md: "lg" }} fontWeight="bold">
                Contact Us
              </Text>
              <Link
                href="mailto:contact@bitesys@iimshillong.ac.in"
                fontSize={{ base: "sm", md: "md" }}
                color="cyan.300"
                fontWeight="semibold"
                _hover={{ textDecoration: "underline", color: "cyan.400" }}
              >
                bitesys@iimshillong.ac.in
              </Link>
            </VStack>
          </HStack>
        </GridItem>

        {/* Copyright Section with Logo */}
        <GridItem
          display="flex"
          justifyContent={{ base: "flex-start", md: "center" }}
        >
          <HStack gap={3}>
            <Image
              src="/ProdUX-Logo.svg"
              alt="ProdUX'25 Logo"
              boxSize={{ base: "40px", md: "60px" }}
              objectFit="contain"
            />
            <VStack align="flex-start" gap={0}>
              <Text
                fontSize={{ base: "sm", md: "lg" }}
                fontWeight="bold"
                _hover={{ color: "cyan.400" }}
              >
                © {new Date().getFullYear()} ProdUX'25
              </Text>
              <Text fontSize={{ base: "xs", md: "md" }} opacity={0.7}>
                All Rights Reserved.
              </Text>
            </VStack>
          </HStack>
        </GridItem>

        {/* Social Media Links */}
        <GridItem
          display="flex"
          justifyContent="center"
          mr={{ md: 0, base: 3 }}
        >
          <VStack gap={2}>
            <Text fontSize={{ base: "sm", md: "lg" }} fontWeight="bold">
              Connect with Us
            </Text>
            <HStack gap={4}>
              <Link
                href="https://www.linkedin.com/company/bitesys"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  as={FaLinkedin}
                  boxSize={6}
                  color="cyan.400"
                  transition="0.3s ease"
                  _hover={{ color: "cyan.300", transform: "scale(1.2)" }}
                />
              </Link>
              <Link
                href="https://www.instagram.com/bitesys.iims/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  as={FaInstagram}
                  boxSize={6}
                  color="pink.400"
                  transition="0.3s ease"
                  _hover={{ color: "pink.300", transform: "scale(1.2)" }}
                />
              </Link>
            </HStack>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Footer;
