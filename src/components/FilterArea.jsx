import location from "../assets/location.svg";

const FilterArea = () => {
  return (
    <div>
      <ul>
        <li>Resturant</li>
        <li>Cottage</li>
        <li>Castle</li>
        <li>fantast city</li>
        <li>beach</li>
        <li>Carbins</li>
        <li>Off-grid</li>
        <li>Farm</li>
      </ul>
      <div>
        <p>Location</p>
        <img src={location} alt="select-location" />
      </div>
    </div>
  );
};

export default FilterArea;
