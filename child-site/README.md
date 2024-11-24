# Clickjacking Protection Research - Child Site

This project is part of a clickjacking protection research initiative. It demonstrates how to create a secure iframe-embeddable component that can detect and prevent clickjacking attempts without relying on frame-ancestor restrictions.

## Features

- Active clickjacking detection
- Overlay attempt detection
- Continuous visibility monitoring
- Real-time security status updates
- Safe for iframe embedding

## Security Measures

The project implements several security measures:
- Viewport visibility checks
- Multi-point overlay detection
- DOM mutation monitoring
- Event-based security checks (scroll, resize, mousemove)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev -- -p 3001
```

The site will be available at [http://localhost:3001](http://localhost:3001)

## Usage as SDK

This project is designed to be embedded as an iframe in other websites. The security measures are active rather than restrictive, making it suitable for third-party integration while maintaining security against clickjacking attempts.
