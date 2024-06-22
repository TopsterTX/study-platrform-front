import { createEvent } from "effector";

export const changeIsAuthEvent = createEvent<boolean>({
  name: "changeIsAuth",
});

export const changeErrorEvent = createEvent<string | null>({
  name: "changeError",
});
