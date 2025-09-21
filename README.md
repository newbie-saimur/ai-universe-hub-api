# AI Universe Hub

🚀 **Live Demo:** [https://newbie-saimur.github.io/ai-universe-hub-api/](https://newbie-saimur.github.io/ai-universe-hub-api/)

## 📖 Description

AI Universe Hub is a modern, responsive web application that showcases a curated collection of AI tools and technologies. Users can explore various AI products, view detailed information about each tool, and sort them by publication date. The application features a clean, intuitive interface built with modern web technologies.

## ✨ Features

- **📱 Responsive Design**: Fully responsive layout that works on all device sizes
- **🔍 AI Tool Showcase**: Browse through a comprehensive collection of AI tools
- **📅 Sort by Date**: Sort tools by their publication date to see the latest products first
- **👀 Detailed View**: Click on any tool to view detailed information in a modal
- **⚡ Fast Loading**: Optimized loading with loading spinners and efficient data fetching
- **🎨 Modern UI**: Beautiful design using Tailwind CSS and DaisyUI components
- **📖 Load More**: Pagination feature to load additional tools

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom styles with Work Sans font family
- **JavaScript (ES6+)**: Modern JavaScript for dynamic functionality
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **DaisyUI**: Component library for beautiful UI elements
- **Fetch API**: For consuming external APIs

## 🏗️ Project Structure

```
ai-universe-hub-api/
├── index.html          # Main HTML file
├── README.md           # Project documentation
├── tailwind.config.js  # Tailwind CSS configuration
├── script/
│   └── script.js       # Main JavaScript functionality
├── style/
│   └── style.css       # Custom CSS styles
└── icons/
    ├── arrow-icon.png
    ├── calender-icon.png
    ├── close-icon.png
    └── Rectangle 15.png
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for CDN resources and API calls)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/newbie-saimur/ai-universe-hub-api.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ai-universe-hub-api
   ```

3. Open `index.html` in your web browser:
   ```bash
   # On Windows
   start index.html
   
   # On macOS
   open index.html
   
   # On Linux
   xdg-open index.html
   ```

   Or simply double-click on the `index.html` file.

## 📡 API Information

The application uses the Programming Hero AI Tools API:

### API Endpoints

- **All AI Tools**: `https://openapi.programming-hero.com/api/ai/tools`
- **Single Tool Details**: `https://openapi.programming-hero.com/api/ai/tool/{id}`
- **Example**: `https://openapi.programming-hero.com/api/ai/tool/01`

### API Response Structure

```json
{
  "status": true,
  "data": {
    "tools": [
      {
        "id": "01",
        "name": "Tool Name",
        "image": "tool-image-url",
        "published_in": "2023-01-01",
        "features": ["feature1", "feature2"],
        "description": "Tool description"
      }
    ]
  }
}
```

## 🎯 Key Functionality

### Core Features Implementation

1. **Data Loading**: Asynchronous data fetching from the AI tools API
2. **Dynamic Rendering**: JavaScript-powered dynamic content generation
3. **Sorting Mechanism**: Client-side sorting by publication date
4. **Modal System**: Detailed view overlay for tool information
5. **Responsive Layout**: CSS Grid and Flexbox for adaptive layouts
6. **Loading States**: Visual feedback during data fetching operations

### JavaScript Functions

- `loadData()`: Fetches data from the API
- `displayData()`: Renders the tool cards
- `loadSortedData()`: Sorts and displays tools by date
- `loadMoreData()`: Implements pagination functionality
- `showDetails()`: Opens modal with detailed tool information

## 🎨 Design Features

- **Color Scheme**: Modern red accent (#EB5757) with clean whites and grays
- **Typography**: Work Sans font family for excellent readability
- **Icons**: Custom icon set for enhanced user experience
- **Animations**: Loading spinners and smooth transitions
- **Accessibility**: ARIA labels and semantic HTML structure

## 🌐 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 📱 Device Support

- Desktop computers
- Tablets
- Mobile phones
- All screen sizes from 320px and above

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Saimur Rahman**
- GitHub: [@newbie-saimur](https://github.com/newbie-saimur)
- Project Link: [AI Universe Hub](https://github.com/newbie-saimur/ai-universe-hub-api)

## 🙏 Acknowledgments

- [Programming Hero](https://www.programming-hero.com/) for providing the AI tools API
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [DaisyUI](https://daisyui.com/) for beautiful UI components
- [Google Fonts](https://fonts.google.com/) for the Work Sans font family

---

⭐ If you found this project helpful, please give it a star on GitHub!
