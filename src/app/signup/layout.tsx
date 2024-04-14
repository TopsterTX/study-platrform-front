import { Metadata } from "next";

// Configure Metadata
export const metadata: Metadata = {
  title: "SignUp",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
