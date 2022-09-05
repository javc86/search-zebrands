import React from "react";

export interface IRouteProps {
  path: string;
  exact?: boolean,
  Component: () => React.ReactElement;
}
