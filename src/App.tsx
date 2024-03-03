import { graphql, useFragment, useLazyLoadQuery } from "react-relay";
import { AppProductData$key } from "./__generated__/AppProductData.graphql";
import { AppQuery } from "./__generated__/AppQuery.graphql";
import { AppReviewsData$key } from "./__generated__/AppReviewsData.graphql";
import { ErrorBoundary } from "react-error-boundary";

export default function App() {
  return (
    <ErrorBoundary fallback={<div>Page error boundary</div>}>
      <ProductDataLoader productId="product-1" />
    </ErrorBoundary>
  );
}

function ProductDataLoader({ productId }: { productId: string }) {
  const pageData = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery($id: ID!) {
        productById(id: $id) {
          ...AppProductData
        }
      }
    `,
    { id: productId }
  );

  if (!pageData.productById) {
    throw new Error("Couldn't find product");
  }

  return <ProductData product={pageData.productById} />;
}

function ProductData({ product }: { product: AppProductData$key }) {
  const data = useFragment(
    graphql`
      fragment AppProductData on Product {
        id
        name
      }
    `,
    product
  );

  return (
    <div>
      <p>Name: {data.name}</p>

      <ErrorBoundary fallback={<div>Product reviews error boundary</div>}>
        <ProductReviewsLoader productId={data.id} />
      </ErrorBoundary>
    </div>
  );
}

function ProductReviewsLoader({ productId }: { productId: string }) {
  const reviewsData = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppReviewsQuery($id: ID!) {
        productById(id: $id) {
          # ...AppReviewsData
          ...AppReviewsData
        }
      }
    `,
    { id: productId }
  );

  if (!reviewsData.productById) {
    throw new Error("Couldn't find product");
  }

  return <ProductReviews product={reviewsData.productById} />;
}

function ProductReviews({ product }: { product: AppReviewsData$key }) {
  const data = useFragment(
    graphql`
      fragment AppReviewsData on Product {
        reviewCount
      }
    `,
    product
  );

  return (
    <div>
      <p>Number of reviews: {data.reviewCount}</p>
    </div>
  );
}
