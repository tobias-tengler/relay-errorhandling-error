import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
  GraphQLSingularResponse,
  RelayFeatureFlags,
} from "relay-runtime";

// @ts-expect-error
RelayFeatureFlags.ENABLE_FIELD_ERROR_HANDLING = true;
// @ts-expect-error
RelayFeatureFlags.ENABLE_FIELD_ERROR_HANDLING_THROW_BY_DEFAULT = true;

const fetchFn: FetchFunction = async (request, _variables) => {
  if (request.name === "AppQuery") {
    return {
      data: {
        productById: {
          id: "product-1",
          name: "Some product",
        },
      },
    } satisfies GraphQLSingularResponse;
  }

  if (request.name === "AppReviewsQuery") {
    return {
      data: {
        productById: null,
      },
      errors: [
        {
          message: "Failed to resolve product",
          // @ts-expect-error
          path: ["productById"],
        },
      ],
    } satisfies GraphQLSingularResponse;
  }

  throw new Error("Unknown query");
};

function createRelayEnvironment() {
  return new Environment({
    network: Network.create(fetchFn),
    store: new Store(new RecordSource()),
  });
}

export const RelayEnvironment = createRelayEnvironment();
