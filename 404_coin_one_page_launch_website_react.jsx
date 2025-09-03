import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, ExternalLink, Github, Twitter, Zap, Shield, LineChart, Rocket, Wallet } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

// --- CONFIG (edit these before launch) ---
const TOKEN = {
  name: "404Coin",
  ticker: "NOTFOUND",
  address: "So1anaExampleTokenAddressGoesHereReplaceMe123",
  decimals: 9,
};

const LINKS = {
  // Replace with your real handles after you register them
  twitter: "https://x.com/404coin", // same as twitter.com; placeholder
  twitterAlt: "https://twitter.com/404coin", // fallback/alt
  raydium: "https://raydium.io/swap/?input=SOL&output=NOTFOUND", // placeholder
  openbook: "https://app.openbook.dex/market/NOTFOUND_USDC", // placeholder
  docs: "https://docs.404coin.io", // optional placeholder
  github: "https://github.com/your-org/404coin", // placeholder
};

// Tokenomics data (edit to match your final allocations)
const TOKENOMICS = [
  { name: "Liquidity Pools", value: 40.4 },
  { name: "Community Airdrops", value: 40.4 },
  { name: "Dev + Debug (Locked)", value: 10 },
  { name: "Marketing / Meme Bounties", value: 9.2 },
];

const COLORS = ["#111827", "#6B7280", "#F59E0B", "#10B981"]; // kept neutral & friendly

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl shadow-xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur p-6 ${className}`}>
      {children}
    </div>
  );
}

function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="text-center mb-10">
      <p className="uppercase tracking-widest text-xs text-zinc-500">{kicker}</p>
      <h2 className="text-3xl md:text-4xl font-bold mt-2">{title}</h2>
      {subtitle && <p className="text-zinc-500 mt-2 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}

function Copyable({ label, value }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800">
      <code className="text-xs md:text-sm break-all">{label}: {value}</code>
      <button onClick={copy} className="ml-auto inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-black text-white dark:bg-white dark:text-black text-xs">
        <Copy size={14} /> {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

function InlineLogo() {
  // Simple inline SVG logo (404 window + coin bag)
  return (
    <svg width="140" height="80" viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
      <rect x="12" y="16" width="180" height="112" rx="6" fill="#fff" stroke="#111827" strokeWidth="8"/>
      <rect x="12" y="16" width="180" height="22" rx="6" fill="#E5E7EB" stroke="#111827" strokeWidth="8"/>
      <text x="42" y="96" fontFamily="monospace" fontSize="56" fontWeight="700" fill="#111827">404</text>
      <g transform="translate(160,28)">
        <path d="M72 34c0-8-6-14-14-14s-14 6-14 14v48h28V34z" fill="#F59E0B" stroke="#111827" strokeWidth="8"/>
        <path d="M44 82h36l8-8V34l-8-8H44l-8 8v40l8 16z" fill="#FBBF24" stroke="#111827" strokeWidth="8"/>
        <text x="56" y="62" textAnchor="middle" fontFamily="monospace" fontSize="28" fontWeight="700" fill="#111827">$</text>
      </g>
    </svg>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white/70 dark:bg-zinc-950/60 backdrop-blur border-b border-zinc-200/50 dark:border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
          <div className="flex items-center gap-3">
            <InlineLogo />
            <div>
              <div className="font-extrabold text-xl">404Coin</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Error 404: Floor Not Found</div>
            </div>
          </div>
          <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
            <a href="#tokenomics" className="hover:opacity-80">Tokenomics</a>
            <a href="#roadmap" className="hover:opacity-80">Roadmap</a>
            <a href="#howto" className="hover:opacity-80">How to Buy</a>
            <a href={LINKS.twitter} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
              <Twitter size={16}/> <span>@404coin</span>
            </a>
          </nav>
          <a href="#buy" className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-black text-white dark:bg-white dark:text-black text-sm shadow">
            <Zap size={16}/> Buy / Mint
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Error 404: <span className="underline decoration-wavy decoration-fuchsia-500">Floor Not Found</span>
            </h1>
            <p className="mt-5 text-lg text-zinc-600 dark:text-zinc-400 max-w-xl">
              The internet’s first meme coin that celebrates bugs, glitches, and happy accidents.
              When charts look broken, we call it **branding**.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-6" id="buy">
              <a href={LINKS.raydium} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-black text-white dark:bg-white dark:text-black shadow">
                <Wallet size={18}/> Buy on Raydium
              </a>
              <a href={LINKS.openbook} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-zinc-300 dark:border-zinc-700">
                <LineChart size={18}/> OpenBook Market
              </a>
            </div>
            <div className="mt-5">
              <Copyable label={`${TOKEN.ticker} Address`} value={TOKEN.address} />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex justify-center">
            <Card className="w-full">
              <div className="flex flex-col items-center gap-4">
                <InlineLogo />
                <div className="text-center">
                  <div className="text-sm uppercase tracking-widest text-zinc-500">Ticker</div>
                  <div className="text-3xl font-extrabold">${TOKEN.ticker}</div>
                </div>
                <div className="grid grid-cols-2 gap-3 w-full">
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800">
                    <div className="text-xs text-zinc-500">Decimals</div>
                    <div className="text-xl font-bold">{TOKEN.decimals}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800">
                    <div className="text-xs text-zinc-500">Supply</div>
                    <div className="text-xl font-bold">404,000,000,000</div>
                  </div>
                </div>
                <div className="text-xs text-zinc-500 text-center">
                  *Links above are placeholders until listing. Replace once live.*
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle kicker="Why 404Coin" title="Bug or Feature? Yes." subtitle="Self-aware chaos: every dip is a server error, every pump is a hotfix." />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <div className="flex items-start gap-3">
                <Rocket/> 
                <div>
                  <h3 className="font-bold text-lg">Hyper-Memeable</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">404 pages, broken images, glitch videos—endless content formats for viral campaigns.</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-3">
                <Shield/> 
                <div>
                  <h3 className="font-bold text-lg">Transparent & Secure</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Locked dev fund, on-chain vesting, audited contracts before mainnet. Admin behind multisig + timelock.</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-3">
                <Github/> 
                <div>
                  <h3 className="font-bold text-lg">Open Source Culture</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Contracts, site, and tools released under permissive licenses. Memes welcome via PRs.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="py-10 md:py-16 bg-zinc-50 dark:bg-zinc-800/40">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle kicker="Numbers" title="Tokenomics" subtitle="404,000,000,000 total supply. Because of course." />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie dataKey="value" data={TOKENOMICS} outerRadius={100} label>
                      {TOKENOMICS.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>
            <Card>
              <ul className="space-y-3">
                {TOKENOMICS.map((t) => (
                  <li key={t.name} className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full" style={{ background: COLORS[TOKENOMICS.indexOf(t) % COLORS.length]}} />
                    <span className="font-medium">{t.name}</span>
                    <span className="ml-auto text-zinc-500">{t.value}%</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section id="howto" className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle kicker="Getting Started" title="How to Buy" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <h3 className="font-bold">1) Get a Solana Wallet</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Install Phantom or Solflare and fund with SOL for gas.</p>
            </Card>
            <Card>
              <h3 className="font-bold">2) Swap for $NOTFOUND</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Use Raydium (link above). Paste the token address to avoid fakes.</p>
            </Card>
            <Card>
              <h3 className="font-bold">3) Celebrate the Glitch</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Join the community and share your best 404 memes.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-10 md:py-16 bg-zinc-50 dark:bg-zinc-800/40">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle kicker="Plan" title="Roadmap" />
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <h3 className="font-bold">Phase 1: Page Not Found</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Stealth launch, community formation, listings on DEX trackers.</p>
            </Card>
            <Card>
              <h3 className="font-bold">Phase 2: Debug Mode</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">NFT error screens, staking & reward loops, analytics dashboard.</p>
            </Card>
            <Card>
              <h3 className="font-bold">Phase 3: System Crash</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Partnerships, creators, CEX outreach, community grants.</p>
            </Card>
            <Card>
              <h3 className="font-bold">Phase 4: Patch v1.0</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">DAO + treasury, on-chain governance, long-term incentives.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 items-center">
          <div className="text-sm text-zinc-500">© {new Date().getFullYear()} 404Coin — Error 404: Floor Not Found</div>
          <div className="flex justify-center gap-4">
            <a href={LINKS.twitter} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl border">
              <Twitter size={16}/> X / Twitter
            </a>
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl border">
              <Github size={16}/> GitHub
            </a>
            {LINKS.docs && (
              <a href={LINKS.docs} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl border">
                <ExternalLink size={16}/> Docs
              </a>
            )}
          </div>
          <div className="text-right text-xs text-zinc-500">
            Built with ❤️ — replace placeholders before launch.
          </div>
        </div>
      </footer>
    </div>
  );
}
