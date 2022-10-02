export default function ProjectSearchBar({
  inputValue,
  inputChange,
  selectValue,
  selectChange,
}) {
  return (
    <header className="flex justify-center gap-3">
      <input
        className="p-1 bg-transparent border-2 border-green-500 dark:text-neutral-200 rounded"
        value={inputValue}
        onChange={(e) => inputChange(e.target.value)}
      />

      <select
        className="bg-stone-600"
        value={selectValue}
        onChange={(e) =>selectChange(e.target.value)}
      >
        <option disabled>
          Sort
        </option>
        <option value="a-z">A - Z</option>
        <option value="z-a">Z - A</option>
        <option value="last">Last project</option>
        <option value="first">First project</option>
      </select>
    </header>
  );
}
