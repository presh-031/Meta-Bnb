const CardsContainer = ({ children }) => {
  return (
    <div className="mx-auto grid w-fit  grid-cols-1 gap-[2.4rem] min-[630px]:grid-cols-2 lg:grid-cols-3 min-[1200px]:grid-cols-4 ">
      {children}
    </div>
  );
};

export default CardsContainer;
