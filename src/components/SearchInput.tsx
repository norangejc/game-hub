import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";
import styled from "styled-components";
const Form = styled.form`
  width: 100%;
`;

interface Props {
  onSearch: (searchText: string) => void;
}
function SearchInput({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup startElement={<LuSearch />}>
        <Input ref={ref} placeholder="Search games..." variant="subtle" />
      </InputGroup>
    </Form>
  );
}

export default SearchInput;
