const RightOverlayContent = ({ isAnimated, setIsAnimated }) => {
  return (
   
    <div className="p-8 text-center ">
      <h1 className="text-4xl font-bold text-white mb-4">
       Нямате профил ?
      </h1>

      <h5 className="text-2xl text-white text-center ">Регистрирайте се в Капитал</h5>
      <div className="flex justify-center">
      <ul className="text-white text-base text-center mt-4 >">
        <div className="text-left ml-24">
        <li>Четете до 5 статии на месец. </li>
        <li>Получавате безплатни бюлетини. </li>
        <li> Запазвате статии. </li>
        <li> Влизате с един профил и парола в Капитал, Кариери, Дневник </li> 
        </div>
      </ul>
     
      </div>
      <div className="mt-16">
        <button
          className="py-3 px-6 bg-transparent rounded-full text-center text-white font-bold uppercase ring-2 ring-white active:scale-110 transition-transform ease-in"
          onClick={(e) => {
            setIsAnimated(!isAnimated);
          }}
        >
          Регистрация
        </button>
      </div>
    </div>
   
  );
};

export default RightOverlayContent;
