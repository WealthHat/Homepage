const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

type Props = {
  req: any;
  res: any;
};

const Sitemap = async (req, res) => {
  // An array with your links
  const links = [
    { url: "/", changefreq: "daily", priority: 0.3 },
    { url: "/about-us", changefreq: "daily", priority: 0.3 },
    { url: "/beneficiaries", changefreq: "daily", priority: 0.3 },
    { url: "/entrepreneurs-and-founders", changefreq: "daily", priority: 0.3 },
    { url: "/families-and-spouses", changefreq: "daily", priority: 0.3 },
    { url: "/family-business", changefreq: "daily", priority: 0.3 },
    { url: "/insights", changefreq: "daily", priority: 0.3 },
    { url: "/news", changefreq: "daily", priority: 0.3 },
    { url: "/one-time-comprehensive-plan", changefreq: "daily", priority: 0.3 },
    { url: "/one-time-customised-plan", changefreq: "daily", priority: 0.3 },
    { url: "/our-clients", changefreq: "daily", priority: 0.3 },
    { url: "/our-pricing", changefreq: "daily", priority: 0.3 },
    { url: "/our-process", changefreq: "daily", priority: 0.3 },
    { url: "/schedule-a-call", changefreq: "daily", priority: 0.3 },
    { url: "/senior-executives", changefreq: "daily", priority: 0.3 },
    { url: "/ultra-high-networth", changefreq: "daily", priority: 0.3 },
    { url: "/webinar", changefreq: "daily", priority: 0.3 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data: any) => data.toString());

  res.end(xmlString);
};

export default Sitemap;
