import { Text } from "@chakra-ui/react";
import { toaster } from "../../ui/toaster";

interface ToasterProps {
  title: string;
  description: string;
  type: string;
}

function createToaster({ title, description, type }: ToasterProps) {
  toaster.create({
    title: <Text fontSize="xl">{title}</Text>,
    description: <Text fontSize="lg">{description}</Text>,
    type: type,
  });
}

export default createToaster;
