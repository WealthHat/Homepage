import Layout from '@/components/Layout'
import Blog from '@/components/blog/blog';
import Hero from '@/components/hero/hero';
import MetaTags from '@/components/meta-tags'


export default function Home() {
  return (
    <Layout>
      <MetaTags title="Homepage" description="Welcome to Wealthhat"/>
      <Hero/>
      <Blog/>
    </Layout>
  );
}
