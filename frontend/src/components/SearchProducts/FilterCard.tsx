import { FaChevronDown } from "react-icons/fa6";
type propsType = {
  filter: any;
  handleFilter: any;
  activeFilter: string[];
  handleActiveFilter: (type: string) => void;
};
export default function FilterCard({
  filter,
  handleFilter,
  activeFilter,
  handleActiveFilter,
}: propsType) {
  return (
    <div className="px-4 flex flex-col gap-y-2">
      <div className="flex justify-between items-center">
        <h2 className="font-Poppins font-medium">{filter.title}</h2>
        <span
          onClick={() => handleActiveFilter(filter.type)}
          className={`h-fit transition-transform duration-300 cursor-pointer ${
            activeFilter.includes(filter.type) ? "rotate-0" : "rotate-180"
          }`}
        >
          <FaChevronDown />
        </span>
      </div>
      <div
        className={`ml-4 flex flex-col gap-y-1 transition-all duration-300 overflow-hidden  max-h-fit  ${
          activeFilter.includes(filter.type) ? "h-full" : "h-0"
        }`}
      >
        {filter.value.map((item: any) => (
          <div key={item} className="flex gap-x-2 items-center p-2">
            <input
              name="size"
              type="checkbox"
              className=""
              value={item}
              onChange={handleFilter}
              //   checked={filter.includes(item)}
            />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
