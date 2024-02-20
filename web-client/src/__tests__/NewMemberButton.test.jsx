import { test } from "vitest";
import { render } from "@testing-library/react";
import { NewMemberButton } from '../components/NewMemberButton/NewMemberButton'

test("El NewMember se renderiza", () => {
    render(<NewMemberButton />);  
});