---
sidebar_position: 3
---

# Technology

PLANET is built on open protocols and open source infrastructure that have been years in the making. None of this is proprietary. None of it is controlled by a single company. And none of it locks you in.

## The trust layer

The internet was built without a way to know who or what you're connecting to. That missing piece — a trust layer — is what makes scams, bots, fake reviews, deepfakes, and identity theft possible. Every patch we've added since (passwords, CAPTCHAs, two-factor auth) is a workaround for a problem that was never solved at the foundation.

The First Person Project is building that foundation. It's an international collaboration — involving the Linux Foundation, Trust Over IP, the Decentralised Identity Foundation, the OpenWallet Foundation, and many others — to create open standard infrastructure for trust on the internet. PLANET is a client for this infrastructure, the same way a browser is a client for the web.

## How it works, simply

Three building blocks make the trust layer possible:

**Decentralised identifiers (DIDs)** are cryptographic identifiers you create and control yourself. Unlike a username on someone else's platform, a DID belongs to you. No company can revoke it, change it, or take it away. When you set up your PLANET vault, a DID is created for you automatically — you never need to think about the cryptography.

**Verifiable credentials** are digital versions of the cards in your wallet — ID, membership, qualifications — except they're cryptographically signed, tamper-proof, and you decide who sees them. They can also prove things about you without revealing unnecessary detail (using zero-knowledge proofs). For example, proving you're over 18 without revealing your date of birth.

**Private channels** are encrypted connections between two parties — you and a friend, you and a community, you and a service. When you connect with someone on PLANET, you each create DIDs specifically for that relationship and exchange them to form an encrypted channel. Nobody else can read your messages.

## Trust without platforms

On today's internet, we have out-sourced trust to platforms, which is obviously a mistake because their interests are not aligned with our wellbeing. You have no say, and no portability — your reputation is locked inside each platform.

PLANET's trust model works differently. Trust is built through two types of verifiable credentials:

**Personhood credentials (PHCs)** are issued by communities — employers, universities, cooperatives, any group that can attest you're a real, unique person within their community. They prove you're human without requiring a global biometric database or any centralised registry.

**Verifiable relationship credentials (VRCs)** are issued peer-to-peer. When you connect with someone on PLANET, you each issue a credential to the other, creating a verifiable link in the trust graph. Over time, your web of connections becomes portable proof of real relationships — something no platform can offer.

Together, these credentials form a decentralised trust graph — not stored in any central database, but distributed across everyone's personal vaults. Your piece of the graph is yours. It travels with you.

## The protocol stack

The technical architecture follows the Trust Over IP (ToIP) model — a four-layer protocol stack designed to do for trust what TCP/IP did for data. At its core is the Trust Spanning Protocol (TSP), which handles authenticity, confidentiality, and metadata privacy for every connection.

On top of TSP sit trust task protocols — modular, reusable protocols for specific actions: forming a connection, issuing a credential, making a payment, sharing a document, verifying an identity. PLANET's apps use these protocols. So can anyone else's — the infrastructure is open.

## The First Person Project stack

The First Person Project is building reference implementations of the full stack:

- **PNM (Personal Network Manager)** — the client-side agent and vault. PLANET wraps the PNM with its own branding and user experience. Written in Rust with mobile (Dart) and web (React) frontends.
- **CNM (Community Network Manager)** — the admin tool for communities to manage membership, trust schemas, and governance.
- **VTA (Verified Trust Agent)** — server-side infrastructure that handles credential issuance, trust registry queries, and agent-to-agent communication. Has a plugin architecture so apps can extend its capabilities.
- **SDKs** in Rust, Dart, and TypeScript for building apps on the trust layer.

The stack is in active development, targeting initial delivery in September 2026.

## What this means for you

You don't need to understand any of this to use PLANET. The cryptography, the protocols, the credential exchange — it all happens invisibly. You open the app, connect with people, chat, and the trust graph builds itself.

But it matters that the technology is open, standard, and not controlled by any single entity. It means your vault is truly yours. It means you can switch to a different client and developers can build new apps on the same trust infrastructure without asking anyone's permission. And it means the whole system is designed to outlast any company - because it's structured as a commons to which anyone can contribute.

## Go deeper

- [First Person Project White Paper](https://www.firstperson.network/) — the full technical and strategic story
- [Trust Over IP](https://trustoverip.org/) — the protocol stack architecture
- [Decentralised Trust Graph Working Group](https://trustoverip.org/) — standards for PHCs, VRCs, and the trust graph
- [Linux Foundation Decentralised Trust](https://www.lfdecentralizedtrust.org/) — the open source foundation for decentralized technology ecosystems
