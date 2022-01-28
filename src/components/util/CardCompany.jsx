const CardCompany = ({image, title, info}) => {
  return (
    <div className="inline-block px-3">
      <div className="w-64 h-80 max-w-xs overflow-hidden bg-cyan-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="flex flex-col mx-5 my-5 items-center justify-center w-10/12 ">
          <img
            src={image}
            className="rounded-xl hover:brightness-50 cursor-pointer"
          />
        </div>
        <div className="flex flex-col mx-5 my-5 w-10/12">
          <h3 className="text-lg font-bold items-start text-[#003366] cursor-pointer">
            {title}
          </h3>
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
};

export default CardCompany;
