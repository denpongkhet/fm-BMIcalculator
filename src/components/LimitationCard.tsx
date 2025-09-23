interface LimitationCardProps {
  index: number;
  image: string;
  title: string;
  content: string;
}

const LimitationCard = ({
  index,
  image,
  title,
  content,
}: LimitationCardProps) => {
  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-1 
    ${
      index === 0
        ? "md:col-span-2 xl:col-span-4 xl:row-start-1 xl:col-start-8 "
        : ""
    }
    ${
      index === 1
        ? "md:col-span-2 xl:col-span-4 xl:row-start-2 xl:col-start-5"
        : ""
    }
    ${
      index === 2
        ? "md:col-span-2 xl:col-span-4 xl:row-start-2 xl:col-start-9"
        : ""
    }
    ${
      index === 3
        ? "md:col-span-2 xl:col-span-4 xl:row-start-3 xl:col-start-3"
        : ""
    }
    ${
      index === 4
        ? "md:col-span-2 md:col-start-2 xl:col-span-4 xl:row-start-3 xl:col-start-7"
        : ""
    }
    `}
    >
      <div className="flex items-center gap-4 mb-4">
        <img src={image} alt="" />
        <h3 className="text-preset-5">{title}</h3>
      </div>
      <p className="text-preset-6-reg text-grey-500">{content}</p>
    </div>
  );
};
export default LimitationCard;
