/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic color names for easy theme management
        primary: '#003366',        // UofT Royal Navy Blue - Main brand color, used for primary buttons and branding
        secondary: '#94A3B8',      // Light gray - Used for secondary elements like badges, subtle backgrounds
        accent: '#CBD5E1',         // Lighter gray - Used for hover states and accents
        background: '#003366',     // Main background - Dark navy blue for the entire page background
        surface: 'rgba(255, 255, 255, 0.1)',  // Card/surface backgrounds - Glass morphism effect for cards
        
        // Text colors for dark theme
        text: {
          primary: '#F8FAFC',      // Light gray/white - Main text color for headings and important content
          secondary: '#E2E8F0',    // Slightly darker gray - Secondary text for descriptions
          muted: '#94A3B8',        // Muted gray - Used for placeholder text and less important info
          accent: '#CBD5E1',       // Light gray accent - Used for links and interactive text elements
        },
        
        // Legacy UofT colors (keeping for compatibility)
        uoft: {
          blue: '#003366',           // Original UofT blue - kept for any legacy references
          'blue-light': '#004d99',   // Lighter shade of UofT blue
          'blue-dark': '#002244',    // Darker shade of UofT blue
          'blue-50': 'rgba(0, 51, 102, 0.05)',   // 5% opacity - Very subtle backgrounds
          'blue-100': 'rgba(0, 51, 102, 0.1)',   // 10% opacity - Glass morphism effects
          'blue-200': 'rgba(0, 51, 102, 0.2)',   // 20% opacity - Borders and dividers
          'blue-300': 'rgba(0, 51, 102, 0.3)',   // 30% opacity - Stronger borders
          'blue-400': 'rgba(0, 51, 102, 0.4)',   // 40% opacity - Semi-transparent overlays
          'blue-500': 'rgba(0, 51, 102, 0.5)',   // 50% opacity - Medium overlays
          'blue-600': 'rgba(0, 51, 102, 0.6)',   // 60% opacity - Darker overlays
          'blue-700': 'rgba(0, 51, 102, 0.7)',   // 70% opacity - Strong overlays
          'blue-800': 'rgba(0, 51, 102, 0.8)',   // 80% opacity - Very strong overlays
          'blue-900': 'rgba(0, 51, 102, 0.9)',   // 90% opacity - Nearly opaque
        },
        glass: {
          white: 'rgba(255, 255, 255, 0.1)',      // Standard glass effect - Used for cards and surfaces
          'white-light': 'rgba(255, 255, 255, 0.05)', // Subtle glass - Used for very light overlays
          'white-medium': 'rgba(255, 255, 255, 0.15)', // Medium glass - Used for hover states
          'white-strong': 'rgba(255, 255, 255, 0.25)', // Strong glass - Used for active elements and search bar
        }
      },
      backdropBlur: {
        xs: '2px',                 // Extra small blur - Used for subtle glass effects
      },
      borderRadius: {
        'xl': '1rem',              // Large radius - Used for buttons and small cards
        '2xl': '1.5rem',           // Extra large radius - Used for medium cards and containers
        '3xl': '2rem',             // 3x large radius - Used for search bars and large elements
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',      // Glass morphism shadow - Deep shadow for elevated cards
        'bubble': '0 4px 15px 0 rgba(0, 0, 0, 0.2)',     // Bubble shadow - Soft shadow for interactive elements
        'bubble-hover': '0 8px 25px 0 rgba(0, 0, 0, 0.25)', // Hover shadow - Enhanced shadow for hover states
      }
    },
  },
  plugins: [],
}
