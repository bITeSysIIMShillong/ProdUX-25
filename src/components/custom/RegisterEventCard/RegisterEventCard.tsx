import { Box, Image, Text, Button, Link } from "@chakra-ui/react";
import { RxOpenInNewWindow } from "react-icons/rx";

interface EventProps {
  image: string;
  title: string;
  redirectionLink: string;
  external: boolean;
  seatsLeft?: number; // Optional prop
}

const RegisterEventCard = ({
  image,
  title,
  redirectionLink,
  external,
  seatsLeft,
}: EventProps) => {
  const handleClick = () => {
    setTimeout(() => {
      window.location.href = redirectionLink;
    }, 200);
  };

  const isSoldOut = seatsLeft === 0; // Check if seats are full

  const registerButton = external ? (
    <Link
      href={redirectionLink}
      target="_blank"
      rel="noopener noreferrer"
      width={{ base: "90%", md: "90%" }}
    >
      <Button
        colorScheme="cyan"
        width="100%"
        _hover={{ bg: isSoldOut ? undefined : "green.300" }}
        fontSize="lg"
      >
        Register <RxOpenInNewWindow />{" "}
      </Button>
    </Link>
  ) : (
    <Button
      colorScheme="cyan"
      width={{ base: "90%", md: "90%" }}
      onClick={handleClick}
      _hover={{ bg: isSoldOut ? undefined : "green.300" }}
      fontSize="lg"
      disabled={isSoldOut} // Disable button if sold out
    >
      Register <RxOpenInNewWindow />
    </Button>
  );

  return (
    <Box
      maxW={{ base: "90%", md: "350px" }}
      mx="auto"
      bg="gray.800"
      boxShadow="lg"
      borderRadius="lg"
      overflow="hidden"
      transition="transform 0.3s ease"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Image
        src={image}
        alt={title}
        w="100%"
        h="200px"
        objectFit={{ base: "contain", md: "cover" }}
      />
      <Box p={4} textAlign="center">
        <Text fontSize="2xl" fontWeight="bold" color="white" mb={2}>
          {title}
        </Text>

        {/* Show seats left only if seatsLeft is provided */}
        {seatsLeft !== undefined && (
          <Text fontSize="md" color={isSoldOut ? "red.400" : "gray.300"} mb={3}>
            {isSoldOut ? "No Seats Available" : `Seats Left: ${seatsLeft}`}
          </Text>
        )}

        {registerButton}
      </Box>
    </Box>
  );
};

export default RegisterEventCard;
