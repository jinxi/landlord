import { ReactNode } from "react";

//rafce
interface Props {
  //   children: string;
  children: ReactNode; // for more complex html structures
  onClose: () => void;
}

const Alert = (props: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      {props.children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={props.onClose}
      ></button>
    </div>
  );
};

export default Alert;
