import Layout from '@/components/Layout'
import Hero from '@/components/hero/hero';
import MetaTags from '@/components/meta-tags'


export default function Home() {
  return (
    <Layout>
      <MetaTags title="Homepage" description="Welcome to Wealthhat"/>
      <Hero/>
    </Layout>
  );
}
