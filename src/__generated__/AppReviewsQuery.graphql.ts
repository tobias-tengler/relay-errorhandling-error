/**
 * @generated SignedSource<<79eeb86fb5d03eacf3d0d0db8ff84812>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppReviewsQuery$variables = {
  id: string;
};
export type AppReviewsQuery$data = {
  readonly productById: {
    readonly " $fragmentSpreads": FragmentRefs<"AppReviewsData">;
  } | null | undefined;
};
export type AppReviewsQuery = {
  response: AppReviewsQuery$data;
  variables: AppReviewsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppReviewsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Product",
        "kind": "LinkedField",
        "name": "productById",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AppReviewsData"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppReviewsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Product",
        "kind": "LinkedField",
        "name": "productById",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "reviewCount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b050a2bda0e5e5a7874f00165cb44b1d",
    "id": null,
    "metadata": {},
    "name": "AppReviewsQuery",
    "operationKind": "query",
    "text": "query AppReviewsQuery(\n  $id: ID!\n) {\n  productById(id: $id) {\n    ...AppReviewsData\n    id\n  }\n}\n\nfragment AppReviewsData on Product {\n  reviewCount\n}\n"
  }
};
})();

(node as any).hash = "76475078118c93aba79790139c77c299";

export default node;
