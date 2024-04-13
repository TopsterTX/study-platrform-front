import { Dispatch, SetStateAction } from "react";

type LoginHandlerParams = {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setIsAuthenticate: Dispatch<SetStateAction<boolean>>;
  setBody: Dispatch<SetStateAction<unknown>>;
};

export const loginHandler =
  ({ setIsLoading, setIsAuthenticate, setBody }: LoginHandlerParams) =>
  async (values: Record<string, unknown>) => {
    setIsLoading(true);
    const response: Response = await fetch(
      "http://localhost:3001/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          name: values.username,
          password: values.password,
        }),
      },
    );

    const body = await response.json();
    if (body?.["access_token"]) {
      setIsLoading(false);
      setIsAuthenticate(true);
    }
    setIsLoading(false);
    setBody(body);
  };
