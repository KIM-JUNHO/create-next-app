import Recipes from '../components/Receipes/Recipes';
import recipes from '../components/Receipes/recipes.json';

export default function Home() {
  return (
    <div>
      <Recipes recipes={recipes} />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
