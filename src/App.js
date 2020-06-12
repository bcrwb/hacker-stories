import React from "react";

function App() {
  const stories = [
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
  const [searchTerm, setSearchTerm] = React.useState("React");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search onSearch={handleSearch} search={searchTerm}/>
      <hr />
      <List list={searchedStories} />
    </div>
  );
}

const Search = (props) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input value={props.search} id="search" type="text" onChange={props.onSearch} />
      <p>
        Searching for <strong>{props.search}</strong>
      </p>
    </div>
  );
};

const List = (props) => {
  return (
    <div>
      {props.list.map((listItem) => (
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
