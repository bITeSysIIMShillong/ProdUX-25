import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface WorkshopCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const WorkshopInfoCard = ({
  imageSrc,
  title,
  description,
}: WorkshopCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <Box
        p={6}
        mx="auto"
        maxW="700px"
        borderRadius="lg"
        boxShadow="0px 4px 20px rgba(0, 255, 255, 0.2)"
        bgGradient="linear(to-br, gray.900, black)"
        color="white"
        mt={10}
        mb={10}
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "lg",
          boxShadow: "inset 0 0 15px rgba(0, 255, 255, 0.2)",
          pointerEvents: "none",
        }}
      >
        <Image
          src={imageSrc}
          alt={title}
          borderRadius="md"
          mb={4}
          objectFit="cover"
          maxH={{ base: undefined, md: "275px" }}
          mx="auto"
          boxShadow="0px 0px 15px rgba(0, 255, 255, 0.3)"
        />
        <VStack gap={3} color="gray.200" textAlign="center">
          <Text fontSize="2xl" fontWeight="bold" textTransform="uppercase">
            {title}
          </Text>
          <Text fontSize="md" opacity={0.8}>
            {description}
          </Text>
        </VStack>
      </Box>
    </motion.div>
  );
};

export default WorkshopInfoCard;
