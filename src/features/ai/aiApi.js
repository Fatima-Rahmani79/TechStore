import products from "../../data/products.json";

// ── Demo responses─────────────────
const RULES = [
  {
    keywords: ["laptop", "laptops"],
    reply: () => {
      const laptops = products.filter((p) => p.category === "laptop");
      const cheapest = laptops.sort((a, b) => a.price - b.price)[0];
      return `We have ${laptops.length} laptops in stock! Our most affordable is the **${cheapest.shortName}** at $${cheapest.price}. Looking for something specific — gaming, work, or budget-friendly?`;
    },
  },
  {
    keywords: ["gaming", "game", "rtx", "gpu"],
    reply: () => {
      const gaming = products.filter(
        (p) =>
          p.graphics?.includes("RTX") ||
          p.name?.toLowerCase().includes("gaming"),
      );
      if (!gaming.length)
        return "We don't have gaming products right now, but check back soon!";
      const p = gaming[0];
      return `For gaming, I'd recommend the **${p.shortName}** — ${p.graphics ? `powered by ${p.graphics}` : ""} at $${p.price}. ${p.shortDesc}`;
    },
  },
  {
    keywords: ["monitor", "monitors", "display", "screen"],
    reply: () => {
      const monitors = products.filter((p) => p.category === "monitor");
      return `We carry ${monitors.length} monitors ranging from $${Math.min(...monitors.map((m) => m.price))} to $${Math.max(...monitors.map((m) => m.price))}. We have curved gaming monitors, ultrawide, and 4K options. What's your use case?`;
    },
  },
  {
    keywords: ["headphone", "headphones", "audio", "earbuds", "sound", "noise"],
    reply: () => {
      const audio = products.filter((p) => p.category === "audio");
      const best = audio.sort((a, b) => b.rating.average - a.rating.average)[0];
      return `Our top-rated audio product is the **${best.shortName}** with a ${best.rating.average}/5 rating at $${best.price}. ${best.shortDesc}`;
    },
  },
  {
    keywords: ["cheap", "budget", "affordable", "under", "cheapest"],
    reply: (msg) => {
      const budget = extractBudget(msg);
      const filtered = budget
        ? products.filter((p) => p.price <= budget)
        : products.sort((a, b) => a.price - b.price).slice(0, 3);
      if (!filtered.length)
        return `I couldn't find products under $${budget}. Our most affordable option starts at $${Math.min(...products.map((p) => p.price))}.`;
      const top = filtered.sort(
        (a, b) => b.rating.average - a.rating.average,
      )[0];
      return `${budget ? `Under $${budget}` : "Our most affordable option"}, I'd recommend the **${top.shortName}** at $${top.price} — rated ${top.rating.average}/5. ${top.shortDesc}`;
    },
  },
  {
    keywords: ["best seller", "bestseller", "popular", "recommended"],
    reply: () => {
      const best = products.find((p) => p.bestSeller);
      if (!best)
        return "All our products are popular! Check the Featured section on the homepage.";
      return `Our best seller is the **${best.shortName}** at $${best.price} — rated ${best.rating.average}/5 by ${best.rating.count} customers. ${best.shortDesc}`;
    },
  },
  {
    keywords: ["offer", "sale", "discount", "deal"],
    reply: () => {
      const offers = products.filter((p) => p.specialOffer);
      if (!offers.length)
        return "No special offers right now, but check back soon!";
      return `We have ${offers.length} special offer${offers.length > 1 ? "s" : ""} right now: ${offers.map((p) => `**${p.shortName}** ($${p.price})`).join(", ")}. Don't miss them!`;
    },
  },
  {
    keywords: ["accessory", "accessories", "mouse", "keyboard"],
    reply: () => {
      const acc = products.filter((p) => p.category === "accessory");
      return `We have ${acc.length} accessories including mice, keyboards, and more — starting from $${Math.min(...acc.map((a) => a.price))}. Any specific accessory you're looking for?`;
    },
  },
  {
    keywords: ["hi", "hello", "hey", "help"],
    reply: () =>
      "Hello! 👋 I can help you find the perfect tech product. Ask me about laptops, monitors, headphones, or accessories — or tell me your budget!",
  },
  {
    keywords: ["thank", "thanks"],
    reply: () =>
      "You're welcome! Feel free to ask if you need anything else. 😊",
  },
];

function extractBudget(msg) {
  const match = msg.match(/\$?(\d+)/);
  return match ? Number(match[1]) : null;
}
