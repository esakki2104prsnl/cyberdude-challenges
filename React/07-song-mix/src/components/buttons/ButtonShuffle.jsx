const ButtonShuffle = () => {
  return (
    <div>
      <button className="text-md flex items-center gap-x-1 bg-teal-300 hover:bg-teal-400 p-2 rounded m-2 font-semibold hover:cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M19.707 4.293A1 1 0 0 0 18 5.01l.01.989h-1.745a5 5 0 0 0-4.288 2.428l-3.67 6.115A3 3 0 0 1 5.736 16H3a1 1 0 1 0 0 2h2.735a5 5 0 0 0 4.288-2.427l3.67-6.116A3 3 0 0 1 16.264 8h1.767l.008.72a1 1 0 0 0 1.667.987l.042-.042l-.707-.707l.707.707l1.958-1.958a1 1 0 0 0 0-1.414zM3 6a1 1 0 0 0 0 2h2.735a3 3 0 0 1 2.154.911A1 1 0 1 0 9.324 7.52A5 5 0 0 0 5.735 6zm18.707 10.293l-2-2A1 1 0 0 0 18 15v1h-1.735a3 3 0 0 1-2.154-.911a1 1 0 0 0-1.435 1.393A5 5 0 0 0 16.265 18H18v1a1 1 0 0 0 1.707.707l2-2a1 1 0 0 0 0-1.414"
            clipRule="evenodd"
          />
        </svg>
        Shuffle
      </button>
    </div>
  );
};

export default ButtonShuffle;
