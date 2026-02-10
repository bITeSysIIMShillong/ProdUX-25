import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

type Event = {
  title: string;
  date: string;
  description: string;
  image: string;
};

const TimelineEventMobile = ({ event }: { event: Event }) => {
  return (
    <MotionBox
      w="95%"
      maxW="600px"
      p={6}
      bg="gray.800"
      boxShadow="lg"
      borderRadius="md"
      mt={5}
      mx="auto"
    >
      <Flex direction="column" align="center" gap={4}>
        <Image
          src={event.image}
          alt={event.title}
          w="100%"
          h="100%"
          objectFit="cover"
          borderRadius="md"
        />
        <Flex direction="column" align="center">
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color="white"
            textAlign="center"
          >
            {event.title}
          </Text>
          <Text fontSize="lg" color="gray.400">
            {event.date}
          </Text>
          <Text mt={2} color="gray.300" fontSize="lg" textAlign="center">
            {event.description}
          </Text>
        </Flex>
      </Flex>
    </MotionBox>
  );
};

export default TimelineEventMobile;
