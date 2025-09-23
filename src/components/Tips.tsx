const Tips = () => {
  return (
    <article className="flex flex-col bg-my-gradient-2 xl:scale-x-115 xl:rounded-4xl xl:flex-row px-6 gap-10 md:px-10 py-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-10 xl:flex-col xl:items-start">
        <img
          src="/images/icon-eating.svg"
          alt="food icon"
          className="w-12 h-12"
        />
        <div>
          <h4 className="mb-6 text-preset-4 text-blue-900">Healthy eating</h4>
          <p className="text-preset-6-reg text-grey-500">
            Healthy eating promotes weight control, disease prevention, better
            digestion, immunity, mental clarity, and mood.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-10  xl:flex-col xl:items-start ">
        <img
          src="/images/icon-exercise.svg"
          alt="food icon"
          className="w-12 h-12"
        />
        <div>
          <h4 className="mb-6 text-preset-4 text-blue-900">Regular exercise</h4>
          <p className="text-preset-6-reg text-grey-500">
            Exercise improves fitness, aids weight control, elevates mood, and
            reduces disease risk, fostering wellness and longevity.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-10  xl:flex-col xl:items-start">
        <img
          src="/images/icon-sleep.svg"
          alt="food icon"
          className="w-12 h-12"
        />
        <div>
          <h4 className="mb-6 text-preset-4 text-blue-900">Adequate sleep</h4>
          <p className="text-preset-6-reg text-grey-500">
            Sleep enhances mental clarity, emotional stability, and physical
            wellness, promoting overall restoration and rejuvenation.
          </p>
        </div>
      </div>
    </article>
  );
};
export default Tips;
