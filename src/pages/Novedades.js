
import '../styles/components/pages/Novedades.css';

function Novedades() {
  return (
    <div className="productos">
      <div className="soft">
        <img src="./image/soft/windows.jpg"  alt="windows" />
        <h5>Windows todas sus versiones</h5>
      </div>
      <div className="soft">
        <img src="./image/soft/ubuntu-pro.png"  alt="ubuntu" />
        <h5>Ubuntu</h5>
      </div>
      <div className="soft">
        <img src="./image/soft/Antivirus.jpg"  alt="antivirus" />
        <h5>Antivirus Pro</h5>
      </div>
      <div className="soft">
        <img src="./image/novedades/editor.jpg"  alt="editor" />
        <h5>Editor</h5>
      </div>
    </div>
  );
}

export default Novedades;
