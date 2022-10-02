import { useRouter } from 'next/router';
import { Navbar } from 'flowbite-react';
import Logo from '../assets/Logo.png';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  const router = useRouter();

  return (
    <Navbar fluid={true} rounded={true}>
      <Link href="/">
        <Navbar.Brand style={{ cursor: 'pointer' }}>
          <Image src={Logo.src} className="mr-3 h-6 sm:h-9" alt="Floatic Logo" width={150} height={25} />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link href="/">
          <Navbar.Link active={router.pathname === '/'} style={{ cursor: 'pointer' }}>
            Home
          </Navbar.Link>
        </Link>
        <Link href="/tab1">
          <Navbar.Link active={router.pathname === '/tab1'} style={{ cursor: 'pointer' }}>
            Tab1
          </Navbar.Link>
        </Link>
        <Link href="/tab2">
          <Navbar.Link active={router.pathname === '/tab2'} style={{ cursor: 'pointer' }}>
            Tab2
          </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
