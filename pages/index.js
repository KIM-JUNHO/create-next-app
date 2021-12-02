export default function Home() {
  return (
    <div className="bg-gray-300">
      <div className="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl">
            <img className="h-10" src="/images/logo.svg" alt="Workaction" />
            <img
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
              src="/images/beach-work.jpg"
              alt="Woman workcationing on the beach"
            />
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              You can work from anywhere.
              <br className="hidden lg:inline" />
              <span className="text-indigo-500">Take advantage of it.</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Workcation helps you find work-friendly rentals in beautiful locations so you can
              enjoy some nice weather even when you're not on vacation.
            </p>
            <div className="mt-4 sm:mt-6">
              <a className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 text-white uppercase tracking-wider font-semibold text-sm sm:text-base">
                Book your escape
              </a>
            </div>
          </div>
        </div>
        <div className="hidden relative lg:block  2xl:col-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/images/beach-work.jpg"
            alt="Woman workcationing on the beach"
          />
        </div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
