import { Metadata } from "next";

// Configure Metadata
export const metadata: Metadata = {
  title: "SignIn",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
