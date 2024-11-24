# Clickjacking Protection Research Project

This project demonstrates and researches different approaches to prevent clickjacking attacks in iframe-embedded components. It consists of two separate Next.js applications that work together to test and showcase security measures.

## Project Structure 
```
├── README.md
├── child-site/ # The protected site that will be embedded
└── host-site/ # The site that attempts clickjacking
```

## Purpose

The main goals of this project are:

1. Research and implement clickjacking protection methods for iframe-embedded components
2. Create a secure, embeddable component that can detect overlay attempts
3. Demonstrate how clickjacking attacks work and how to prevent them
4. Provide a testing environment for security measures

## Key Features

- **Child Site**: A Next.js application that implements active security measures to detect clickjacking attempts without preventing iframe embedding
- **Host Site**: A Next.js application that simulates clickjacking attempts by overlaying transparent elements

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd clickjacking-research
```

2. Install dependencies for both projects:
```bash
# Install child-site dependencies
cd child-site
npm install

# Install host-site dependencies
cd ../host-site
npm install
```

### Running the Projects

You need to run both projects simultaneously to test the clickjacking protection:

1. Start the child site (in one terminal):
```bash
cd child-site
npm run dev -- -p 3001
```

2. Start the host site (in another terminal):
```bash
cd host-site
npm run dev -- -p 3000
```

3. Access the applications:
   - Host site: [http://localhost:3000](http://localhost:3000)
   - Child site: [http://localhost:3001](http://localhost:3001)

## Testing the Protection

1. Visit the host site at localhost:3000
2. Observe how the child site's button detects and responds to overlay attempts
3. Notice the security warnings and state changes when clickjacking is detected

## Important Notes

- This project is for research and educational purposes only
- The child site is designed to be part of an SDK that can be embedded in any website
- The security measures focus on detection rather than prevention through blocking
```
