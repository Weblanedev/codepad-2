import { Link } from 'react-router-dom';
import {
  useEffect,
  // useState
} from 'react';
import { Service, services } from './data/services';
import banner from './assets/digital_solutions.webp';

const ServicesPage = ({
  setSelectedProduct,
}: {
  setSelectedProduct: (selectedBook: Service) => void;
}) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  // const [selectedGenre, setSelectedGenre] = useState<string>(
  //   'Business/Entrepreneurship'
  // );

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;

    const targetId = href.replace(/.*#/, '');
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-full h-full flex flex-col pt-[66px] md:pt-[80px]">
      <section className="flex bg-blue-500/30 flex-col-reverse xl:flex-row h-[90vh] md:h-[55vh] px-10 md:px-[130px] items-center justify-center md:justify-between gap-5">
        <div className=" text-black flex flex-col gap-9 md:gap-12 items-center justify-center md:items-start">
          <h1 className="font-medium md:font-semibold text-[50px] sm:text-[40px] md:text-[50px] md:text-left w-full md:w-[530px] leading-snug md:leading-[62px] text-center text-blue-950">
            Explore our satisfactory services
          </h1>

          <p className="text-center md:text-left mt-[-30px] w-[450px] md:w-[330px] text-blue-950">
            Remote Access and Support Solutions for Individuals, Teams, and
            Businesses
          </p>

          <Link
            to="#services"
            id="services"
            onClick={handleScroll}
            className="mb-4 text-base font-medium text-white bg-blue-500 rounded-full px-7 md:px-12 py-4 md:py-5 hover:bg-blue-600 flex items-center justify-center gap-3"
          >
            Explore Services
          </Link>
        </div>

        <img
          //   TODO: replace image
          src={banner}
          alt=""
          className="w-full h-[300px] md:h-[300px] md:w-[500px] object-cover rounded-xl shadow-lg"
        />
      </section>

      <section className="flex mt-10 bg-white w-full flex-col px-10 md:px-[130px] items-center justify-center md:justify-between gap-5 pb-14 md:pb-20">
        {/* <div className="flex gap-5 w-full overflow-x-auto py-5 items-start md:items-center md:justify-center mb-5 border-b">
          {genres.map(genre => (
            <button
              onClick={() => setSelectedGenre(genre.name)}
              className={`text-sm font-medium text-white transition-colors  ${
                selectedGenre === genre.name
                  ? '!bg-blue-500 hover:!bg-blue-600 !text-white border border-blue-500'
                  : 'bg-white border border-blue-500 !text-blue-500 hover:bg-blue-500 hover:!text-white'
              } rounded-full px-7 md:px-8 py-2 md:py-3 hover:bg-blue-600 flex items-center justify-center gap-3`}
            >
              {genre.name}
            </button>
          ))}
        </div> */}

        <div className="flex flex-col flex-wrap md:flex-row gap-8 items-center justify-center">
          {services.map(service => (
            <div className="flex flex-col items-center justify-center pt-12 pb-8 px-16 gap-7 bg-blue-50/50 text-blue-900 round ed-xl">
              <img
                src={service.image}
                alt=""
                className="w-full h-[160px] object-cover rounded-xl shadow-lg"
              />
              <h4 className="font-medium text-[18px] leading-tight text-center w-[200px]">
                {service.title}
              </h4>
              <p className="mt-[-15px] text-[12px] text-center w-[200px] line-clamp-3">
                {service.description}
              </p>
              <h4 className="mt-[-15px] font-bold text-[18px] leading-tight text-center w-[200px] line-clamp-2">
                {service.price}
              </h4>
              <Link
                to="/billing"
                onClick={() => setSelectedProduct(service)}
                className="text-base font-medium text-white bg-blue-500 rounded-full px-7 md:px-8 py-2 md:py-3 hover:bg-blue-600 flex items-center justify-center gap-3"
              >
                Purchase
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
