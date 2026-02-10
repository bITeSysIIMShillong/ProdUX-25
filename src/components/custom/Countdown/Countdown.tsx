import { useState, useEffect } from "react";
import { Box, Text, HStack, VStack, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

type CountdownProps = {
  eventDate: string; // Format: YYYY-MM-DDTHH:mm:ss
};

const MotionBox = motion(Box);
const MotionText = motion(Text);

const CountdownTimer: React.FC<CountdownProps> = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(eventDate).getTime() - new Date().getTime();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const flipAnimation = {
    initial: { rotateX: 90, opacity: 0 },
    animate: { rotateX: 0, opacity: 1 },
    transition: { duration: 0.5 },
  };

  const bounceAnimation = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: "spring", stiffness: 300, damping: 20 },
  };

  return (
    <Box
      position="absolute"
      top="0px"
      left="50%"
      transform="translateX(-50%)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 120px)"
    >
      <VStack gap={4} textAlign="center" p={4}>
        <Heading
          fontSize={{ base: "7xl", md: "9xl" }}
          fontWeight="bold"
          lineHeight="shorter"
          style={{
            color: "cyan",
            filter:
              "drop-shadow(0px 0px 1px cyan) drop-shadow(0px 0px 4px cyan)",
          }}
          fontFamily="Iceland"
        >
          Coming Soon
        </Heading>
        <HStack gap={{ md: 6, base: 4 }}>
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <VStack key={unit} gap={1}>
              <MotionBox
                bg="gray.600"
                p={4}
                borderRadius="md"
                minW={{ md: "120px", base: "60px" }}
                textAlign="center"
                {...flipAnimation}
              >
                <MotionText
                  fontSize={{ md: "7xl", base: "2xl" }}
                  fontWeight="bold"
                  color="white"
                  key={timeLeft[unit as keyof typeof timeLeft]}
                  {...bounceAnimation}
                >
                  {timeLeft[unit as keyof typeof timeLeft]}
                </MotionText>
              </MotionBox>
              <Text
                fontSize={{ md: "2xl", base: "md" }}
                color="white"
                textTransform="uppercase"
              >
                {unit}
              </Text>
            </VStack>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default CountdownTimer;
