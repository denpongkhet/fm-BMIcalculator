import BMICalculator from "./BMICalculator";
import BMIResult from "./BMIResult";
import Limitation from "./Limitation";
import Tips from "./Tips";

const Home = () => {
  return (
    <div className="relative">
      <div className="bg-my-gradient w-full h-[70vh] absolute top-0 left-0 -z-10 rounded-b-[2.1875rem] md:h-[45vh] xl:w-3/4 xl:h-[26%] " />
      <div className="flex flex-col gap-24 md:py-8 xl:px-36 xl:py-22">
        <main className="flex flex-col items-center justify-center px-6  gap-8 md:gap-10 xl:items-start ">
          <img src="/images/logo.svg" alt="logo" className="w-9" />
          <div className="grid grid-cols-1 place-items-start gap-8 md:gap-10 xl:grid-cols-2">
            <div className=" text-center xl:text-start">
              <h1 className="text-preset-1-2 text-blue-900 mb-6 ">
                Body Mass Index Calculator
              </h1>
              <p className="text-preset-6-reg text-grey-500 md:px-16 xl:px-0">
                Better understand your weight in relation to your height using
                our body mass index (BM) calculator. While BMI is not the sole
                determinant of a healthy weight, it offers a valuable starting
                point to evaluate your overall health and well-being.
              </p>
            </div>
            <BMICalculator />
          </div>
        </main>
        <BMIResult />
        <Tips />
        <Limitation />
      </div>
    </div>
  );
};
export default Home;
