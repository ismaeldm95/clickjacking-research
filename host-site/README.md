# Clickjacking Protection Research - Host Site

This project demonstrates potential clickjacking attack vectors by attempting to overlay malicious elements on top of an embedded iframe. It serves as a testing ground for the child site's security measures.

## Features

- Iframe embedding demonstration
- Transparent overlay elements
- Clickjacking attempt simulation

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev -- -p 3000
```

The site will be available at [http://localhost:3000](http://localhost:3000)

## Testing

To properly test the clickjacking protection:

1. Start both the child site (port 3001) and this host site (port 3000)
2. Observe how the child site's button reacts to the overlay attempts
3. Notice the security warnings and state changes in the child site's UI

## Important Note

This project is for research and educational purposes only. The techniques demonstrated here should not be used for malicious purposes.
