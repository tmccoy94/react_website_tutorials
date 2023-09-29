import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Header from "./components/Header";
import LikeIcon from "./components/like";
import Spacer from "./components/spacer";
import styled from "styled-components";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";

const Container = styled.div`
  padding: 15px;
`;

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const [showAlert, setShowAlert] = useState(false);
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  let itemList = cart["items"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleClick = () => {
    setCart((cart) => ({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: 2 } : item
      ),
    }));
  };

  return (
    <>
      <Container>
        <Form />
      </Container>

      <Container>
        <ExpandableText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ipsam
          voluptate doloribus tempore soluta! Cum minus corporis, suscipit
          accusantium earum quibusdam quos dolor aspernatur ducimus beatae dicta
          porro reiciendis blanditiis!
        </ExpandableText>
      </Container>

      <Container>
        {itemList.map((item) => (
          <li key={item.title}>
            {item.title}: {item.quantity}
          </li>
        ))}
        <Button text="Clear Cart" onClick={handleClick} />
      </Container>

      <Container>
        <LikeIcon onClick={() => console.log("Clicked")} />
      </Container>

      <div style={{ padding: "15px" }}>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>

      <div style={{ padding: "15px" }}>
        {showAlert && (
          <Alert onClose={() => setShowAlert(!showAlert)}>
            <h1>Alert</h1>
          </Alert>
        )}
        <Button
          text="Button Text"
          color="secondary"
          onClick={() => setShowAlert(!showAlert)}
        />
      </div>
    </>
  );
}

export default App;
