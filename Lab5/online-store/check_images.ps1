$baseUrl = "https://fdn2.gsmarena.com/vv/bigpic/"
$products = @(
    @{ Name="Samsung Galaxy S25 Ultra"; Filename="samsung-galaxy-s25-ultra.jpg" },
    @{ Name="Apple iPhone 16 Pro Max"; Filename="apple-iphone-16-pro-max.jpg" },
    @{ Name="Xiaomi Redmi Note 13 Pro"; Filename="xiaomi-redmi-note-13-pro.jpg" },
    @{ Name="Apple iPad 10 2022"; Filename="apple-ipad-10-2022.jpg" }
)

foreach ($p in $products) {
    $url = $baseUrl + $p.Filename
    echo "Checking $url ..."
    try {
        $req = Invoke-WebRequest -Uri $url -Method Head -ErrorAction Stop
        if ($req.StatusCode -eq 200) {
            echo "FOUND: $($p.Name) -> $url"
        }
    } catch {
        echo "MISSING: $($p.Name)"
    }
}
