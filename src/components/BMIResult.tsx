const BMIResult = () => {
  return (
    <section className="flex flex-col items-center gap-12 md:gap-18 md:-translate-x-18 md:flex-row xl:translate-x-0">
      <img
        src="/images/image-man-eating.webp"
        alt="man is smiling and eating"
        className="w-100"
      />
      <div className="px-8 md:px-0">
        <h2 className="text-preset-2-3 text-blue-900 mb-8">
          What your BMI result means
        </h2>
        <p className="text-preset-6-reg text-grey-500">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </section>
  );
};
export default BMIResult;
