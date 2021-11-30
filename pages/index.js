export default function Home() {
  return <div className="bg-red-400">Hello World</div>;
}

Home.getLayout = function getLayout(page) {
  return <div className="p-4">{page}</div>;
};
