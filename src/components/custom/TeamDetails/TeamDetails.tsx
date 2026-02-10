import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import PersonCard from "../PersonCard/PersonCard";

function TeamDetails() {
  const teamDetails = [
    {
      name: "Diksha",
      img: "/images/seniors/diksha.jpeg",
    },
    {
      name: "Yash",
      img: "/images/seniors/Yash.webp",
    },
    {
      name: "Gunika",
      img: "/images/seniors/Gunika.jpeg",
    },
    {
      name: "Ravindra",
      img: "/images/seniors/Ravindra.webp",
    },
    {
      name: "Aeshna",
      img: "/images/seniors/aeshna.jpeg",
    },
    {
      name: "Tushar",
      img: "/images/seniors/tushar.webp",
    },
    {
      name: "Rashmishree",
      img: "/images/seniors/rashmishree.jpeg",
    },
    {
      name: "Ashwin",
      img: "/images/seniors/ashwin.webp",
    },
    {
      name: "Shrinwanti",
      img: "/images/seniors/shrinwanti.webp",
    },
    {
      name: "Yash",
      img: "/images/juniors/Yash.jpg",
    },
    {
      name: "Himani",
      img: "/images/juniors/Himani.jpg",
    },
    {
      name: "Akash",
      img: "/images/juniors/Akash.jpeg",
    },
    {
      name: "Afreen",
      img: "/images/juniors/Afreen.jpg",
    },
    {
      name: "Saransh",
      img: "/images/juniors/Saransh.jpg",
    },
    {
      name: "Aratrika",
      img: "/images/juniors/Aratrika.jpg",
    },
    {
      name: "Harshit",
      img: "/images/juniors/Harshit.jpg",
    },
    {
      name: "Anoushka",
      img: "/images/juniors/Anoushka.jpeg",
    },
    {
      name: "Tanay",
      img: "/images/juniors/Tanay.jpg",
    },
    {
      name: "",
      img: "",
    },
    {
      name: "Animesh",
      img: "/images/juniors/Animesh.jpg",
    },
    {
      name: "",
      img: "",
    },
  ];

  const personCards = teamDetails.map((details, index) => {
    const shouldDisplay = details.name ? true : false;
    return (
      <GridItem colSpan={1} key={index}>
        {shouldDisplay ? (
          <PersonCard image={details.img} name={details.name} />
        ) : (
          <></>
        )}
      </GridItem>
    );
  });

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
      gap={{ base: 8, md: 7 }}
      alignItems="center"
      marginTop={{ base: 10 }}
      marginBottom={{ base: 10 }}
    >
      <GridItem colSpan={{ md: 3, base: 1 }} marginBottom={{ md: 5, base: 0 }}>
        <Heading
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="semibold"
          lineHeight="tall"
          textAlign="center"
          fontFamily="Iceland"
          style={{
            color: "cyan",
            filter:
              "drop-shadow(0px 0px 0px cyan) drop-shadow(0px 0px 2px cyan)",
          }}
        >
          Meet The Team
        </Heading>
        <Text textAlign="center" textStyle={{ md: "2xl", base: "lg" }}>
          Meet the brilliant minds bringing together the best of both the tech
          and business worlds, to turn ProdUX'25 into a reality!
        </Text>
      </GridItem>
      {personCards}
    </Grid>
  );
}
export default TeamDetails;
