import React from 'react';

import './footer.scss';

const Footer: React.FunctionComponent = ({children}) => (
  <footer className="footer">
    {children}
    <a
      className="footer__link"
      href="https://github.com/vdmkrchkn"
      target="_blank"
      rel="noopener noreferrer"
    >
          See my repos at github
    </a>
  </footer>
);

export default Footer;
