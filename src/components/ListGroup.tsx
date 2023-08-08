import { MouseEvent } from "react";
function ListGroup() {
  //this is how adding a simple component

  // return (

  // <ul className="list-group">
  //   <li className="list-group-item">An item</li>
  //   <li className="list-group-item">A second item</li>
  //   <li className="list-group-item">A third item</li>
  //   <li className="list-group-item">A fourth item</li>
  //   <li className="list-group-item">And a fifth one</li>
  // </ul>

  // );

  //this is how fragments do

  // return (
  // <>
  //   <h1>This is a list group</h1>
  //     <ul className="list-group">
  //       <li className="list-group-item">An item</li>
  //       <li className="list-group-item">A second item</li>
  //       <li className="list-group-item">A third item</li>
  //       <li className="list-group-item">A fourth item</li>
  //       <li className="list-group-item">And a fifth one</li>
  //     </ul>
  // </>
  //   );

  //this is rendering list

  // //add an array for the list
  // let items = ["Bangkok", "Manila", "Nakon si Thamarrat", "Tokyo"];

  // //add an arrow function
  // //use curely braces to render elements dynamically

  // return (
  //   <>
  //     <h1>This is a list group</h1>
  //     <ul className="list-group">
  //       {items.map((itemy) => (
  //         <li key={itemy}>{itemy}</li>
  //       ))}
  //     </ul>
  //   </>
  // );


  //adding if statement
  //add an array for the list

  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1>This is a list Group</h1>
  //       <p>No list item</p>
  //     </>
  //   );

  //add an arrow function
  //use curely braces to render elements dynamically
  //use ternary operator in javascript instead of if-else statement

  // return (
  //   <>
  //     <h1>This is a list group</h1>
  // { items.length === 0 ? <p>No items found</p> : null  }
  //     <ul className="list-group">
  //       {items.map((itemy) => (
  //         <li key={itemy}>{itemy}</li>
  //       ))}
  //     </ul>
  //   </>
  // );


  //simplify logic by assigning it as a constant

  // const logic =  items.length === 0 ? <p>No items found</p> : null 

  // return (
  //   <>
  //     <h1>This is a list group</h1>
  // {logic}
  //     <ul className="list-group">
  //       {items.map((itemy) => (
  //         <li key={itemy}>{itemy}</li>
  //       ))}
  //     </ul>
  //   </>
  // );

  //This is a more concise way if we're using logical and
  // const logic = items.length === 0 && <p>No items found</p>

  // return (
  //   <>
  //     <h1>This is a list group</h1>
  //     {logic}
  //     <ul className="list-group">
  //       {items.map((itemy, index) => (
  //         <li className="list-group-item" onClick={() => console.log(itemy, index)} key={itemy}>{itemy}</li>
  //       ))}
  //     </ul>
  //   </>
  // );

  let items = ["Bangkok", "Manila", "Nakon si Thamarrat", "Tokyo"];

//create a function handleClick
//Event Handler

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>This is a list group</h1>
      <ul className="list-group">
        {items.map((itemy, index) => (
          <li className="list-group-item" onClick={handleClick} key={itemy}>{itemy}</li>
        ))}
      </ul>
    </>
  );


}
export default ListGroup;
