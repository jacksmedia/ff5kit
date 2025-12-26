import { NextPage } from 'next';
import Layout from '@/layout';
import FF5Title from "@/components/FF5Title";

const Patches: NextPage = () => {
  return (
    <Layout>      
      <div className='discord-bg'>
        <h1 className="">FF4 Ultima Patches</h1>
        <FF5Title />
        <p>Full list coming soon</p>
      </div>
    </Layout>
  );
};

export default Patches;