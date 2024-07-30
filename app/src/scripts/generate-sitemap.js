const fs = require('fs-extra');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

(async () => {
    const hostname = 'https://www.shrutiyadav.online'; // Replace with your actual domain
    const urls = [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        { url: '/#aboutMe', changefreq: 'weekly', priority: 0.8 },
        { url: '/#blog', changefreq: 'weekly', priority: 0.8 },
        { url: '/#companies', changefreq: 'monthly', priority: 0.7 },
        { url: '/#projects', changefreq: 'monthly', priority: 0.7 },
        { url: '/#hobbyProjects', changefreq: 'monthly', priority: 0.7 },
        { url: '/#Skills', changefreq: 'monthly', priority: 0.7 }
    ];

    const sitemap = new SitemapStream({ hostname });
    const writeStream = fs.createWriteStream(path.resolve(__dirname, '../../public/sitemap.xml'));

    urls.forEach(route => {
        sitemap.write(route);
    });

    sitemap.end();

    const sitemapOutput = await streamToPromise(sitemap).then(sm => sm.toString());
    writeStream.write(sitemapOutput);
    writeStream.end();

    console.log('Sitemap generated at '+ writeStream.url);
})();