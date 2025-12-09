import { createPortal } from "react-dom";

const CopyMessage = ({ copied }) => {
  return createPortal(
    <div>{copied && <p>Text copied</p>}</div>,
    document.querySelector("#popup-content")
  );
};

export default CopyMessage;
