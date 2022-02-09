import { useState } from "react";

const Search = () => {
  const [value, setValue] = useState(null);
  return (
    <div className="search">
      <form>
        <input
          id="search"
          type="text"
          required
          placeholder="Article..."
          value={value}
          onInput={(e) => e.preventDefault().then(setValue(e.target.value))}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
