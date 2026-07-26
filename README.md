# 🦷 GD Dental Lab

A sleek, modern, and fully responsive website for **GD Dental Lab**, a premium dental laboratory based in Akola, Maharashtra. Built with **React** and **Tailwind CSS**, this project features a dark-themed, glassmorphism-inspired UI designed to showcase the lab's digital dentistry services, team, and legacy.

## ✨ Features

- **Dark Theme & Glassmorphism:** A premium visual aesthetic utilizing deep gray backgrounds (`bg-gray-950`) with vibrant cyan accents and `backdrop-blur` UI elements.
- **Floating Navigation:** A custom, detached, pill-shaped navbar that enhances its glass effect upon scrolling.
- **Smooth Single-Page Experience:** Smooth scrolling to specific sections (Hero, Story, Team, Services, Contact) directly from the navbar.
- **Multi-Page Routing:** Seamless navigation to dedicated pages like Privacy Policy and Terms of Service using `react-router-dom`.
- **Fully Responsive:** Carefully crafted mobile experience with a custom hamburger menu and fluid typography.
- **Interactive UI:** Hover states, glowing borders, and modern layout structures (Grids/Flexbox).

## 🛠️ Tech Stack

- **Frontend Framework:** [React.js](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router v6](https://reactrouter.com/)
- **Icons (Optional):** [Heroicons](https://heroicons.com/) / SVG standard
- **Build Tool:** Vite (or Create React App)

## 🏢 About GD Dental Lab
Established in 1998 by **Gopal Deshmukh**, GD Dental Lab serves dental professionals across Maharashtra, Madhya Pradesh, Telangana, and Chhattisgarh. The lab specializes in:
- CAD/CAM Milling
- Advanced Ceramics & Zirconia
- DMLS 3D Printing
- Metal Frameworks & Implantology

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

You need Node.js and npm (Node Package Manager) installed on your machine.
- [Download Node.js](https://nodejs.org/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/gd-dental-lab.git](https://github.com/your-username/gd-dental-lab.git)
   ```
   1.  **Navigate into the project directory:**
    ```bash
    cd gd-dental-lab
    ```

2.  **Install the dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    # or 'npm start' if using Create React App
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:5173` (Vite) or `http://localhost:3000` (CRA) to see the app running.

## 📂 Project Structure

```text
src/
 ├── components/
 │    ├── Navbar.jsx       # Floating glassmorphism navigation
 │    ├── Hero.jsx         # Landing section with background & CTA
 │    ├── OurStory.jsx     # Company history (1998)
 │    ├── OurTeam.jsx      # Profiles of Gopal, Atharva, Yogini, etc.
 │    ├── Services.jsx     # CAD/CAM, Ceramics, DMLS grid
 │    ├── Contact.jsx      # Contact info, map, and form
 │    └── Footer.jsx       # Footer links and copyright
 ├── pages/
 │    ├── PrivacyPolicy.jsx
 │    └── TermsOfService.jsx
 ├── App.jsx               # Main router and layout wrapper
 ├── index.css             # Tailwind base imports
 └── main.jsx              # React entry point
