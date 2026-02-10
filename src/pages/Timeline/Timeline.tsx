import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TimeLineEvent from "../../components/custom/TimelineEvent/TimelineEvent";
import Navbar from "../../components/custom/Navbar/Navbar";
import SEO from "../../components/custom/SEO/SEO";
import Footer from "../../components/custom/Footer/Footer";

const eventsByDay = {
  "Day 1 - 19th Feb": [
    {
      title: "Opening Ceremony",
      date: "Morning, Offline",
      image: "/images/Ocassion/inauguration.png",
      description:
        "The opening ceremony features esteemed guests and IIM Shillong faculty members, with the lighting of the lamp followed by a keynote by the Guest of Honour.",
    },
    {
      title: "BiteCast",
      date: "Afternoon, Offline",
      image: "/images/Ocassion/biteCast.png",
      description:
        "A podcast-style discussion with Arun Sreelalan Iyer, an industry leader in product management, exploring the intersection of technology, business strategy, and innovation.",
    },
    {
      title: "DataDecoded - Day 1",
      date: "Evening, Online",
      image: "/images/Ocassion/google-analytics.png",
      description:
        "A hands-on session on Google Analytics, enabling participants to harness data for strategic decision-making and business insights.",
    },
    {
      title: "Boardroom Simulation - Day 1",
      date: "Evening, Online",
      image: "/images/Ocassion/boardroom.png",
      description:
        "An immersive CXO-level simulation, where participants navigate real-world business challenges, make critical decisions, and compete for market leadership.",
    },
    {
      title: "Design Sync - Day 1",
      date: "Evening, Online",
      image: "/images/Ocassion/design_sync.png",
      description:
        "A UI/UX case competition that challenges participants to create innovative, user-centric product designs. Open to all designers, it tests creativity, research depth, and problem-solving skills. Submissions will be judged on research quality, ideation, and overall design approach.",
    },
  ],
  "Day 2 - 20th Feb": [
    {
      title: "DataDecoded - Day 2",
      date: "Evening, Online",
      image: "/images/Ocassion/google-analytics.png",
      description:
        "A hands-on session on Google Analytics, enabling participants to harness data for strategic decision-making and business insights.",
    },
    {
      title: "Boardroom Simulation - Day 2",
      date: "Evening, Online",
      image: "/images/Ocassion/boardroom.png",
      description:
        "An immersive CXO-level simulation, where participants navigate real-world business challenges, make critical decisions, and compete for market leadership.",
    },
    {
      title: "Design Sync - Day 2",
      date: "Evening, Online",
      image: "/images/Ocassion/design_sync.png",
      description:
        "A UI/UX case competition that challenges participants to create innovative, user-centric product designs. Open to all designers, it tests creativity, research depth, and problem-solving skills. Submissions will be judged on research quality, ideation, and overall design approach.",
    },
  ],
  "Day 3 - 21st Feb": [
    {
      title: "DataDecoded - Day 3",
      date: "Evening, Online",
      image: "/images/Ocassion/google-analytics.png",
      description:
        "A hands-on session on Google Analytics, enabling participants to harness data for strategic decision-making and business insights.",
    },
    {
      title: "Boardroom Simulation - Day 3",
      date: "Evening, Online",
      image: "/images/Ocassion/boardroom.png",
      description:
        "An immersive CXO-level simulation, where participants navigate real-world business challenges, make critical decisions, and compete for market leadership.",
    },
    {
      title: "Design Sync - Day 3",
      date: "Evening, Online",
      image: "/images/Ocassion/design_sync.png",
      description:
        "A UI/UX case competition that challenges participants to create innovative, user-centric product designs. Open to all designers, it tests creativity, research depth, and problem-solving skills. Submissions will be judged on research quality, ideation, and overall design approach.",
    },
  ],
  "Day 4 - 22nd Feb": [
    {
      title: "bITWars",
      date: "Afternoon, Offline",
      image: "/images/Ocassion/quiz.png",
      description:
        "Think you're the ultimate trivia champ? 🧠🔥 Join us for a fun-filled quiz where every participant gets pizza 🍕 and winners take home awesome goodies! Bring your A-game (and your appetite)!",
    },
    {
      title: "FigmaForge - Day 1",
      date: "Evening, Online",
      image: "/images/Ocassion/figma.png",
      description:
        "An interactive Figma workshop designed to equip participants with essential skills in user experience design and digital product prototyping.",
    },
    {
      title: "Boardroom Simulation - Day 4",
      date: "Evening, Online",
      image: "/images/Ocassion/boardroom.png",
      description:
        "An immersive CXO-level simulation, where participants navigate real-world business challenges, make critical decisions, and compete for market leadership.",
    },
    {
      title: "Design Sync - Day 4",
      date: "Evening, Online",
      image: "/images/Ocassion/design_sync.png",
      description:
        "A UI/UX case competition that challenges participants to create innovative, user-centric product designs. Open to all designers, it tests creativity, research depth, and problem-solving skills. Submissions will be judged on research quality, ideation, and overall design approach.",
    },
  ],
  "Day 5 - 23rd Feb": [
    {
      title: "Shillong Venture Clash",
      date: "Evening, Online",
      image: "/images/Ocassion/ecell.png",
      description:
        "A high-impact entrepreneurial challenge where participants, guided by industry experts, conceptualize startups, develop business models, and compete for virtual funding.",
    },
    {
      title: "FigmaForge - Day 2",
      date: "Evening, Online",
      image: "/images/Ocassion/figma.png",
      description:
        "An interactive Figma workshop designed to equip participants with essential skills in user experience design and digital product prototyping.",
    },
    {
      title: "Boardroom Simulation - Day 5",
      date: "Evening, Online",
      image: "/images/Ocassion/boardroom.png",
      description:
        "An immersive CXO-level simulation, where participants navigate real-world business challenges, make critical decisions, and compete for market leadership.",
    },
    {
      title: "Design Sync - Day 5",
      date: "Evening, Online",
      image: "/images/Ocassion/design_sync.png",
      description:
        "A UI/UX case competition that challenges participants to create innovative, user-centric product designs. Open to all designers, it tests creativity, research depth, and problem-solving skills. Submissions will be judged on research quality, ideation, and overall design approach.",
    },
  ],
  "Day 6 - 24th Feb": [
    {
      title: "Product Pioneers",
      date: "Evening, Online",
      image: "/images/Ocassion/product.png",
      description:
        "An exclusive session with a Google Product Manager, providing insights on breaking into Product Management, career growth, and industry best practices.",
    },
    {
      title: "Boardroom Simulation - Day 6",
      date: "Evening, Online",
      image: "/images/Ocassion/boardroom.png",
      description:
        "An immersive CXO-level simulation, where participants navigate real-world business challenges, make critical decisions, and compete for market leadership.",
    },
    {
      title: "Design Sync - Day 6",
      date: "Evening, Online",
      image: "/images/Ocassion/design_sync.png",
      description:
        "A UI/UX case competition that challenges participants to create innovative, user-centric product designs. Open to all designers, it tests creativity, research depth, and problem-solving skills. Submissions will be judged on research quality, ideation, and overall design approach.",
    },
  ],
  "Day 7 - 25th Feb": [
    {
      title: "Boardroom Simulation - Day 7",
      date: "Evening, Online",
      image: "/images/Ocassion/boardroom.png",
      description:
        "An immersive CXO-level simulation, where participants navigate real-world business challenges, make critical decisions, and compete for market leadership.",
    },
    {
      title: "Design Sync - Day 7",
      date: "Evening, Online",
      image: "/images/Ocassion/design_sync.png",
      description:
        "A UI/UX case competition that challenges participants to create innovative, user-centric product designs. Open to all designers, it tests creativity, research depth, and problem-solving skills. Submissions will be judged on research quality, ideation, and overall design approach.",
    },
  ],
};

