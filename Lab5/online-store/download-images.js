const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'assets', 'images');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const products = [
    { id: 1, url: 'https://en.wikipedia.org/wiki/Samsung_Galaxy_S24' },
    { id: 2, url: 'https://en.wikipedia.org/wiki/IPhone_15_Pro' },
    { id: 3, url: 'https://en.wikipedia.org/wiki/Pixel_8' },
    { id: 4, url: 'https://en.wikipedia.org/wiki/Xiaomi_13' },
    { id: 5, url: 'https://en.wikipedia.org/wiki/OnePlus_12' },
    { id: 6, url: 'https://en.wikipedia.org/wiki/MacBook_Air' },
    { id: 7, url: 'https://en.wikipedia.org/wiki/Republic_of_Gamers' },
    { id: 8, url: 'https://en.wikipedia.org/wiki/ThinkPad' },
    { id: 9, url: 'https://en.wikipedia.org/wiki/Dell_XPS' },
    { id: 10, url: 'https://en.wikipedia.org/wiki/HP_Spectre' },
    { id: 11, url: 'https://en.wikipedia.org/wiki/IPad_Pro' },
    { id: 12, url: 'https://en.wikipedia.org/wiki/Samsung_Galaxy_Tab_series' },
    { id: 13, url: 'https://en.wikipedia.org/wiki/Tablet_computer' },
    { id: 14, url: 'https://en.wikipedia.org/wiki/Xiaomi_Pad_5' },
    { id: 15, url: 'https://en.wikipedia.org/wiki/IPad_Air' },
    { id: 16, url: 'https://en.wikipedia.org/wiki/Noise-cancelling_headphones' },
    { id: 17, url: 'https://en.wikipedia.org/wiki/AirPods_Pro' },
    { id: 18, url: 'https://en.wikipedia.org/wiki/Samsung_Galaxy_Buds_series' },
    { id: 19, url: 'https://en.wikipedia.org/wiki/Sennheiser' },
    { id: 20, url: 'https://en.wikipedia.org/wiki/Bose_headphones' }
];

function fetch(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                const redirect = res.headers.location.startsWith('http') ? res.headers.location : 'https://en.wikipedia.org' + res.headers.location;
                fetch(redirect).then(resolve).catch(reject);
                return;
            }
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

function downloadImage(url, filename) {
    return new Promise((resolve, reject) => {
        const filepath = path.join(dir, filename);
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                downloadImage(res.headers.location, filename).then(resolve).catch(reject);
                return;
            }
            if (res.statusCode !== 200) {
                resolve(`FAIL ${filename}: HTTP ${res.statusCode}`);
                return;
            }
            const ws = fs.createWriteStream(filepath);
            res.pipe(ws);
            ws.on('finish', () => {
                const size = fs.statSync(filepath).size;
                resolve(`OK ${filename}: ${(size / 1024).toFixed(1)}KB`);
            });
            ws.on('error', reject);
        }).on('error', reject);
    });
}

async function run() {
    for (const p of products) {
        try {
            console.log(`Searching for Product ${p.id} on ${p.url}...`);
            const html = await fetch(p.url);

            const regex = /src="\/\/upload\.wikimedia\.org\/wikipedia\/commons\/thumb\/[^"]+\.(jpg|png|webp)\/[^"]+"/gi;
            const matches = html.match(regex);

            let bestUrl = null;
            if (matches) {
                for (let m of matches) {
                    let url = m.match(/src="([^"]+)"/)[1];
                    if (url.startsWith('//')) url = 'https:' + url;

                    if (url.toLowerCase().includes('icon') || url.toLowerCase().includes('logo') || url.toLowerCase().includes('flag') || url.toLowerCase().includes('ambox') || url.toLowerCase().includes('svg')) continue;

                    bestUrl = url.replace(/\/\d+px-/, '/600px-');
                    break;
                }
            }

            if (bestUrl) {
                console.log(`Found image: ${bestUrl}`);
                const result = await downloadImage(bestUrl, `product-${p.id}.jpg`);
                console.log(result);
            } else {
                console.log(`No suitable image found for Product ${p.id}. Using placeholder.`);
                const placeholderUrl = `https://picsum.photos/600/600?random=${p.id}`;
                await downloadImage(placeholderUrl, `product-${p.id}.jpg`);
            }
        } catch (e) {
            console.error(`Error processing Product ${p.id}:`, e.message);
        }
        await new Promise(resolve => setTimeout(resolve, 2500));
    }
    console.log('Done.');
}

run();
