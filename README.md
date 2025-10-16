# Drive360 - Car Showcase Platform

A modern car showcase platform built with Next.js and TypeScript, featuring an interactive carousel, 360° view, and price calculator.

## 🚀 Features

- **Interactive Image Carousel** - Smooth navigation with thumbnails and keyboard support
- **360° Car Viewer** - Fully functional drag-to-rotate car visualization
- **Price Calculator** - Event cost calculator with invites and duration parameters
- **Car Overview** - Complete vehicle details and specifications
- **Fullscreen Modal** - Enhanced image viewing experience

## 🛠️ Technology Stack

- **Framework**: Next.js 15.5.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component

## 🔄 360° View Implementation

The 360° car viewer is built with a sequence of 27 high-quality car images captured from different angles around the vehicle. Here's how it works:

### Technical Approach
- **Image Sequence**: 27 AVIF images (`car1.avif` to `car27.avif`) stored in `/public/360view/`
- **Mouse Interaction**: Drag-based rotation using mouse events (mousedown, mousemove, mouseup)
- **Frame Calculation**: Horizontal mouse movement is converted to frame changes with configurable sensitivity
- **Smooth Transitions**: Quick frame switching (75ms) creates fluid rotation effect
- **State Management**: React useState and useRef for tracking current frame and drag state

### Key Features
- **Drag to Rotate**: Intuitive left/right dragging to spin the car
- **Seamless Loop**: Frames wrap around smoothly (1→27→1)
- **Optimized Performance**: AVIF format for smaller file sizes, priority loading
- **Responsive Design**: Scales to fit any screen size while maintaining aspect ratio

### Code Highlights
```typescript
// Frame calculation logic
const deltaX = e.clientX - startX.current;
const sensitivity = 5;
const frameChange = Math.floor(deltaX / sensitivity);
let newFrame = currentFrame.current + frameChange;

// Seamless looping
if (newFrame > totalFrames) newFrame = ((newFrame - 1) % totalFrames) + 1;
if (newFrame < 1) newFrame = totalFrames - ((1 - newFrame) % totalFrames);
```

The 360° view provides an immersive car browsing experience, allowing users to examine the vehicle from every angle with smooth, natural interactions.

##  Installation & Setup

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

## � Assignment Requirements Completed

✅ **Picture Scroll**: Interactive carousel with smooth navigation  
✅ **360° View**: Fully functional drag-to-rotate car viewer  
✅ **Price Calculator**: Form-based calculator with invites and duration parameters  
✅ **Car Overview**: Complete car details section  
✅ **React.js/Next.js**: Built with Next.js and React  
✅ **Design Library**: Tailwind CSS and Radix UI implementation
