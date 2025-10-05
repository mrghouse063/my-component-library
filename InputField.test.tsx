import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "./InputField";

test("renders label and helper text", () => {
  render(<InputField label="Name" helperText="Helper" value="" onChange={() => {}} />);
  expect(screen.getByLabelText("Name")).toBeInTheDocument();
  expect(screen.getByText("Helper")).toBeInTheDocument();
});

test("shows error message and aria-invalid", () => {
  render(<InputField label="Email" errorMessage="Invalid" value="" onChange={() => {}} />);
  expect(screen.getByRole("alert")).toHaveTextContent("Invalid");
  expect(screen.getByLabelText("Email")).toHaveAttribute("aria-invalid", "true");
});
