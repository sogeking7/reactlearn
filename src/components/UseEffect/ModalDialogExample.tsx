"use client";
import React, { FC, useEffect, useRef, useState } from "react";

export const ModalDialogExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div>
        <button onClick={() => setOpen(true)}>Open</button>
      </div>
      <Modal open={open}>
        <h2>Hello World!</h2>
        <button className="bg-red-500" onClick={() => setOpen(false)}>
          Close
        </button>
      </Modal>
    </div>
  );
};

interface IModal {
  open: boolean;
  children: React.ReactNode;
}

const Modal: FC<IModal> = ({ open, children }) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = ref.current;

    if (!dialog) return;

    if (open) {
      dialog.showModal();
    } else {
      dialog.close();
    }

    return () => {
      dialog.close();
    };
  }, [open]);

  return (
    <dialog ref={ref}>
      <div className="p-5">{children}</div>
    </dialog>
  );
};
