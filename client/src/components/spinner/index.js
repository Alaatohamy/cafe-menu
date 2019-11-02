import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

const Spinner = ({ item }) => (
  <SpinnerOverlay item={item}>
    <SpinnerContainer item={item} />
  </SpinnerOverlay>
);

export default Spinner;
