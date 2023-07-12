"use client";
import { FC } from "react";
import styled from "styled-components";
import { ComponentRendering } from "@sitecore-jss/sitecore-jss-nextjs";
import { Placeholder } from "@sitecore-jss/sitecore-jss-nextjs";

type ValueField = {
  value: string;
};

type ColumnField = {
  heading: ValueField;
 
};

type GridProps = {
  fields: {
    data: {
      item: {
        desktop: ValueField;
        mobile: ValueField;
        ipad: ValueField;
        rowExtraCss: ValueField;
        description: ValueField;
        children: {
          results: ColumnField[];
        };
      };
    };
  };
  rendering: ComponentRendering;
};

const GridWrapper = styled.div<{ column: GridProps }>`
  display: grid;

  @media (min-width: 320px) {
    grid-template-columns: ${(props) => {
      return props.column.fields?.data?.item?.mobile.value;
    }};
  }

  @media (min-width: 768px) {
    grid-template-columns: ${(props) => {
      return props.column.fields?.data?.item?.ipad.value;
    }};
  }

  @media (min-width: 1024px) {
    grid-template-columns: ${(props) => {
      return props.column.fields?.data?.item?.desktop.value;
    }};
  }
`;

const Grid: FC<GridProps> = (props) => {
  console.log(props);
  const columns = props?.fields?.data?.item?.children?.results;
  //   props.column = {
  //     mobile: "1fr",
  //     ipad: "1fr 1fr 1fr 1fr",
  //     laptop: "2fr 1fr 1fr",
  //     desktop: "2fr 1fr 1fr",
  //   };
  return (
    <GridWrapper column={props}>
      {columns.map((column, index): JSX.Element => {
        // return <div key={index}>col 1</div>;
        return (
          <div key={`grid${index}`}>
            <Placeholder name={`col ${index + 1}`} rendering={props.rendering} />
          </div>
        );
      })}
    </GridWrapper>
  );
};

export default Grid;
