import { LogoMain } from '@components/icons/logo-main';

import './header.scss';

export function Header() {
  return (
    <header className='header'>
      <LogoMain width={40} />
      <h2>EBook Cover Generator</h2>
    </header>
  );
}
