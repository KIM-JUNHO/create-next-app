export default function Home() {
  return <div>Hello World</div>;
}

Home.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
