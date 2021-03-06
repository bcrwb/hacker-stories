import React, { useEffect } from "react";

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

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

  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "React");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <InputWithLabel
        id="search"
        label="Search"
        onInputChange={handleSearch}
        value={searchTerm}
        type="text"
      />
      <hr />
      <List list={searchedStories} />
    </div>
  );
}

const InputWithLabel = ({ value, onInputChange, id, label, type }) => {
  return (
    <>
      <label htmlFor={id}>{label} </label>
      <input type={type} value={value} id={id} onChange={onInputChange} />

      <p>
        Searching for <strong>{value}</strong>
      </p>
    </>
  );
};

const List = ({ list }) => {
  return list.map(({ objectID, ...listItem }) => (
    <Item key={objectID} {...listItem} />
  ));
};

const Item = ({ title, url, author, num_comments, points }) => {
  return (
    <div>
      <span>
        <a href={url}>{title}</a>
      </span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>
    </div>
  );
};

export default App;
