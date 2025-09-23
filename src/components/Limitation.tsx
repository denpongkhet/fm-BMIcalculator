import LimitationCard from "./LimitationCard";

const limitationsInfo = [
  {
    image: "/images/icon-gender.svg",
    title: "Gender",
    content:
      "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
  },
  {
    image: "/images/icon-age.svg",
    title: "Age",
    content:
      "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
  },
  {
    image: "/images/icon-muscle.svg",
    title: "Muscle",
    content:
      "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
  },
  {
    image: "/images/icon-pregnancy.svg",
    title: "Pregnancy",
    content:
      "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
  },
  {
    image: "/images/icon-race.svg",
    title: "Race",
    content:
      "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
  },
];

const Limitation = () => {
  return (
    <section className="px-6 xl:px-0 ">
      <div className="text-center mb-14 xl:hidden">
        <h2 className="text-preset-2-3 mb-8">Limitations of BMI</h2>
        <p className="text-preset-6-reg text-grey-500">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 xl:grid-cols-12 xl:grid-rows-3">
        <div className="text-center mb-14 hidden xl:block xl:text-start xl:col-span-5">
          <h2 className="text-preset-2-3 mb-8">Limitations of BMI</h2>
          <p className="text-preset-6-reg text-grey-500">
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        {limitationsInfo.map((item, index) => (
          <LimitationCard
            key={index}
            index={index}
            image={item.image}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </section>
  );
};
export default Limitation;
