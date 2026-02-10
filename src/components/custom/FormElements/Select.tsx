import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@chakra-ui/react";
import { ListCollection } from "@ark-ui/react";

interface Item {
  label: string;
  value: string;
}

interface Collection extends ListCollection<Item> {
  items: Array<Item>;
}

interface SelectComponentProps {
  collection: Collection;
  value: string[];
  label: string;
  placeholder: string;
  onChange: (value: string[]) => void;
}

function SelectComponent({
  collection,
  value,
  onChange,
  label,
  placeholder,
}: SelectComponentProps) {
  return (
    <SelectRoot
      collection={collection}
      value={value}
      onValueChange={(value) => onChange(value.value)}
      width="100%"
      variant="subtle"
    >
      <SelectLabel fontSize="md">{label}</SelectLabel>
      <SelectTrigger>
        <SelectValueText placeholder={placeholder} fontSize="md" />
      </SelectTrigger>
      <SelectContent>
        {collection.items.map((exp) => (
          <SelectItem key={exp.value} item={exp} fontSize="md">
            {exp.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
}

export default SelectComponent;
