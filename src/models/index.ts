import React from "react";

export interface IRouteProps {
  path: string;
  Component: () => React.ReactElement;
}
