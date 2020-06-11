import React from "react";

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  const handleInputChange = event => {
    console.log(event.target.value)
  }
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleInputChange} />
      <hr />
      <List />
    </div>
  );
}

const List = () => {
  return (
    <div>
      {list.map((listItem) => (
        <div key={listItem.objectID}>
          <span>
            <a href={listItem.url}> {listItem.title}</a>
          </span>
          <span>{listItem.author}</span>
          <span>{listItem.num_comments}</span>
          <span>{listItem.points}</span>
        </div>
      ))}
     
    </div>
  );
};



  
export default App;
