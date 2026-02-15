$products = @(
    @{"id" = 1; "url" = "https://en.wikipedia.org/wiki/Samsung_Galaxy_S_series" },
    @{"id" = 2; "url" = "https://en.wikipedia.org/wiki/IPhone_16_Pro" },
    @{"id" = 3; "url" = "https://en.wikipedia.org/wiki/MacBook_Air" },
    @{"id" = 4; "url" = "https://en.wikipedia.org/wiki/Redmi_Note_13" },
    @{"id" = 5; "url" = "https://en.wikipedia.org/wiki/AirPods_Pro" },
    @{"id" = 6; "url" = "https://en.wikipedia.org/wiki/PlayStation_5" },
    @{"id" = 7; "url" = "https://en.wikipedia.org/wiki/Dyson_(company)" },
    @{"id" = 8; "url" = "https://en.wikipedia.org/wiki/Samsung_Galaxy_Watch_series" },
    @{"id" = 9; "url" = "https://en.wikipedia.org/wiki/Asus_Vivobook" },
    @{"id" = 10; "url" = "https://en.wikipedia.org/wiki/IPad_(10th_generation)" },
    @{"id" = 11; "url" = "https://en.wikipedia.org/wiki/JBL_Charge" },
    @{"id" = 12; "url" = "https://en.wikipedia.org/wiki/IdeaPad" }
)

$destDir = "c:\Users\K1rito\Desktop\web_dev\Lab4\online-store\src\assets\images"
New-Item -ItemType Directory -Force -Path $destDir | Out-Null

$ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"

foreach ($p in $products) {
    try {
        echo "Processing Product $($p.id): $($p.url)"
        $resp = Invoke-WebRequest -Uri $p.url -UserAgent $ua -UseBasicParsing
        
        # Regex to find images. Skip common icons.
        $matches = [regex]::Matches($resp.Content, 'src="(?<url>//upload.wikimedia.org/[^"]+)"')
        $found = $false
        foreach ($m in $matches) {
            $url = $m.Groups["url"].Value
            if ($url -match "shackle|padlock|icon|Ambox|symbol|logo|Flag|Search|Edit|Commons") { continue }
            if ($url -notmatch "\.(jpg|png)$") { continue }
            
            # Use this image
            $imgUrl = "https:" + $url
            # Try to get high res
            if ($imgUrl -match "/thumb/") {
                $imgUrl = $imgUrl -replace "/\d+px-", "/800px-"
            }
            
            echo "Found image: $imgUrl"
            $outFile = Join-Path $destDir "product-$($p.id).jpg"
            try {
                Invoke-WebRequest -Uri $imgUrl -UserAgent $ua -OutFile $outFile -ErrorAction Stop
                echo "Saved to $outFile"
                $found = $true
                break 
            }
            catch {
                echo "Failed to download $imgUrl, trying next..."
            }
        }
        if (-not $found) { echo "No suitable image found for $($p.url)" }
    }
    catch {
        echo "Error fetching $($p.url): $_"
    }
}
