# Chrono's Gambit
Chrono's Gambit is a cutting-edge decentralized prediction market platform built on the Aptos blockchain. Our mission is to provide a secure, transparent, and low-cost environment for users to create, participate in, and resolve prediction markets on a variety of topics, including politics, climate change, and sports.

## Features
- Decentralized Market Creation: Easily create and participate in prediction markets without intermediaries.
- Low Transaction Fees: Enjoy minimal fees thanks to the efficiency of the Aptos blockchain.
- Automated Outcomes: Smart contracts handle the resolution of markets using reliable oracles.
- User-Friendly Interface: Designed for ease of use with an intuitive interface.
- Multi-Category Predictions: Engage in predictions across diverse categories.

## Tools & Technologies
- React: For building the user interface.
- Vite: A modern development tool for fast builds.
- shadcn/ui & Tailwind CSS: For stylish and responsive design.
- Aptos TS SDK: For interacting with the Aptos blockchain.
- Aptos Wallet Adapter: To handle wallet connections.
- Node-based Move Commands: For smart contract development and management.

## Getting Started
1. Clone the Repository
`git clone https://github.com/your-repo/chronos-gambit.git`
`cd chronos-gambit`

2. Install Dependencies

`npm install`

3. Start the Development Server
`npm run dev`
4. Deploy the Application

`npm run deploy`

## Note some important MOVE commands

- `npm run move:init` - a command to initialize an account to publish the Move contract and to configure the development environment
- `npm run move:publish` - a command to publish the Move contract
- `npm run move:test` - a command to run Move unit tests
- `npm run move:compile` - a command to compile the Move contract

For all other available CLI commands, can run `npx aptos` and see a list of all available commands.

