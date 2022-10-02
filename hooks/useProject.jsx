import { useEffect, useState } from "react";

export default function useProject(repos = []) {
  const [search, setSearch] = useState("");
  const [findRepos, setFindRepos] = useState(repos);
  const [hStyle, setHStyle] = useState("h-full");
  const [sortOption, setSortOption] = useState("");
  const [languages, setLanguages] = useState(() => {
    const langs = repos.map((repo) => repo.language);
    const l = new Set(langs);

    return [...l];
  });

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
    date1 = new Date(date1.created_at);
    date2 = new Date(date2.created_at);

    return date1 - date2;
  };

  const sortLangs = (lang) => {
    console.log(lang);
    const r = repos.filter((repo) => repo.language == lang);
    console.log(r);
    setFindRepos(repos.filter((repo) => repo.language == lang));
    console.log(findRepos);
  };

  const sorts = {
    "a-z": () => setFindRepos(findRepos.sort(sortNames)),
    "z-a": () => setFindRepos(findRepos.sort(sortNames).reverse()),
    last: () => setFindRepos(findRepos.sort(sortDates).reverse()),
    first: () => setFindRepos(findRepos.sort(sortDates)),

    "lang-JavaScript": () => sortLangs("JavaScript"),
    "lang-TypeScript": () => sortLangs("TypeScript"),
    "lang-Go": () => sortLangs("Go"),
    "lang-Python": () => sortLangs("Python"),
    "lang-Css": () => sortLangs("Css"),
    "lang-Vue": () => sortLangs("Vue"),

    "lang-null": () => console.log("null"),
    

    default: () => {
      console.log("default");
    },
  };

  const sortChange = (sortO) => {
    setSortOption(sortO);

    const sort = sorts[sortO || "default"];
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
  }, [search, findRepos]);

  return {
    search,
    findRepos,
    hStyle,
    searchChange,
    sortOption,
    sortChange,
    languages,
  };
}
