# Energy Cost Calculator

A modern, responsive web application built with Next.js that helps users calculate and compare energy costs for gas and electricity tariffs. Features a clean, glassy UI with Tailwind CSS and comprehensive testing setup.

## Features

- **Dual Fuel Calculator**: Calculate costs for both gas and electricity
- **Tariff Comparison**: Compare current vs. alternative tariffs
- **Toggle Interface**: Clean default view with optional comparison mode
- **Real-time Updates**: Instant calculations as you type
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Mode Support**: Automatic theme switching based on system preferences

## How It Works

### Core Calculation Logic
The calculator uses a simple but accurate formula:
- **Standing Charge Cost**: `daily_rate × 365 days`
- **Usage Cost**: `unit_rate × annual_kwh`
- **Total Annual Cost**: `standing_charge + usage_cost`
- **Monthly Cost**: `annual_cost ÷ 12`

### Usage Flow
1. **Input Usage**: Enter your annual electricity and gas consumption in kWh
2. **Set Current Tariff**: Input your current standing charges and unit rates
3. **Toggle Comparison** (optional): Click "Compare tariffs" to add a second tariff
4. **View Results**: See breakdowns of costs and potential savings

### Example Calculation
- **Electricity**: 2,700 kWh/year at £0.28/kWh + £0.50/day standing charge
- **Gas**: 12,000 kWh/year at £0.07/kWh + £0.30/day standing charge
- **Annual Total**: £1,123.50 (Electricity: £756.50 + Gas: £367.00)

## File Structure

```
energy-cost-calculator/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts and metadata
│   │   ├── page.tsx            # Main page rendering the calculator
│   │   └── globals.css         # Global styles and Tailwind imports
│   ├── components/
│   │   └── calculator/
│   │       ├── calculator.tsx  # Main calculator component
│   │       ├── types.ts        # TypeScript type definitions
│   │       └── utils.ts        # Calculation utility functions
│   └── utils/
│       └── energy.ts           # Core energy calculation logic
├── public/                     # Static assets
├── vitest.config.ts            # Test configuration
├── vitest.setup.ts             # Test setup and matchers
├── postcss.config.mjs          # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── package.json                # Dependencies and scripts
```

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with glassmorphism effects
- **Testing**: Vitest + React Testing Library
- **Build Tool**: Vite (via Vitest)
- **Package Manager**: npm

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd energy-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

```bash
# Development
npm run dev          # Start dev server with Turbopack
npm run build        # Build for production
npm run start        # Start production server

# Testing
npm run test         # Run tests once
npm run test:watch   # Run tests in watch mode
npm run coverage     # Generate test coverage report

# Linting
npm run lint         # Run ESLint
```

## Testing

The project includes comprehensive testing:

- **Unit Tests**: Core calculation functions in `src/utils/energy.spec.ts`
- **Component Tests**: React component behavior in `src/components/calculator/calculator.spec.tsx`
- **Test Coverage**: Built-in coverage reporting with Vitest

Run tests with:
```bash
npm run test
npm run test:watch
npm run coverage
```

## Customization

### Adding New Calculation Methods
Extend the `src/utils/energy.ts` file to add new calculation functions:

```typescript
export function calculateTimeOfUseTariff(
  peakRate: number,
  offPeakRate: number,
  peakUsage: number,
  offPeakUsage: number
): number {
  // Implementation here
}
```

### Styling Changes
Modify Tailwind classes in the component files or update `src/app/globals.css` for global style changes.

### Adding New Fields
Update the `types.ts` file and corresponding form components to add new input fields.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
