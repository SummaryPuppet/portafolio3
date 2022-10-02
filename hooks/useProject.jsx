import { useEffect, useState } from "react";

export default function useProject(repos = []) {
  const [search, setSearch] = useState("");
  const [findRepos, setFindRepos] = useState(repos);
  const [hStyle, setHStyle] = useState("h-full");
  const [sortOption, setSortOption] = useState("");

  const searchChange = (searchText = "") => {
    setSearch(searchText);
    setFindRepos(repos.filter((repo) => repo.name.includes(search)));
  };

  const sortNames = (word1, word2) => {
    if (word1.name.toLowerCase() < word2.name.toLowerCase()) {
      return -1;
    }

    if (word1.name.toLowerCase() > word2.name.toLowerCase()) {
      return 1;
    }

    return 0;
  };

  const sorts = {
    "z-a": () => findRepos.sort(sortNames),
    "a-z": () => findRepos.sort(sortNames).reverse(),
    last: () => findRepos.sort((x, y) => x - y),
    first: () => findRepos.sort((x, y) => y - x),
  };

  const sortChange = (sortO) => {
    setSortOption(sortO);

    const sort = sorts[sortO];
    sort();
  };

  useEffect(() => {
    if (!search) {
      setFindRepos(repos);
      setHStyle("h-full");
    }
    if (findRepos.length < 7) {
      setHStyle("h-screen");
    }
  });

  return {
    search,
    findRepos,
    hStyle,
    searchChange,
    sortOption,
    sortChange,
  };
}
