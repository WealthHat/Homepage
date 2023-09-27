import Layout from '@/components/Layout'
import Blog from '@/components/blog/blog';
import Firm from '@/components/firm/firm';
import Hero from '@/components/hero/hero';
import MetaTags from '@/components/meta-tags'
import Subscribe from '@/components/subscribe/subscribe';


export default function Home() {
  return (
    <Layout>
      <MetaTags title="Homepage" description="Welcome to Wealthhat"/>
      <Hero/>
      <Firm/>
      <Blog/>
      <Subscribe/>
    </Layout>
  );
}
