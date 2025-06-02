import useGameQueryStore from "@/store";
import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";
import styled from "styled-components";
const Form = styled.form`
  width: 100%;
`;

function SearchInput() {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup startElement={<LuSearch />}>
        <Input ref={ref} placeholder="Search games..." variant="subtle" />
      </InputGroup>
    </Form>
  );
}

export default SearchInput;
