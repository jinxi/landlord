import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

//function ListGroup({items, heading, onSelectItem}: Props) {
function ListGroup(props: Props) {
  // StateHook
  //let selectedIndex = 0; replaced by below
  const [selectedIndex, setSelectedIndex] = useState(-1); // [variable (selectedIndex), updater function]

  //const message = items.length === 0 ? <p>No item found</p> : null;
  const getMessage = () => {
    return props.items.length === 0 ? <p>No item found</p> : null;
    //return items.length === 0 && <p>No item found</p>;
  };

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{props.heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            //className="list-group-item"
            key={item}
            onClick={
              //(event) => console.log("Clicked " + index + " " + item ) / log(event) / handleClick

              () => {
                setSelectedIndex(index);
                props.onSelectItem(item);
              }
            }
          >
            {item}
          </li> // key={item.id}
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
