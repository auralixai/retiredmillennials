export interface Tool {
  name: string;
  category: "Arbitrage" | "Automation" | "Operations" | "Sourcing";
  description: string;
  url: string;
  price: string;
  bestFor: string;
}

export const tools: Tool[] = [
  {
    name: "ScoutIQ",
    category: "Arbitrage",
    description: "The premier app for scanning books and media. Its local database allows you to scan without an internet connection, crucial for sourcing in areas with poor reception.",
    url: "https://scoutiq.co/",
    price: "$44/mo",
    bestFor: "Book Arbitrage"
  },
  {
    name: "Keepa",
    category: "Arbitrage",
    description: "Unrivaled price history and sales rank tracking for Amazon. Essential for determining if a product's current price is a fluke or a trend.",
    url: "https://keepa.com/",
    price: "€19/mo (~$21)",
    bestFor: "Amazon Sourcing"
  },
  {
    name: "B-Stock",
    category: "Sourcing",
    description: "The world's largest B2B marketplace for liquidation and customer returns. Source directly from Walmart, Amazon, and Target.",
    url: "https://bstock.com/",
    price: "Free to Join",
    bestFor: "Pallet Liquidation"
  },
  {
    name: "GoHighLevel",
    category: "Automation",
    description: "An all-in-one marketing and sales platform. White-label it to build your own SaaS agency for local businesses.",
    url: "https://www.gohighlevel.com/",
    price: "$297/mo (SaaS Pro)",
    bestFor: "White-Label Agency"
  },
  {
    name: "Auralix AI",
    category: "Automation",
    description: "The core engine for your automation stack. Use it to delegate research, copywriting, and project management to high-performing agents.",
    url: "https://hmu.ai",
    price: "Scalable",
    bestFor: "Solopreneur Operations"
  },
  {
    name: "ShipStation",
    category: "Operations",
    description: "Import, manage, and ship your orders across all platforms (eBay, Amazon, Shopify) from one dashboard.",
    url: "https://www.shipstation.com/",
    price: "$9/mo+",
    bestFor: "Order Fulfillment"
  },
  {
    name: "Tactical Arbitrage",
    category: "Arbitrage",
    description: "Software that automatically scans hundreds of online retail sites for profitable products to resell on Amazon.",
    url: "https://tacticalarbitrage.com/",
    price: "$89/mo+",
    bestFor: "Online Arbitrage"
  },
  {
    name: "Airtable",
    category: "Operations",
    description: "Part database, part spreadsheet. Use it to track inventory, manifests, and team progress in one visual system.",
    url: "https://airtable.com/",
    price: "Free / $20/mo",
    bestFor: "Inventory Management"
  }
];
