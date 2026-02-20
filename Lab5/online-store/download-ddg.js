const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'assets', 'images');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const products = [
    { id: 1, name: 'Samsung Galaxy S24 Ultra' },
    { id: 2, name: 'iPhone 15 Pro Max' },
    { id: 3, name: 'Google Pixel 8 Pro device' },
    { id: 4, name: 'Xiaomi 13T Pro smartphone' },
    { id: 5, name: 'OnePlus 12 phone' },
    { id: 6, name: 'MacBook Air M2 Apple' },
    { id: 7, name: 'ASUS ROG Zephyrus G14 laptop' },
    { id: 8, name: 'Lenovo ThinkPad X1 Carbon' },
    { id: 9, name: 'Dell XPS 13 Plus laptop' },
    { id: 10, name: 'HP Spectre x360 laptop' },
    { id: 11, name: 'Apple iPad Pro 11 tablet' },
    { id: 12, name: 'Samsung Galaxy Tab S9' },
    { id: 13, name: 'Lenovo Tab P11 Pro tablet' },
    { id: 14, name: 'Xiaomi Pad 6' },
    { id: 15, name: 'Apple iPad Air 5 tablet' },
    { id: 16, name: 'Sony WH-1000XM5 headphones' },
    { id: 17, name: 'Apple AirPods Pro 2nd Gen' },
    { id: 18, name: 'Samsung Galaxy Buds2 Pro' },
    { id: 19, name: 'Sennheiser Momentum 4 Wireless' },
    { id: 20, name: 'Bose QuietComfort Earbuds II' }
];

function fetchHTML(q) {
    return new Promise((resolve, reject) => {
        const url = 'https://html.duckduckgo.com/html/?q=' + encodeURIComponent(q + ' product');
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

function fetchRedirect(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                fetchRedirect(res.headers.location).then(resolve).catch(reject);
            } else {
                let data = '';
                res.on('data', chunk => data += chunk);
                res.on('end', () => resolve(data));
            }
        }).on('error', reject);
    });
}

async function run() {
    for (const p of products) {
        console.log(`Searching DDG for ${p.name}...`);
        try {
            let html = await fetchHTML(p.name);
            const match = html.match(/src="(\/\/external-content\.duckduckgo\.com\/iu\/\?u=[^"]+)"/);
            if (match) {
                let imgUrl = 'https:' + match[1].replace(/&amp;/g, '&');
                console.log(`Downloading: ${imgUrl}`);
                await new Promise(res => {
                    https.get(imgUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, imgRes => {
                        if (imgRes.statusCode === 200) {
                            const ws = fs.createWriteStream(path.join(dir, `product-${p.id}.jpg`));
                            imgRes.pipe(ws);
                            ws.on('finish', () => {
                                console.log(`OK: product-${p.id}.jpg`);
                                res();
                            });
                        } else {
                            console.log(`Failed HTTP ${imgRes.statusCode}`);
                            res();
                        }
                    });
                });
            } else {
                console.log(`No image found in search results for ${p.name}`);
            }
        } catch (e) {
            console.log(`Error: ${e.message}`);
        }
        await new Promise(r => setTimeout(r, 1000));
    }
    console.log('Finished downloading all real product images.');
}
run();
