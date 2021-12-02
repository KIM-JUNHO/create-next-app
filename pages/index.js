import { useState } from 'react';
import Sidebar from '../components/layout/sidebar';
import SidebarMobile from '../components/layout/SidebarMobile';
import MainHeader from '../components/layout/MainHeader';
import MainBody from '../components/layout/MainBody';

export default function Home() {
  return <div>Home</div>;
}

Home.getLayout = function getLayout(page) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <Sidebar />
      <SidebarMobile sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="md:pl-64 flex flex-col">
        <MainHeader setSidebarOpen={setSidebarOpen} />
        <MainBody>{page}</MainBody>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}
