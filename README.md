# Subway Calorie Calculator

A comprehensive web application for calculating nutritional information when building your Subway sandwich order. Built with Next.js, TypeScript, and Tailwind CSS using atomic design principles.

## Features

- **Real-time Nutrition Calculation**: Get instant calorie and nutritional information as you build your sandwich
- **Complete Ingredient Database**: All breads, proteins, cheeses, vegetables, sauces, and toppings from official Subway UK nutrition data (January 2025)
- **Size Options**: Support for both 6-inch and Footlong sandwiches with automatic scaling
- **Double Protein**: Option to double protein portions with accurate nutritional calculations
- **HALAL Options**: Comprehensive selection of HALAL-certified ingredients
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Order Summary**: Visual breakdown of your complete sandwich order
- **Reset Functionality**: Easy way to start building a new sandwich

## Tech Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Architecture**: Atomic Design Pattern
- **Package Manager**: npm/yarn

## Project Structure

```
src/
├── components/
│   ├── atoms/              # Basic UI elements
│   ├── molecules/          # Simple component combinations
│   ├── organisms/          # Complex component groups
│   └── pages/              # Full page components
├── data/
│   └── nutritional-data.ts # Subway nutrition database
├── types/
│   └── index.ts            # TypeScript type definitions
└── app/                    # Next.js app router pages
```

## Component Architecture

### Atoms

- `RadioButton` - Reusable radio input component
- `CheckBox` - Reusable checkbox input component
- `Button` - Configurable button with multiple variants
- `SectionTitle` - Consistent section heading component
- `NutritionValueDisplay` - Individual nutrition value display

### Molecules

- `SizeSelector` - Sandwich size selection
- `BreadSelector` - Bread type selection
- `ProteinSelector` - Protein selection with double protein option
- `CategorySelector` - Generic selector for ingredients
- `NutritionSummary` - Complete nutrition facts panel
- `OrderSummary` - Current order breakdown

### Organisms

- `Header` - Application header with title and description
- `SandwichBuilder` - Complete sandwich building interface
- `NutritionPanel` - Nutrition and order summary panel
- `Footer` - Legal and fair-use disclaimer panel

## Installation

1. Clone the repository:

```bash
git clone https://github.com/{yourusername}/subway-calculator.git
cd subway-calculator
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Data Source

Nutritional information is sourced from the official Subway UK nutrition data (January 2025). The data includes:

- Serving sizes and nutritional values per 100g
- Calories, protein, carbohydrates, fat, fiber, and sugar content
- Both regular and HALAL ingredient options
- Automatic scaling for Footlong sandwiches (2x 6-inch portions)

## Code Quality Standards

This project follows strict code quality guidelines:

- **TypeScript**: Full type safety with interfaces and proper typing
- **Immutable Variables**: Extensive use of `const` declarations
- **Descriptive Naming**: Clear, self-documenting variable and function names
- **DRY Principle**: Reusable components and utility functions
- **Early Returns**: Clean control flow patterns
- **Composition over Inheritance**: Functional component design
- **Single Responsibility**: Each component has one clear purpose

## Usage

1. **Select Size**: Choose between 6-inch or Footlong
2. **Choose Bread**: Select from available bread options
3. **Add Proteins**: Select proteins and optionally double them
4. **Add Cheese**: Choose from cheese varieties
5. **Add Vegetables**: Select fresh vegetables and toppings
6. **Add Sauces**: Choose from available sauce options
7. **Add Toppings**: Select additional toppings
8. **View Results**: See real-time nutrition calculations and order summary

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b SUBWAY-CALC-{number}`
3. Make your changes following the established code standards
4. Write or update tests as needed
5. Commit your changes: `git commit -m "SUBWAY-CALC-{number}: feature-name"`
6. Push to the branch: `git push origin SUBWAY-CALC-{number}`
7. Submit a pull request

### Development Guidelines

- Follow the atomic design pattern for new components
- Ensure all components are properly typed with TypeScript
- Write unit tests for new functionality
- Update documentation for any API changes
- Use descriptive commit messages
- Keep pull requests focused on single features or fixes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Subway UK for providing comprehensive nutritional information
- Next.js team for the excellent React framework
- Tailwind CSS for the utility-first CSS framework
- TypeScript team for type safety tools

## Disclaimer

This calculator is for informational purposes only. Nutritional values are based on official Subway UK data from January 2025. Actual nutritional content may vary based on preparation methods, ingredient suppliers, and regional differences. Always consult official Subway nutrition information for the most accurate data.
