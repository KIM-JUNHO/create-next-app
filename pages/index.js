import HockeyTeamList from '../components/hockeyTeamList';
import teams from '../components/teams.json';

export default function Home() {
  return (
    <div>
      <HockeyTeamList teams={teams} />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <div className="p-4">{page}</div>;
};
