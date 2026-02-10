import { Button } from "@chakra-ui/react";

interface SubmitButtonProps {
  CTA: string;
  loading: boolean;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function SubmitButton({ CTA, handleSubmit, loading }: SubmitButtonProps) {
  return (
    <Button
      colorScheme="cyan"
      size="lg"
      fontSize="xl"
      width="full"
      _hover={{ bg: "cyan.500" }}
      onClick={handleSubmit}
      loading={loading}
    >
      {CTA}
    </Button>
  );
}

export default SubmitButton;
