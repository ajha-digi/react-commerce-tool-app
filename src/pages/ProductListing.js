import React from 'react'
import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from '../store/slices/testSlice'
import ProductsContainer from "../container/Products";

function ProductListing() {
  const { type } = useParams();
  console.log({ type });
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <div>
      <ProductsContainer />

      {/* <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div> */}
    </div>
  )
}

export default ProductListing;