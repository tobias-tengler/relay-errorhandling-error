/**
 * @generated SignedSource<<c43844964ad0ee9be2301139838c9809>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppReviewsData$data = {
  readonly reviewCount: number;
  readonly " $fragmentType": "AppReviewsData";
};
export type AppReviewsData$key = {
  readonly " $data"?: AppReviewsData$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppReviewsData">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppReviewsData",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "reviewCount",
      "storageKey": null
    }
  ],
  "type": "Product",
  "abstractKey": null
};

(node as any).hash = "a3737b0fb8ed0845708a6a0efea334d2";

export default node;
