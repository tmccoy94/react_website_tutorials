import { useState } from "react";
// import styles from "./ListGroup.module.css"; used for vanilla css solutions
// import styled from "styled-components";

// Styled allows you to use css within the file, no extra files needed
// interface ListItemProps {
//   active: boolean;
// }

// const List = styled.ul`
//   background: red;
//   padding: 50;
// `;

// const ListItem = styled.li<ListItemProps>`
//   background: ${(props) => (props.active ? "blue" : "none")};
//   padding: 50;
// `;

// add something to pass into the ListGroup func instaed of hardcoding
// { items: [], heading: string }
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  let [selectedIndex, setSelectedIndex] = useState(-1);
  //   arr[0] // variable (selectedIndex)
  //   arr[1] // updater function

  // use ternary operator (condition ? value_if_true : value_if_false)
  // just a concise way to use conditional logic control flow.
  // also wrapping it in a function so it can take multiple conditions
  // into consideration when choosing what to display.
  //   const getMessage = () => {
  //     items.length === 0 ? <p>No item found</p> : null;
  //   };

  // Event handler
  //   const handleClick = (event: MouseEvent) => console.log(event);

  return (
    // this <> syntax auto does a fragment (import { Fragment } from "react";)
    // in react each element has a property called "onClick"
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            // active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

// In react a component cannot return more than one element.

export default ListGroup;
