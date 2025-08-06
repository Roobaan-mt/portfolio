// This is a simplified bundle for direct browser access
// It includes the minimal code needed to render the portfolio
// Create a simplified version of the portfolio
document.addEventListener('DOMContentLoaded', function () {
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `
      <div class="bg-gray-50 dark:bg-gray-900 min-h-screen w-full">
        <header class="fixed top-0 w-full z-50 bg-white dark:bg-gray-800 shadow-md py-4">
          <div class="container mx-auto px-4 flex justify-between items-center">
            <div class="font-bold text-xl text-indigo-600 dark:text-indigo-400">&lt;Dev/&gt;</div>
            <nav class="hidden md:flex space-x-8">
              <a href="#hero" class="text-gray-700 dark:text-gray-200 hover:text-indigo-600">Home</a>
              <a href="#about" class="text-gray-700 dark:text-gray-200 hover:text-indigo-600">About</a>
              <a href="#skills" class="text-gray-700 dark:text-gray-200 hover:text-indigo-600">Skills</a>
              <a href="#projects" class="text-gray-700 dark:text-gray-200 hover:text-indigo-600">Projects</a>
              <a href="#contact" class="text-gray-700 dark:text-gray-200 hover:text-indigo-600">Contact</a>
              <button id="theme-toggle" class="p-2 rounded-full hover:bg-gray-100">🌙</button>
            </nav>
            <button id="mobile-menu" class="md:hidden">☰</button>
          </div>
        </header>
        <main>
          <section id="hero" class="pt-24 pb-16 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            <div class="container mx-auto px-4">
              <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Roobaan M T</h1>
              <p class="text-xl text-gray-700 dark:text-gray-300">Mobile App Developer</p>
            </div>
          </section>
          <!-- Simplified content sections -->
          <section id="about" class="py-16 bg-white dark:bg-gray-800">
            <div class="container mx-auto px-4">
              <h2 class="text-3xl font-bold text-center mb-8">About Me</h2>
              <p class="text-gray-700 dark:text-gray-300">
                Mobile app developer specializing in Flutter and iOS development with 4+ years of experience.
              </p>
            </div>
          </section>
          <!-- More simplified sections would go here -->
        </main>
        <footer class="bg-gray-900 text-white py-8">
          <div class="container mx-auto px-4 text-center">
            <p>&copy; 2023 Roobaan M T. All rights reserved.</p>
          </div>
        </footer>
      </div>
    `;
    // Add theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', function () {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.textContent = isDark ? '☀️' : '🌙';
      });
    }
    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.addEventListener('click', function () {
        // Toggle mobile menu logic would go here
        alert('Mobile menu clicked');
      });
    }
  }
});