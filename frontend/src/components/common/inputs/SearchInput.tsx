export const SearchInput = ({ ...props }) => {
  return (
    <input
      type="text"
      className="w-full p-4 text-base border-2 border-gray-200 rounded-3xl"
      placeholder="Search"
      {...props}
    />
  );
};
