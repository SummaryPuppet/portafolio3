export default function ProjectSearchBar({
  inputValue,
  inputChange,
  selectValue,
  selectChange,
  languages = [],
}) {
  return (
    <header className="flex justify-center gap-3">
      <input
        className="p-1 bg-transparent border-2 border-green-800 focus:outline-none text-neutral-200 rounded"
        value={inputValue}
        onChange={(e) => inputChange(e.target.value)}
      />

      <select
        className="bg-stone-600 focus:outline-none"
        value={selectValue}
        onChange={(e) => {
          selectChange(e.target.value);
        }}
      >
        <option disabled>Sort</option>
        <option value="a-z">A - Z</option>
        <option value="z-a">Z - A</option>
        <option value="last">Last project</option>
        <option value="first">First project</option>

        {/*
        <optgroup label="Dev Languages">
          {languages.map((lang, index) => (
            <option key={index} value={`lang-${lang}`}>
              {lang}
            </option>
          ))}
        </optgroup>
        */}
      </select>
    </header>
  );
}
