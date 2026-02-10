import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

type Event = {
  title: string;
  date: string;
  description: string;
  image: string;
};

const TimelineEventDesktop = ({ event }: { event: Event }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <MotionBox
      w="clamp(320px, 41vw, 600px)"
      h="calc(clamp(320px, 40vw, 400px) * 0.75)"
      position="relative"
      perspective="1200px"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <MotionBox
        w="100%"
        h="100%"
        position="absolute"
        borderRadius="md"
        boxShadow="0px 0px 30px rgba(255, 255, 255, 0.1)"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front Side (Image) */}
        <Flex
          w="100%"
          h="100%"
          position="absolute"
          top={0}
          left={0}
          borderRadius="md"
          backfaceVisibility="hidden"
          alignItems="center"
          justifyContent="center"
          bg="gray.900"
        >
          <Image
            src={event.image}
            alt={event.title}
            w="80%"
            h="90%"
            objectFit="cover"
            borderRadius="md"
          />
        </Flex>

        {/* Back Side (Sexy 😎) */}
        <Flex
          w="100%"
          h="100%"
          position="absolute"
          top={0}
          left={0}
          borderRadius="md"
          bgGradient="linear(to-br, gray.800, gray.900)"
          boxShadow="inset 0px 0px 20px rgba(255, 255, 255, 0.1)"
          backfaceVisibility="hidden"
          transform="rotateY(180deg)"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={6}
          textAlign="center"
          transition="box-shadow 0.3s ease-in-out"
          _hover={{
            boxShadow: "inset 0px 0px 40px rgba(255, 255, 255, 0.2)",
          }}
        >
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color="cyan"
            letterSpacing="wide"
            textTransform="uppercase"
          >
            {event.title}
          </Text>
          <Text
            fontSize="lg"
            color="gray.400"
            mt={1}
            fontStyle="italic"
            textShadow="0px 0px 10px rgba(255, 255, 255, 0.2)"
          >
            {event.date}
          </Text>
          <Text
            mt={4}
            color="gray.300"
            fontSize="lg"
            fontWeight="medium"
            maxW="80%"
            textShadow="0px 0px 10px rgba(255, 255, 255, 0.1)"
          >
            {event.description}
          </Text>
        </Flex>
      </MotionBox>
    </MotionBox>
  );
};

export default TimelineEventDesktop;
