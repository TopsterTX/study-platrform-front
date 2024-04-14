import { request } from "@/shared";

export const loginHandler = async (values: Record<string, unknown>) => {
  const response: Response = await request(
    "http://localhost:3001/api/auth/login",
    {
      method: "POST",
      body: {
        name: values.username,
        password: values.password,
      },
    },
  );

  console.log({ response });
  // if (body?.["access_token"]) {
  //   setIsLoading(false);
  // }
};
