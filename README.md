## How to start?

Run `yarn` to install packages and then `yarn dev` to run.

## Points of interest?

- In [RelayEnvironment.ts](./src/RelayEnvironment.ts) we're enabling the error handling feature flags `ENABLE_FIELD_ERROR_HANDLING` and `ENABLE_FIELD_ERROR_HANDLING_THROW_BY_DEFAULT`.
- Also in [RelayEnvironment.ts](./src/RelayEnvironment.ts) we are returning mocked responses, where we're simulating an error only for the second query `AppReviewsQuery`.
- In [App.tsx](./src/App.tsx) we're defining two nested queries, where only the inner one fails. Since both queries share the same signature though `productById(id: "product-1")`, the errors of the second query are (wrongfully?) propagated to the first query.
