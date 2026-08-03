function TailwindButton() {
  return (
    <button
      className="
          rounded-lg
          border-2
          border-blue-600
          bg-blue-600
          px-5
          py-2.5
          font-bold
          text-white
          transition
          hover:bg-white
          hover:text-blue-600
        "
      type="button"
    >
      Tailwind 버튼
    </button>
  );
}

export default TailwindButton;
