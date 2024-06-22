"use client";

import { CenterContainer, FullWidthContainer } from "@/shared/components";
import { SignInForm } from "@/widgets";

const SignInPage = () => {
  return (
    <FullWidthContainer>
      <CenterContainer className="w-full h-full">
        <SignInForm />
      </CenterContainer>
    </FullWidthContainer>
  );
};

export default SignInPage;
