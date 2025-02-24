import React, { useState } from 'react';
import '../styles/components/pages/Descargas.css';

function Descargas() {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <nav>
      <ul className="menu">
        <li onMouseEnter={toggleSubMenu} onMouseLeave={toggleSubMenu}>
          <a>Descargas</a>
          {showSubMenu && (
            <ul className="submenu">
              <li><a href="https://www.dprojects.org/minios">Software</a></li>
              <li><a href="https://support.scribd.com/hc/es/articles/30718664900500-Descargar-documentos-de-Scribd">Documentos</a></li>
              <li><a href="https://www.videolan.org/vlc/index.es.html">Multimedia</a></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Descargas;
