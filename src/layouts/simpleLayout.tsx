import { GetCSSFn, ILayout, LayoutComponent } from "../types";

const getCSS: GetCSSFn = config => {
  return `
    body {
      font-size: 72px;
      color: white;
      background: linear-gradient(to bottom right, tomato, deeppink);
      padding: 4rem;
    }
  `;
};

const Component: LayoutComponent = ({ config }) => {
  const { title, description, tokenSymbol, address } = config;
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
      <p>{tokenSymbol}</p>
      <p>{address}</p>
    </div>
  );
};

export const simpleLayout: ILayout = {
  name: "Simple",
  properties: [{ name: "slug", type: "text", default: "" }],
  getCSS,
  Component,
};