const MotionBox = motion(Box);

const Timeline = () => {
  const [visible, setVisible] = useState<number[]>([]);
  const [timelineVisible, setTimelineVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      document.body.style.overflow = "auto";
      const elements = document.querySelectorAll(".timeline-event");
      const timeline = document.querySelector(".timeline-line");
      const viewportHeight = window.innerHeight;
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < viewportHeight * 0.75) {
          setVisible((prev) => [...new Set([...prev, index])]);
        }
      });
      if (timeline) {
        const timelineRect = timeline.getBoundingClientRect();
        if (timelineRect.top < viewportHeight * 0.75) {
          setTimelineVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "hidden";
    };
  }, []);

  let globalIndex = 0;

  return (
    <Container>
      <SEO />
      <Navbar />
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
        alignItems="center"
        marginTop={{ base: 10 }}
        marginBottom={{ base: 5 }}
      >
        <GridItem colSpan={{ md: 3, base: 1 }}>
          <Heading
            size={{ md: "6xl", base: "4xl" }}
            textAlign="center"
            style={{
              filter:
                "drop-shadow(0px 0px 0px gold) drop-shadow(0px 0px 2px gold)",
            }}
            fontFamily="Iceland"
            textDecoration="underline"
          >
            Timeline of Events
          </Heading>
        </GridItem>
      </Grid>
      <VStack gap={10} position="relative" align="center" mb={10}>
        <MotionBox
          className="timeline-line"
          position="absolute"
          w="4px"
          bg="gray.300"
          h="full"
          left="50%"
          transform="translateX(-50%)"
          initial={{ opacity: 0 }}
          animate={{ opacity: timelineVisible ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        />
        {Object.entries(eventsByDay).map(([day, events], dayIndex) => (
          <VStack key={dayIndex} w="full" align="center">
            <Box
              bg="black"
              px={6}
              py={2}
              borderRadius="md"
              boxShadow="lg"
              zIndex={2}
              position="relative"
              border="2px solid rgb(10, 185, 228)"
            >
              <Text
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="extrabold"
                color="white"
                bg="rgba(0, 0, 0, 0.8)"
                px={4}
                py={2}
                borderRadius="md"
              >
                {day}
              </Text>
            </Box>
            {events.map((event, index) => {
              const isLeftAligned = globalIndex % 2 === 0;
              globalIndex++;
              return (
                <Flex
                  key={index}
                  className="timeline-event"
                  w="full"
                  justify={isLeftAligned ? "flex-start" : "flex-end"}
                  align="center"
                  position="relative"
                  marginTop={10}
                  flexDir={{ base: "column", md: "row" }}
                >
                  <MotionBox
                    position="absolute"
                    w={{ md: "clamp(60px, 6vw, 95px)" }}
                    h={{ md: "clamp(2px, 0.4vw, 4px)" }}
                    bg="gray.300"
                    left={{
                      md: isLeftAligned
                        ? "calc(50% - clamp(60px, 6vw, 95px))"
                        : "50%",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: visible.includes(globalIndex - 1) ? 1 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                    display={{ base: "none", md: "block" }}
                  />
                  <MotionBox
                    position="absolute"
                    w={{
                      base: "20px",
                      md: "clamp(22px, 3vw, 30px)",
                    }}
                    h={{
                      base: "20px",
                      md: "clamp(22px, 3vw, 30px)",
                    }}
                    bg="black"
                    borderRadius="full"
                    border={{
                      base: "3px solid white",
                      md: "clamp(3px, 0.4vw, 4px) solid white",
                    }}
                    left="50%"
                    transform="translate(-50%, -50%)"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: visible.includes(globalIndex - 1) ? 1 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                    display={{ base: "none", md: "block" }}
                  />

                  <TimeLineEvent event={event} />
                </Flex>
              );
            })}
          </VStack>
        ))}
      </VStack>
      <Footer scrollStatus />
    </Container>
  );
};

export default Timeline;
