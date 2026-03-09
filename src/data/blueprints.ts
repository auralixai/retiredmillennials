export interface Blueprint {
  slug: string;
  title: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  startupCost: string;
  timeToFirstDollar: string;
  category: string;
  overview: string;
  steps: string[];
  tools: string[];
  pSEOKeywords: string[];
}

export const blueprints: Blueprint[] = [
  {
    slug: "book-arbitrage-automation",
    title: "The Amazon-to-eBay Book Flip",
    difficulty: "Beginner",
    startupCost: "$50 - $200",
    timeToFirstDollar: "7 - 14 Days",
    category: "Arbitrage",
    overview: "Using scanning tools to find underpriced textbooks and niche non-fiction on Amazon to flip for 3x profit on eBay. This is the ultimate 'low-friction' entry into solopreneurship.",
    steps: [
      "Download a scanning app (Keepa or ScoutIQ).",
      "Source 'Acceptable' condition textbooks with high sales rank.",
      "List on eBay with professional photos and clear condition notes.",
      "Use automated pricing tools to stay competitive."
    ],
    tools: ["Keepa", "eBay App", "Bubble Wrap", "Shipping Scale"],
    pSEOKeywords: ["book flipping", "amazon arbitrage", "ebay side hustle", "passive income books"]
  },
  {
    slug: "pallet-auction-extraction",
    title: "Costco Pallet Extraction",
    difficulty: "Intermediate",
    startupCost: "$500 - $1,500",
    timeToFirstDollar: "3 - 5 Days",
    category: "Liquidation",
    overview: "Buying raw customer return pallets from major retailers and 'cherry-picking' the high-value electronics and tools for local Facebook Marketplace or OfferUp sales.",
    steps: [
      "Identify local liquidation warehouses (B-Stock, DirectLiquidation).",
      "Inspect manifest for high-margin items (dyson, power tools, laptops).",
      "Transport and sort items into 'A-Grade' and 'Parts' lots.",
      "List local-first to avoid shipping overhead."
    ],
    tools: ["Trailer/Truck", "FB Marketplace", "Testing Station"],
    pSEOKeywords: ["pallet flipping", "liquidation business", "costco returns flip", "local arbitrage"]
  },
  {
    slug: "micro-saas-white-label",
    title: "The White-Label SaaS Agency",
    difficulty: "Advanced",
    startupCost: "$297/mo",
    timeToFirstDollar: "14 - 30 Days",
    category: "Automation",
    overview: "White-labeling a CRM or Automation platform (like GoHighLevel) and selling it to local businesses (Landscapers, Plumbers) as an 'all-in-one' lead machine.",
    steps: [
      "Set up a GoHighLevel or similar SaaS account.",
      "Build a 'Snapshot' (template) specifically for a niche (e.g., HVAC).",
      "Offer a 14-day free trial to local business owners.",
      "Automate their Google Review and Missed-Call-Text-Back flow."
    ],
    tools: ["GoHighLevel", "Stripe", "Auralix AI"],
    pSEOKeywords: ["saas agency", "white label crm", "local business automation", "monthly recurring revenue"]
  },
  {
    slug: "coffee-pod-recycling-gold",
    title: "The Coffee Pod Fertilizer Flip",
    difficulty: "Beginner",
    startupCost: "$0 - $50",
    timeToFirstDollar: "1 - 3 Days",
    category: "Sustainable",
    overview: "Collecting used coffee pods from local offices/cafes, processing the grounds into high-nitrogen houseplant fertilizer, and selling locally in premium packaging.",
    steps: [
      "Set up collection bins at local co-working spaces.",
      "Extract and dry coffee grounds to prevent mold.",
      "Mix with organic soil amendments (optional) and package in eco-friendly bags.",
      "Sell at local farmers markets or through FB Marketplace."
    ],
    tools: ["Drying Trays", "Eco-bags", "Label Printer"],
    pSEOKeywords: ["coffee fertilizer", "sustainable side hustle", "houseplant fertilizer flip", "recycling profit"]
  },
  {
    slug: "colombian-aji-export",
    title: "Family Recipe: Colombian Aji",
    difficulty: "Intermediate",
    startupCost: "$200 - $500",
    timeToFirstDollar: "21 - 30 Days",
    category: "E-Commerce",
    overview: "Bringing a secret family recipe to the global market by leveraging Amazon FBA. Focus on high-quality ingredients and a 'heritage' brand story.",
    steps: [
      "Standardize the recipe for commercial production.",
      "Source FDA-compliant glass jars and professional labels.",
      "Register a trademark and set up a professional Amazon Seller account.",
      "Launch using Amazon's Vine program for initial reviews."
    ],
    tools: ["Amazon Seller Central", "Niche Scraper", "Professional Kitchen"],
    pSEOKeywords: ["amazon fba sauce", "colombian aji brand", "food brand automation", "export side hustle"]
  },
  {
    slug: "newsletter-arbitrage-engine",
    title: "Newsletter Growth Arbitrage",
    difficulty: "Beginner",
    startupCost: "$100 - $300",
    timeToFirstDollar: "14 - 21 Days",
    category: "Traffic",
    overview: "Buying low-cost, high-intent traffic from Facebook or X ads to grow a niche newsletter (e.g., AI tools, local real estate) and selling sponsorships at a 2x margin.",
    steps: [
      "Pick a high-CPM niche like Fintech or AI.",
      "Set up a simple landing page with an enticing lead magnet.",
      "Run targeted ads with a cap of $1.50 per subscriber.",
      "Once you hit 2,500 subs, list on sponsorship platforms like Paved or Beehiiv Ad Network."
    ],
    tools: ["Beehiiv", "Meta Ads Manager", "Canva", "SparkLoop"],
    pSEOKeywords: ["newsletter flipping", "traffic arbitrage", "beehiiv business model", "passive income newsletters"]
  },
  {
    slug: "local-service-arbitrage",
    title: "Pressure Washing Automation",
    difficulty: "Intermediate",
    startupCost: "$100 - $300",
    timeToFirstDollar: "7 - 10 Days",
    category: "Service",
    overview: "Building a high-converting landing page for a local service (pressure washing, gutter cleaning) and subcontracting the work to local pros while keeping a 30-40% margin. You own the customer and the automation.",
    steps: [
      "Set up a simple site with a quote request form.",
      "Run $10/day local Facebook ads targeting homeowners.",
      "Find reliable local contractors on Craigslist or Thumbtack.",
      "Automate the follow-up and scheduling using auralix.ai tools."
    ],
    tools: ["Landing Page Builder", "FB Ads", "CRM", "Subcontractors"],
    pSEOKeywords: ["service arbitrage", "local lead gen", "automated pressure washing", "subcontracting business"]
  },
  {
    slug: "storage-unit-extraction",
    title: "Storage Unit Auction Flipping",
    difficulty: "Advanced",
    startupCost: "$200 - $1,000",
    timeToFirstDollar: "2 - 5 Days",
    category: "Auctions",
    overview: "Bidding on abandoned storage units via online platforms (StorageTreasures) and rapidly liquidating the contents through a combination of local sales and specialty resellers.",
    steps: [
      "Register on StorageTreasures or Lockerfox and set a 20-mile radius.",
      "Analyze unit photos for 'hidden value' clues (name brand boxes, vintage furniture).",
      "Have a clean-out crew or truck ready for immediate 24-48h removal.",
      "Sort into 'Trash', 'Local Sale', and 'Collectibles' for targeted listing."
    ],
    tools: ["Box Truck", "Heavy Duty Lock", "Trash Bags", "Value Testing Kit"],
    pSEOKeywords: ["storage auctions", "locker flipping", "abandoned unit profit", "auction arbitrage"]
  },
  {
    slug: "high-ticket-referral-engine",
    title: "Miami Rainbow Sales (High-Ticket)",
    difficulty: "Intermediate",
    startupCost: "$0 - $100",
    timeToFirstDollar: "14 - 30 Days",
    category: "Referrals",
    overview: "Leveraging high-ticket sales systems (like the Miami Rainbow) by automating the lead generation and demo booking process. You earn massive commissions by bridging the gap between interested homeowners and professional demonstrators.",
    steps: [
      "Identify a high-ticket home product with a strong referral program.",
      "Set up a niche Instagram or TikTok page showing 'clean home' aesthetics.",
      "Use automated DM tools or landing pages to capture leads interested in a free home health demo.",
      "Forward qualified leads to the sales team and track commissions via CRM."
    ],
    tools: ["Instagram/TikTok", "Lead Capture Page", "WhatsApp Business", "CRM"],
    pSEOKeywords: ["high ticket referrals", "miami rainbow system", "sales automation", "referral commission flip"]
  }
];

