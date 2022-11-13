const CardsContainer = ({ children }) => {
  return (
    <div className="grid grid-cols-1 gap-[2.4rem] outline sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-[4.8rem]">
      {children}
    </div>
  );
};

export default CardsContainer;
