import { Card, Heading, Text, Highlight } from "@chakra-ui/react";

class InfoProps {
  title: string = "";
  body: string = "";
}

function InfoCard(props: InfoProps) {
  return (
    <Card.Root width={{ base: "100%", md: "80%" }}>
      <Card.Body gap="2">
        <Card.Title mt="2">
          <Heading
            size={{ md: "5xl", base: "3xl" }}
            style={{ color: "gold", textAlign: "center" }}
            fontFamily="Iceland"
          >
            <Highlight
              query={["ProdUX'25", "ProdUX'24", "ProdUX"]}
              styles={{ color: "cyan" }}
            >
              {props.title}
            </Highlight>
          </Heading>
        </Card.Title>
        <Card.Description>
          <Text textStyle={{ md: "2xl", base: "lg" }}>{props.body}</Text>
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
}

export default InfoCard;
