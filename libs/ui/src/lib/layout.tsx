import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { Logo, Nav } from '../components';
import About from './about/about';
import Contact from './contact/contact';
import Home from './home/home';
import Privacy from './privacy/privacy';

export function Layout() {
  return (
    <div className="flex min-h-dvh flex-col py-safe">
      <header className="flex h-14 items-center px-safe-offset-4 lg:h-16 lg:px-safe-offset-8">
        <div className="flex-1">
          <Link to="/" aria-hidden="true">
            <Logo className="h-8 w-8" />
          </Link>
        </div>

        <Nav className="flex-1" />
      </header>
      <main className="flex flex-1 flex-col py-4 px-safe-offset-4 lg:px-safe-offset-8">
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <footer className="flex items-center justify-center py-4 px-safe-offset-4 lg:px-safe-offset-8">
        <p className="text-neutral-400 dark:text-neutral-300">
          &copy; {new Date().getFullYear()} Jason Ruesch. All rights reserved.{' '}
          <Link
            to="/privacy"
            className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500"
          >
            Privacy Policy
          </Link>
        </p>
      </footer>
    </div>
  );
}

export default Layout;
