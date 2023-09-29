import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
}

export default App;

// Commented out the app here because it was just getting too big. If you ever want to add elements back in just do it man!!

// import { useState, useRef, useEffect } from "react";
// import Alert from "./components/Alert";
// import ListGroup from "./components/ListGroup";
// import Button from "./components/Button";
// import Header from "./components/Header";
// import LikeIcon from "./components/like";
// import Spacer from "./components/spacer";
// import styled from "styled-components";
// import produce from "immer";
// import NavBar from "./components/NavBar";
// import Cart from "./components/Cart";
// import ExpandableText from "./components/ExpandableText";
// import Form from "./components/Form";
// import ProductList from "./components/ProductList";

// const Container = styled.div`
//   padding: 15px;
// `;

// const connect = () => console.log("Connecting");
// const disconnect = () => console.log("Disconnecting");

// function App() {
//   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

//   const ref = useRef<HTMLInputElement>(null);
//   const [category, setCategory] = useState<string>("");

//   useEffect(() => {
//     connect();

//     return () => disconnect();
//   });

//   useEffect(() => {
//     document.title = "React Tutorial App";
//   });

//   const [showAlert, setShowAlert] = useState(false);
//   const [cart, setCart] = useState({
//     discount: 0.1,
//     items: [
//       { id: 1, title: "Product 1", quantity: 1 },
//       { id: 2, title: "Product 2", quantity: 1 },
//     ],
//   });

//   let itemList = cart["items"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   const handleClick = () => {
//     setCart((cart) => ({
//       ...cart,
//       items: cart.items.map((item) =>
//         item.id === 1 ? { ...item, quantity: 2 } : item
//       ),
//     }));
//   };

//   return (
//     <>
//       <Container>
//         <select
//           className="form-select"
//           onChange={(e) => setCategory(e.target.value)}
//         >
//           <option value=""></option>
//           <option value="Clothing">Clothing</option>
//           <option value="Household">Household</option>
//         </select>
//         <ProductList category={category}></ProductList>
//       </Container>

//       <Container>
//         <input ref={ref} type="text" className="form-control" />
//       </Container>

//       <Container>
//         <Form />
//       </Container>

//       <Container>
//         <ExpandableText>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ipsam
//           voluptate doloribus tempore soluta! Cum minus corporis, suscipit
//           accusantium earum quibusdam quos dolor aspernatur ducimus beatae dicta
//           porro reiciendis blanditiis!
//         </ExpandableText>
//       </Container>

//       <Container>
//         {itemList.map((item) => (
//           <li key={item.title}>
//             {item.title}: {item.quantity}
//           </li>
//         ))}
//         <Button text="Clear Cart" onClick={handleClick} />
//       </Container>

//       <Container>
//         <LikeIcon onClick={() => console.log("Clicked")} />
//       </Container>

//       <div style={{ padding: "15px" }}>
//         <ListGroup
//           items={items}
//           heading="Cities"
//           onSelectItem={handleSelectItem}
//         />
//       </div>

//       <div style={{ padding: "15px" }}>
//         {showAlert && (
//           <Alert onClose={() => setShowAlert(!showAlert)}>
//             <h1>Alert</h1>
//           </Alert>
//         )}
//         <Button
//           text="Button Text"
//           color="secondary"
//           onClick={() => setShowAlert(!showAlert)}
//         />
//       </div>
//     </>
//   );
// }