export const dictionary = [
  { term: "Arbitrage", definition: "The simultaneous purchase and sale of an asset to profit from a difference in the price." },
  { term: "Pallet", secondary: "Liquidation", definition: "A wooden or plastic platform used for shipping goods, often sold in bulk lots of returns or overstock." },
  { term: "Manifest", secondary: "Liquidation", definition: "A document providing a detailed list of the items contained within a shipping container or pallet, including SKU, condition, and value." },
  { term: "Flipping", definition: "The act of buying an item at a low price and quickly reselling it for a profit." },
  { term: "ROI", definition: "Return on Investment. The percentage of profit made relative to the initial cost." },
  { term: "COGS", definition: "Cost of Goods Sold. The direct costs of producing or acquiring the goods sold by a business." },
  { term: "Dropshipping", definition: "A retail fulfillment method where a store doesn't keep the products it sells in stock, instead transferring orders to a third-party." },
  { term: "pSEO", definition: "Programmatic SEO. A technique to generate large-scale web pages targeting specific keywords automatically to capture long-tail traffic." },
  { term: "FBA", secondary: "Amazon", definition: "Fulfillment by Amazon. A service where Amazon handles storage, shipping, and customer service for your products." },
  { term: "OA", definition: "Online Arbitrage. Sourcing products from online retailers to resell them at a higher price on platforms like eBay or Amazon." },
  { term: "RA", definition: "Retail Arbitrage. Finding clearance or undervalued items in physical retail stores to resell online." },
  { term: "BSR", secondary: "Amazon", definition: "Best Sellers Rank. A number representing how well a product is selling compared to others in its category." },
  { term: "White Label", definition: "Buying a generic product or service and rebranding it with your own logo and identity." },
  { term: "Scaling", definition: "The process of growing a business sustainably by using systems, automation, or delegation to increase output without proportional cost." },
  { term: "Liquidation", definition: "The process of selling off stock, often customer returns or shelf pulls, at highly discounted prices." },
  { term: "Niche", definition: "A specialized segment of the market for a particular kind of product or service." },
  { term: "Sourcing", definition: "The process of finding suppliers or locations where profitable inventory can be acquired." },
  { term: "Automated Lead Gen", definition: "Using software to find and nurture potential customers without manual intervention." },
  { term: "Side Hustle", definition: "A secondary job or business that provides additional income alongside a primary career." },
  { term: "Recurring Revenue", definition: "Revenue that is predictable and likely to continue in the future, often from subscriptions or service contracts." },
  { term: "Lead Magnet", definition: "A free item or service given away for the purpose of gathering contact details; for example, a PDF guide or a free trial." },
  { term: "Wholesale", definition: "The sale of goods in large quantities, as for resale by a retailer." },
  { term: "Unit Economics", definition: "The direct revenues and costs associated with a particular business model, and are specifically expressed on a per-unit basis." },
  { term: "LPN", secondary: "Amazon", definition: "License Plate Number. A unique identifier sticker applied by Amazon to returned items to track their condition and history." },
  { term: "Shelf Pulls", secondary: "Liquidation", definition: "Items that were removed from retail store shelves (not returns) to make room for new inventory, usually in brand new condition." },
  { term: "Lotting", definition: "Grouping several smaller items together to be sold as a single unit, common in auctions and liquidation to increase perceived value." },
  { term: "High-Ticket", definition: "A high-priced product or service, typically costing $1,000+, which yields larger individual commissions or profits." },
  { term: "Referral", definition: "The act of directing a potential customer to a business in exchange for a commission or reward." },
  { term: "Commission", definition: "A sum of money paid to a salesperson for every sale which they make." },
  { term: "Demo", secondary: "Sales", definition: "A demonstration of a product to a potential customer, often used in high-ticket sales to close deals." },
  { term: "SaaS", definition: "Software as a Service. A software distribution model in which a third-party provider hosts applications and makes them available to customers over the Internet." },
  { term: "Private Label", definition: "A product manufactured by a third-party but sold under a retailer's brand name. A core strategy for scaling on Amazon FBA." },
  { term: "Keepa", secondary: "Tools", definition: "A powerful Amazon price tracking tool that shows price history, sales rank, and buy box data essential for arbitrage." },
  { term: "B-Stock", secondary: "Liquidation", definition: "A leading marketplace for sourcing liquidation pallets directly from retailers like Amazon, Walmart, and Target." },
  { term: "Ungating", secondary: "Amazon", definition: "The process of getting approval from Amazon to sell in restricted categories or brands by providing invoices from authorized wholesalers." }
];
