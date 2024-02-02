import { FaSearch } from "react-icons/fa";

interface LocationInputProps {
  location: string;
  setLocation: (value: string) => void;
  handleSubmit: any;
}

const LocationInput: React.FC<LocationInputProps> = ({ handleSubmit, location, setLocation }) => {
  return (
    <form className="flex flex-row border-b-[1px] border-white mb-5">
      <input
        className="w-full h-10 bg-transparent text-white placeholder-gray-200 outline-none"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        <FaSearch className="md:ml-5 md:mr-5 text-white" />
      </button>
    </form>
  );
};

export default LocationInput;
