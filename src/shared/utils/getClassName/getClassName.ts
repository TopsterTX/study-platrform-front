export const getClassName = (...args: unknown[]) =>
  args.filter((className) => typeof className === "string").join(" ");
