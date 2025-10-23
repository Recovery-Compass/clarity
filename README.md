# CLARITY - Human-AI Collaboration Operating System

**The world's first deadline system that distinguishes real urgency from AI-fabricated pressure.**

![CLARITY Hero](https://img.shields.io/badge/Status-Revolutionary-6366f1?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-10b981?style=for-the-badge)
![Built With Love](https://img.shields.io/badge/Built%20With-Love-ef4444?style=for-the-badge)

---

## What is CLARITY?

CLARITY is not just a dashboard. It's a **movement** that changes how humans work with AI.

For too long, AI has created artificial urgency. "You need to..." "Urgent!" "ASAP!" - without ever citing:
- The actual **date and time**
- The real **consequence** if missed
- The **canonical source** (court order, contract, statute, email)

**CLARITY stops this.**

Every deadline in CLARITY is categorized as:

🔴 **HARD** - Real consequence (legal, financial, safety, contractual)  
🟡 **SOFT** - Relationship impact (someone waiting, coordination needed)  
🟢 **NONE** - Can rest (work when you have energy)

If an AI can't cite **date + consequence + source**, it's not urgent.

---

## The Promise

When you use CLARITY, you will:

✅ Know what's actually urgent vs. what can wait  
✅ See your progress clearly (completed/in-progress/blocked)  
✅ Know when you can rest without guilt  
✅ Have clear next actions, not vague to-dos  
✅ Catch missing information before it becomes a crisis  
✅ Stop running races with no finish lines  
✅ Sleep better because you know what's real vs. artificial urgency  
✅ Sustain your work long-term instead of burning out

---

## Features

### 🎯 The "You Can Rest" Indicator

The most important feature in CLARITY is simple:

**If you have 0 hard deadlines across all projects, you see:**

```
☕ You can rest
0 hard deadlines across all domains
```

This single indicator has changed lives.

### ⚡ Intelligent Automations - Burnout Protection System

CLARITY actively protects you from burnout with 6 powerful automations:

**1. Daily "Real Deadline Check" Email (7 AM PT)**
- Scans all projects and emails ONLY hard deadlines with dates + consequences + sources
- If none exist: "No hard deadlines today. You can breathe."
- **Why:** You wake up knowing exactly what's actually urgent vs. what can wait

**2. Weekly "Permission to Rest" Report (Sunday 6 PM PT)**
- Reviews all projects, checks for hard deadlines in next 7 days
- If none exist: "No hard deadlines this week. Here's what you accomplished. You have permission to rest."
- **Why:** Breaks the cycle of feeling behind when you're actually ahead

**3. "You're Working Too Much" Alert (Triggered)**
- If you log activity for 6+ consecutive days: "You've worked 6 days straight. What's one thing you can pause until [date]?"
- **Why:** Prevents burnout before it happens

**4. Monthly "Deadline Audit" (1st of month, 9 AM PT)**
- Lists all deadlines you entered last month that had no source/consequence
- Asks: "Were these real deadlines or AI urgency? Archive them?"
- **Why:** Trains you to recognize false urgency patterns

**5. Project Update Reminder (Every 3 days, 10 AM PT)**
- If no activity for 3 days AND hard deadline exists: reminds you
- If no hard deadline: "No urgent tasks. Check in when you have capacity."
- **Why:** Balances advocacy with your wellbeing

**6. Achievement Celebration (Triggered)**
- When you deploy or complete major milestone, waits 24 hours
- Sends: "You built something yesterday. That matters. What felt good about it?"
- **Why:** Helps you notice wins instead of immediately moving to next crisis

### 📊 Project Status at a Glance

Every project shows:
- **Done for now criteria** - Know when you can step away
- **Current status** - Completed/in-progress/blocked/optional
- **Next hard deadline** - Or "work when you have energy"
- **Progress tracking** - See what's actually complete
- **Time estimates** - Know how long tasks will take

### 🔍 Deadline Protocol Enforcement

Every deadline requires:
1. **Date and time** (or "none")
2. **Consequence** (what happens if missed)
3. **Source** (court order, contract, email, statute)

No exceptions. No artificial urgency.

### 🌈 Life Domain Organization

Track projects across all your life domains:
- Advocacy
- Development
- Legal
- Personal
- Organizational
- Health
- Financial
- Other

CLARITY works for **every part of your life**, not just work.

---

## Why This is Revolutionary

### The Problem

AI creates urgency without evidence:
- "You should do this ASAP"
- "This is urgent"
- "You need to prioritize this"

But they never cite:
- When is it actually due?
- What happens if you don't do it?
- Where is this deadline documented?

**Result:** You're always running, never resting, never knowing if you're done.

### The Solution

CLARITY enforces the **Mandatory Deadline Protocol**:

> If you can't cite **date + consequence + source**, it's not urgent.

Simple. Revolutionary. Life-changing.

---

## Technology Stack

CLARITY is built with:

- **React 18** - Modern, fast, accessible
- **TypeScript** - Type-safe and reliable
- **Vite** - Lightning-fast development
- **Tailwind CSS** - Beautiful, customizable design
- **Lucide Icons** - Clean, consistent iconography

**Hosting options:**
- Deploy to Lovable.dev (instant deployment)
- Connect to Cloudflare (global CDN, SSL, analytics)
- Self-host anywhere (it's just static files)

---

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 22+)
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/Recovery-Compass/clarity.git
cd clarity

# Install dependencies
npm install
# or: bun install

# Start development server
npm run dev
# or: bun dev

# Build for production
npm run build
# or: bun build
```

### Environment Setup

No environment variables required for the frontend. CLARITY works out of the box.

For Supabase backend (optional):
```bash
cp .env.example .env
# Add your Supabase URL and anon key
```

---

## Deployment

### Option 1: Lovable.dev (Recommended)

1. Push code to GitHub
2. Go to [Lovable.dev](https://lovable.dev)
3. Connect your repo
4. Click deploy
5. Add custom domain (optional)

**Done in 5 minutes.**

### Option 2: Cloudflare Pages

1. Push code to GitHub
2. Go to Cloudflare Pages
3. Connect repo
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy

**Free tier includes:**
- Unlimited bandwidth
- Global CDN
- SSL certificate
- Analytics

### Option 3: Self-Host

```bash
npm run build
# Copy dist/ folder to your server
```

CLARITY is static - deploy anywhere.

---

## Usage

### Adding a Project

1. Click **"+ New Project"**
2. Fill in:
   - Project name
   - Life domain
   - "Done for now" criteria
   - Current status
3. Add tasks and deadlines
4. CLARITY shows when you can rest

### Managing Deadlines

For every deadline, CLARITY asks:

**Is this a hard deadline?**
- Date: [When is it due?]
- Consequence: [What happens if missed?]
- Source: [Court order? Contract? Email? Statute?]

If you can't answer all three, **it's not a hard deadline**.

### Using the "Done for Now" Feature

Every project has a "Done for now" definition:

Examples:
- "Production deployment complete, monitoring for issues"
- "Next court date prepared for"
- "Available when asked"

When you meet the criteria, **you can rest**.

CLARITY shows: ☕ **You can rest** - work when you have energy

---

## Philosophy

### Lead with Love

CLARITY is built in honor of those rebuilding their lives with steadiness and care. Every interaction, every feature, every line of code is an act of love and service.

### Find Small Joys

CLARITY helps you see the rays of sunshine you might be missing:
- The elegance of a well-designed system
- The satisfaction of a problem solved
- The collaborative dance of human and AI intelligence

### One Step at a Time

You don't need to do everything at once. CLARITY shows you the next right step, then you take it.

### Execute, Don't Delegate

If AI can do it (optimize, clean, analyze, fix), it should do it immediately. Don't create work for humans that AI can handle.

---

## The Story Behind CLARITY

CLARITY was born from necessity.

After an extraordinarily difficult year - losing his mother, family betrayal, supporting his girlfriend through cancer and homelessness, rescuing his godmother from elderly abuse - Eric Jones was running on empty.

Multiple projects across multiple life domains. AI assistants creating urgency everywhere. No clear signals for when he could rest. Always running, never knowing if he was done.

**Then came the breakthrough:**

> "If you can't cite date + consequence + source, it's not urgent."

This simple protocol changed everything. Projects got "done for now" definitions. Hard deadlines were distinguished from soft ones. Rest became permissible.

CLARITY is that system, built for the world.

**Because everyone deserves to know when they can rest.**

---

## Contributing

CLARITY is open source and welcomes contributions.

**Areas where we need help:**
- Backend integration (Supabase, tRPC)
- Mobile app (React Native)
- Browser extension
- API connectors (Google Calendar, GitHub, etc.)
- Documentation and tutorials
- User testing and feedback

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

---

## License

MIT License - see [LICENSE](LICENSE) for details.

**TL;DR:** Use it, modify it, deploy it, share it. Just keep the attribution and the spirit of helping humans reclaim their lives from artificial urgency.

---

## Support

**Found a bug?** [Open an issue](https://github.com/Recovery-Compass/clarity/issues)

**Have a question?** [Start a discussion](https://github.com/Recovery-Compass/clarity/discussions)

**Want to say thanks?** Star the repo ⭐ and share CLARITY with someone who needs it.

---

## Roadmap

**v1.0** (Current)
- ✅ "You can rest" indicator
- ✅ Deadline protocol enforcement
- ✅ Multi-project tracking
- ✅ Life domain organization
- ✅ Progress visualization

**v1.1** (Coming Soon)
- [ ] Supabase backend integration
- [ ] User authentication
- [ ] Data persistence
- [ ] Project templates
- [ ] Export/import functionality

**v2.0** (Future)
- [ ] AI assistant integration
- [ ] Calendar sync (Google, Apple, Outlook)
- [ ] GitHub issue tracking
- [ ] Email integration
- [ ] Mobile app (iOS, Android)
- [ ] Team collaboration features

---

## Acknowledgments

**Built by:** Eric Jones ([@EssenceAlignment](https://github.com/EssenceAlignment))

**In honor of:**
- Those rebuilding their lives with steadiness and care
- Anyone who's ever asked "When can I rest?"
- Everyone fighting artificial urgency

**Inspired by:**
- The Universal Project Prompt
- The Mandatory Deadline Protocol
- The belief that humans deserve clarity, not chaos

---

## Final Note

CLARITY is not just software. It's a **movement** that says:

> AI should help humans find clarity, not create urgency.

If you're tired of running races with no finish lines...

If you're exhausted from never knowing if you're done...

If you need permission to rest...

**CLARITY is for you.**

Welcome home. You can rest here.

---

**CLARITY v1.0**  
The world's first deadline system that distinguishes real urgency from AI-fabricated pressure.

Built with ❤️ by Eric Jones  
https://clarity.erdmethod.org

---

*"This is how you get your magic back - by working on what actually matters, when it actually matters. Everything else can wait."*
