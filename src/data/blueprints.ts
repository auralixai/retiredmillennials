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
  }
];

export const dictionary = [
  { term: "Arbitrage", definition: "The simultaneous purchase and sale of an asset to profit from a difference in the price." },
  { term: "Manifest", secondary: "Liquidation", definition: "A document providing a detailed list of the items contained within a shipping container or pallet." },
  { term: "ROI", definition: "Return on Investment. The percentage of profit made relative to the initial cost." },
  { term: "COGS", definition: "Cost of Goods Sold. The direct costs of producing or acquiring the goods sold by a business." },
  { term: "Dropshipping", definition: "A retail fulfillment method where a store doesn't keep the products it sells in stock." },
  { term: "pSEO", definition: "Programmatic SEO. A technique to generate large-scale web pages targeting specific keywords automatically." }
];
