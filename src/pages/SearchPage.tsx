// import React from "react";

type Props = {
  query: string;
};

export const SearchPage = (props: Props) => {
  console.log('props: ', props);
  return (
    <>
      <h2>This is our search page</h2>
      <p>Search: { props.query }</p>
    </>
  )
};