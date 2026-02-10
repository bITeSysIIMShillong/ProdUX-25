import { Input } from "@chakra-ui/react";

interface InputComponentProps {
  value: string;
  placeHolder: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputComponent({
  value,
  onChange,
  placeHolder,
  type = "text",
}: InputComponentProps) {
  return (
    <Input
      placeholder={placeHolder}
      type={type}
      value={value}
      required
      onChange={(e) => onChange(e)}
      bg="gray.700"
      color="white"
      size="2xl"
      _focus={{
        borderColor: "blue.400",
        boxShadow: "0 0 10px #4299E1",
      }}
    />
  );
}

export default InputComponent;
