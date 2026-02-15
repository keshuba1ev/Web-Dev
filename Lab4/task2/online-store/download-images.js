const https = require('https');
const fs = require('fs');
const path = require('path');

// Output directory: matched to angular.json 'assets' config (public folder)
const dir = path.join(__dirname, 'public', 'assets', 'images');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const products = [
    { id: 1, url: 'https://en.wikipedia.org/wiki/Samsung_Galaxy_S24' }, // Proxy for S25
    { id: 2, url: 'https://en.wikipedia.org/wiki/IPhone_16_Pro' },
    { id: 3, url: 'https://en.wikipedia.org/wiki/MacBook_Air' },
    { id: 4, url: 'https://en.wikipedia.org/wiki/Redmi_Note_13' },
    { id: 5, url: 'https://en.wikipedia.org/wiki/AirPods_Pro' },
    { id: 6, url: 'https://en.wikipedia.org/wiki/PlayStation_5' },
    { id: 7, url: 'https://en.wikipedia.org/wiki/Dyson_(company)' },
    { id: 8, url: 'https://en.wikipedia.org/wiki/Samsung_Galaxy_Watch_series' },
    { id: 9, url: 'https://en.wikipedia.org/wiki/Asus_Vivobook' },
    { id: 10, url: 'https://en.wikipedia.org/wiki/IPad_(10th_generation)' },
    { id: 11, url: 'https://en.wikipedia.org/wiki/JBL' }, // Charge generic
    { id: 12, url: 'https://en.wikipedia.org/wiki/IdeaPad' }
];

function fetch(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                fetch(res.headers.location).then(resolve).catch(reject);
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

            // Regex to find Wikimedia upload images (thumbnails)
            // Look for <img src="//upload.wikimedia.org/..." ...>
            // Prioritize images in infobox if possible, or just first reasonable jpg/png
            const regex = /src="\/\/upload\.wikimedia\.org\/wikipedia\/commons\/thumb\/[^"]+\.(jpg|png)\/[^"]+"/g;
            const matches = html.match(regex);

            let bestUrl = null;
            if (matches) {
                for (const m of matches) {
                    let url = m.match(/src="([^"]+)"/)[1];
                    if (url.startsWith('//')) url = 'https:' + url;

                    // Filter out icons/logos if possible
                    if (url.includes('icon') || url.includes('logo') || url.includes('flag') || url.includes('Ambox')) continue;

                    // Try to get a larger version (e.g. replace 220px with 600px)
                    // Thumb structure: .../thumb/a/ab/Filename.jpg/220px-Filename.jpg
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
                // Fallback to placeholder
                const placeholderUrl = `https://placehold.co/600x600/png?text=Product+${p.id}`;
                await downloadImage(placeholderUrl, `product-${p.id}.jpg`);
            }
        } catch (e) {
            console.error(`Error processing Product ${p.id}:`, e.message);
        }
    }
    console.log('Done.');
}

run();
