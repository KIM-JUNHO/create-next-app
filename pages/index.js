export default function Home() {
  return (
    <main>
      <div class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Beautiful digital design assets
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
            commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a
                href="#"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 divide-x divide-gray-600 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
              >
                <span className="pr-6">Get the bundle</span>
                <span className="pl-6">$199</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
