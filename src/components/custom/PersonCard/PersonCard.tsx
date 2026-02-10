import { Heading, Image, Box, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";

class PersonDetails {
  image: string = "";
  name: string = "";
}

const MotionCard = motion(Box);

const PersonCard = (person: PersonDetails) => {
  const [isDesktop] = useMediaQuery(["(min-width: 768px)"], { ssr: false });

  return (
    <MotionCard
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -60, scale: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      maxW={{ base: "250px", md: "300px" }}
      height={{ base: "350px", md: "400px" }}
      overflow="hidden"
      borderRadius="lg"
      mx="auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      bg="rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(10px)"
      border="1px solid rgba(255, 255, 255, 0.2)"
      boxShadow="0 8px 30px rgba(0, 0, 0, 0.3)"
      {...(isDesktop && {
        whileHover: {
          scale: 1.05,
          boxShadow: "0px 15px 40px rgba(0, 255, 255, 0.3)",
          transition: { type: "spring", damping: 10, stiffness: 100 },
        },
      })}
    >
      <Box
        width="100%"
        height="80%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={person.image}
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Box>
      <Box
        height="20%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          size={{ md: "2xl", base: "xl" }}
          textAlign="center"
          fontFamily="Iceland"
        >
          {person.name}
        </Heading>
      </Box>
    </MotionCard>
  );
};

export default PersonCard;
