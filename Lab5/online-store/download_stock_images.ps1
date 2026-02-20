$products = @(
    @{"id" = 1; "keywords" = "samsung,galaxy,phone" },
    @{"id" = 2; "keywords" = "iphone,pro,max" },
    @{"id" = 3; "keywords" = "macbook,air" },
    @{"id" = 4; "keywords" = "xiaomi,redmi,smartphone" },
    @{"id" = 5; "keywords" = "airpods,earbuds" },
    @{"id" = 6; "keywords" = "playstation,console,gaming" },
    @{"id" = 7; "keywords" = "vacuum,cleaner" },
    @{"id" = 8; "keywords" = "smartwatch,galaxy" },
    @{"id" = 9; "keywords" = "laptop,asus" },
    @{"id" = 10; "keywords" = "ipad,tablet" },
    @{"id" = 11; "keywords" = "jbl,speaker" },
    @{"id" = 12; "keywords" = "laptop,lenovo" }
)

$destDir = "c:\Users\K1rito\Desktop\web_dev\Lab4\online-store\src\assets\images"
New-Item -ItemType Directory -Force -Path $destDir | Out-Null

foreach ($p in $products) {
    $outFile = Join-Path $destDir "product-$($p.id).jpg"
    $keywords = $p.keywords
    # Try Unsplash first (high quality)
    $url = "https://source.unsplash.com/800x600/?$keywords"
    echo "Downloading $url to $outFile"
    try {
        Invoke-WebRequest -Uri $url -OutFile $outFile -ErrorAction Stop
    }
    catch {
        echo "Unsplash failed, trying LoremFlickr..."
        # Fallback to LoremFlickr
        $url = "https://loremflickr.com/800/600/$(($keywords -split ',')[0])"
        try {
            Invoke-WebRequest -Uri $url -OutFile $outFile -ErrorAction Stop
        }
        catch {
            echo "Failed to download image for Product $($p.id)"
        }
    }
}
