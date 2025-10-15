# Drive360 - Car Showcase Platform

A modern, responsive car showcase platform built with Next.js and TypeScript, featuring an interactive image carousel, 360° view capabilities, and an integrated event price calculator.

## 🚀 Features

### 1. **Interactive Image Carousel**
- Smooth navigation with left/right arrows
- Thumbnail gallery with horizontal scrolling
- Keyboard navigation support (Arrow keys)
- Image counter display
- Hover effects and smooth transitions
- Responsive design for all screen sizes

### 2. **360° View Button**
- Interactive button positioned on the carousel
- Prepared for future 360° image viewing implementation
- Smooth hover animations and visual feedback

### 3. **Event Price Calculator**
- Form-based calculator with two main parameters:
  - **Number of Invites** (1-1000 range)
  - **Duration of Event** (1-365 days)
- Real-time calculation and breakdown display
- Detailed cost analysis including:
  - Cost per invite
  - Cost per day
  - Total event cost
- Modal interface for better user experience
- Input validation and constraints

### 4. **Car Overview Section**
- Comprehensive car details display:
  - **Model**: BMW X1 sDrive20i xLine
  - **Year**: 2022
  - **Mileage**: 59K km
  - **Price**: ₹27.50 Lakh
- Additional information:
  - Fuel type and transmission
  - Location details
  - Dealer information
  - Fixed pricing with inclusions

### 5. **Fullscreen Modal**
- Dedicated fullscreen viewing experience
- Full keyboard navigation support
- Smooth image transitions
- Easy-to-use close functionality

## 🛠️ Technology Stack

- **Framework**: Next.js 15.5.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component

## 📁 Project Structure

```
drive360/
├── app/
│   ├── page.tsx          # Main application page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Carousel.tsx      # Image carousel component
│   ├── CarOverview.tsx   # Car details display
│   ├── FullscreenModal.tsx # Fullscreen image viewer
│   ├── PriceCalculator.tsx # Calculator trigger component
│   ├── PriceCalculatorModal.tsx # Calculator modal
│   └── ui/
│       └── separator.tsx # UI separator component
├── public/
│   ├── car*.avif         # Car exterior images
│   ├── interior*.avif   # Car interior images
│   ├── engine*.avif     # Engine bay images
│   └── *.png, *.svg     # Logos and icons
└── lib/
    └── utils.ts          # Utility functions
```

## 🎨 Design Features

- **Modern UI**: Clean, professional interface following modern design principles
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Accessibility**: Keyboard navigation and proper ARIA labels
- **Performance**: Optimized images and efficient React components

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd drive360
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 📱 Usage

### Image Navigation
- **Click thumbnails** to jump to specific images
- **Use arrow keys** for keyboard navigation
- **Click fullscreen button** for expanded view
- **Hover over carousel** to reveal navigation controls

### Price Calculator
1. Click "Open Price Calculator" button
2. Enter number of invites (1-1000)
3. Set event duration in days (1-365)
4. View real-time calculation breakdown
5. Analyze cost per invite and cost per day

### Car Information
- View comprehensive car details in the overview section
- Check pricing, specifications, and dealer information
- See included services and fixed pricing details

## 🎯 Future Enhancements

- **360° View Implementation**: Interactive 360° car viewing experience
- **Advanced Filtering**: Filter cars by price, year, fuel type
- **Comparison Tool**: Side-by-side car comparison
- **User Reviews**: Customer reviews and ratings system
- **Booking System**: Test drive scheduling functionality

## 📈 Performance Optimizations

- **Image Optimization**: Using Next.js Image component with AVIF format
- **Lazy Loading**: Images loaded on demand
- **Code Splitting**: Automatic code splitting by Next.js
- **Responsive Images**: Optimized for different screen sizes
- **Efficient State Management**: Optimized React state updates

## 🔒 Code Quality

- **TypeScript**: Full type safety throughout the application
- **ESLint**: Code quality and consistency enforcement
- **Component Structure**: Modular, reusable component architecture
- **Clean Code**: Well-documented and maintainable codebase

## 🚀 Deployment

This project is configured for easy deployment on platforms like:
- **Vercel** (recommended)
- **Netlify**
- **Heroku**

## 📝 Assignment Requirements Completed

✅ **Picture Scroll**: Interactive carousel with smooth navigation  
✅ **360° View Button**: Implemented with future enhancement placeholder  
✅ **Price Calculator**: Form-based calculator with invites and duration parameters  
✅ **Car Overview**: Complete car details section with model, year, mileage, and price  
✅ **React.js/Next.js**: Built with Next.js and React  
✅ **Design Library**: Tailwind CSS and Radix UI implementation  

## 👨‍💻 Development Notes

The codebase follows React best practices with:
- Functional components with hooks
- Proper state management
- Component composition
- Responsive design patterns
- Accessibility considerations

Built with attention to user experience, performance, and maintainability.
