import Layout from '@/components/Layout';
import Blog from '@/components/blog/blog';
import Client from '@/components/clients/clients';
import Different from '@/components/different/different';
import Firm from '@/components/firm/firm';
import Hero from '@/components/hero/hero';
import MetaTags from '@/components/meta-tags';
import Services from '@/components/services/services';
import Subscribe from '@/components/subscribe/subscribe';

export default function Home() {
  return (
    <Layout>
      <MetaTags
        title='Homepage'
        description='Our clients always come first. We serve them through a global network powered by partnership, integrity, advancing economy.'
      />
      <Hero />
      <Firm />
      <Services />
      <Client />
      {/* <Different /> */}
      {/* <Blog /> */}
      {/* <Subscribe />  */}
    </Layout>
  );
}
