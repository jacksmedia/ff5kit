import { NextPage } from 'next';
import Layout from '@/layout';
import FF5Title from "@/components/FF5Title";

const Guides: NextPage = () => {
  return (
    <Layout>      
      <div className='guides-bg'>
        <h1 className="">FF5 Guides</h1>
          <FF5Title />
        <ul>
			
        	<li>
			        FFV Walkthru
			</li>
        	<li>
			        FFV Central
			</li>
        </ul>
	
      </div>
    </Layout>
  );
};

export default Guides;