import React from 'react';

interface ILayout {
  children: React.ReactNode;
}

const UiLayout = ({ children }: ILayout) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default UiLayout;
