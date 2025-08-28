# Clínica Lorrayne - Website

<p align="center">
  <img src="public/img/logolorrayne.png" alt="Clínica Lorrayne Logo" width="300">
</p>

## 📋 Project Overview

**Clínica Lorrayne** is a professional website for a Brazilian aesthetic physiotherapy clinic, designed to showcase services, treatments, and provide an engaging online presence for patients and potential clients.

### Main Features
- **Service Showcase**: Display of various aesthetic and physiotherapy treatments
- **Professional Portfolio**: Gallery of before/after results and clinic facilities
- **Contact Information**: Easy access to clinic details and appointment booking
- **Responsive Design**: Mobile-friendly interface for all devices
- **Modern UI/UX**: Clean, professional aesthetic that builds trust

### Services Highlighted
- Aesthetic treatments (cellulite, stretch marks, body modeling)
- Physiotherapy services (drainage, electrotherapy, micro-needling)
- Facial treatments and chemical peels
- Premium wellness packages

## 🛠️ Technologies Used

- **Backend Framework**: Laravel 10.x
- **PHP Version**: 8.1+
- **Package Manager**: Composer
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Build Tools**: Vite.js
- **Database**: SQLite (development), MySQL/PostgreSQL (production)
- **Styling**: Custom CSS with modern design principles
- **Icons & Assets**: Optimized images and professional graphics

## 🚀 Quick Start

### Prerequisites
- PHP 8.1 or higher
- Composer
- Node.js & NPM (or PNPM)
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd clinicalorrayne
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install Node.js dependencies**
   ```bash
   npm install
   # or if using pnpm
   pnpm install
   ```

4. **Environment setup**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Database setup**
   ```bash
   php artisan migrate
   php artisan db:seed
   ```

6. **Build assets**
   ```bash
   npm run build
   # or for development
   npm run dev
   ```

7. **Start the development server**
   ```bash
   php artisan serve
   ```

8. **Access the application**
   Open your browser and navigate to `http://localhost:8000`

### Development Commands

- **Start development server**: `composer run dev`
- **Build assets**: `npm run build`
- **Watch assets**: `npm run dev`
- **Run migrations**: `php artisan migrate`
- **Clear cache**: `php artisan cache:clear`

## 📁 Project Structure

```
clinicalorrayne/
├── app/                 # Application logic
├── resources/          # Views, CSS, JS, images
├── public/             # Public assets and index
├── database/           # Migrations and seeders
├── routes/             # Application routes
└── config/             # Configuration files
```

## 🌟 Key Features

- **Responsive Design**: Optimized for all device sizes
- **Professional Aesthetics**: Clean, medical-grade visual design
- **Service Showcase**: Comprehensive treatment information
- **Contact Integration**: Easy patient communication
- **Performance Optimized**: Fast loading and smooth interactions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support or questions about this project, please contact the development team or create an issue in the repository.

## 📄 License

This project is proprietary software developed for Clínica Lorrayne. All rights reserved.

---

