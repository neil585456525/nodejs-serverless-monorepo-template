import middy from "@middy/core";

const lambdaHandler = (event, context) => {
  /* your business logic */
};

export const handler = middy().use([]).handler(lambdaHandler);
