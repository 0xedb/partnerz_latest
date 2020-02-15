import style from "./css/overlay.module.css";

const Overlay = ({ display }: OverlayProp) => {
  return (
    <div className={`${style.overlay} ${display ? style.show : ""}`}>
      overlay
    </div>
  );
};

export default Overlay;
