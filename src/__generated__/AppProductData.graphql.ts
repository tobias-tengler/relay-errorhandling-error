/**
 * @generated SignedSource<<1553b045f2a298def6da907300fa91de>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppProductData$data = {
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "AppProductData";
};
export type AppProductData$key = {
  readonly " $data"?: AppProductData$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppProductData">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppProductData",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Product",
  "abstractKey": null
};

(node as any).hash = "afc4d4b833c75039219f80dd426919a8";

export default node;
