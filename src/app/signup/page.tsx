"use client";

import { CenterContainer, FullWidthContainer } from "@/shared/components";
import { SignUpForm } from "@/widgets";

const SignUpPage = () => {
  return (
    <FullWidthContainer>
      <CenterContainer className="w-full h-full">
        <SignUpForm />
      </CenterContainer>
    </FullWidthContainer>
  );
};

export default SignUpPage;
