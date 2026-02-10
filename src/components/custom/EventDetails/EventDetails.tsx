import { Grid, GridItem, Image } from "@chakra-ui/react";
import InfoCard from "../InfoCard/InfoCard";
import { useEffect } from "react";

function EventDetails() {
  useEffect(() => {
    document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);

  const infoCardContent = [
    {
      title: "About ProdUX",
      body: "ProdUX, the flagship Business and Technology Fest by bITeSys, IIM Shillong, started as a platform to explore the intersection of technology, strategy, and innovation. Over the years, it has evolved into a premier event, bringing together students, industry experts, and entrepreneurs to discuss emerging trends, tackle real-world challenges, and shape the future of business and technology.",
    },
    {
      title: "Revisiting ProdUX'24",
      body: "ProdUX 2024 featured a challenging quiz, expert talks, and workshops. Industry leaders like Pamit D Anand (Magicbricks) and Ashish Gambhir (BharatPe) shared insights on product management and Generative AI. Munwar Khan (UX Design Leader) and Soni Shaw (PhonePe) explored UX design and product discovery, fostering strategic thinking and innovation.",
    },
    {
      title: "Next Up: ProdUX'25",
      body: 'ProdUX 2025, themed "Business Beyond Boundaries" will explore how emerging technologies like AI, IoT, and blockchain are reshaping industries. With panel discussions, business simulations, workshops, and venture clashes, this year’s event will equip participants with the insights and tools to break traditional barriers, drive innovation, and redefine business in the digital age.',
    },
  ];

  return (
    <>
      {infoCardContent.map((content, index) => (
        <Grid
          key={index}
          templateColumns="1fr"
          gap={4}
          alignItems="center"
          textAlign="center"
          marginTop={{ base: 5, md: 10 }}
        >
          <GridItem display="flex" justifyContent="center">
            <InfoCard title={content.title} body={content.body} />
          </GridItem>
          <GridItem display="flex" justifyContent="center">
            <Image
              src={`/images/event/img${index + 1}.jpg`}
              maxWidth={{ base: "100%", md: "80%" }}
              height={{ base: "100%", md: "80%" }}
              borderRadius="md"
            />
          </GridItem>
        </Grid>
      ))}
    </>
  );
}

export default EventDetails;
