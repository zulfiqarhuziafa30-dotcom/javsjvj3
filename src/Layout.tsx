import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen text-white relative selection:bg-white selection:text-black">
      {/* Clean dark luxury studio backdrop matching reference image */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 55% at 50% 10%, rgba(65, 72, 85, 0.5) 0%, rgba(22, 25, 30, 0.85) 60%, #090a0d 100%),
            url('/studio-backdrop.jpg')
          `,
          backgroundColor: "#090a0d"
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
