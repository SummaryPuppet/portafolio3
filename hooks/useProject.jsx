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
 
  const sortDates = (date1, date2) => {
    date1 = new Date(date1.created_at)
    date2 = new Date(date2.created_at)

    return date1 - date2
  }

  const sorts = {
    "a-z": () => setFindRepos(findRepos.sort(sortNames)),
    "z-a": () => setFindRepos(findRepos.sort(sortNames).reverse()),
    last: () => setFindRepos(findRepos.sort(sortDates).reverse()),
    first: () => setFindRepos(findRepos.sort(sortDates)),
  };

  const sortChange = (sortO) => {
    setSortOption(sortO);

    const sort = sorts[sortO];
    console.log(sort)
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
    console.log(findRepos)
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
