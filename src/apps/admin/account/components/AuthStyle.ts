/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "@emotion/styled";
import { Flex } from "@mantine/core";
import { SubmitButton } from "@mongez/moonlight";
import { UnStyledLink } from "apps/admin/design-system/components/Link/UnstyledLink";

export const FormWrapper = styled(Flex)`
  label: FormWrapper;
  box-shadow: 0 0 35px 0 rgba(154, 161, 171, 0.15);
  background: #fff;
  justify-content: center;
  border-radius: 0.4rem;
  margin: 0 auto;
  margin-top: 7%;
  flex-direction: column;
  width: 32%;
  gap: 1rem;
  padding: 2.2rem;

  h5 {
    color: #3d4465;
    font-weight: 500;
    font-size: 0.9rem;
    margin: 0;
  }

  label {
    margin-bottom: 0.2rem;
    font-size: 0.9rem;
    font-weight: 400;
  }

  .mantine-Input-wrapper {
    border: 1px solid #e6e6e6;
    border-radius: 0.5rem;
    padding: 0.2rem;
    transition: border-color 0.2s ease-in-out;
    .mantine-PasswordInput-input {
      height: 100%;
      border-radius: 0;
      border: 0 !important;
    }
  }

  form > div {
    margin-bottom: 0;
  }

  .mantine-Input-wrapper:focus-within {
    border-color: #8f9fda;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const ForgetPasswordLink = styled<any>(UnStyledLink)`
  label: ForgetPasswordLink;
  width: fit-content;
  :hover {
    color: #1e3fb4;
  }
`;

export const SubmitButtonForm = styled(SubmitButton)`
  label: SubmitButtonForm;
  font-weight: 700;
  font-size: 0.85rem;
  border-radius: 0.5rem;
  transition:
    background-color 0.2s,
    color 0.2s !important;
  color: #1e3fb4;
  height: 2.8rem;
  background-color: #d8e0f9;
  :hover {
    background-color: #1e3fb4;
    color: #fff;
  }
`;
