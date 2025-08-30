import React, { useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  // Prevent clicks inside the modal from closing it
  function handleModalClick(e) {
    e.stopPropagation();
  }

  return (
    <div style={{ textAlign: "center", padding: "50px", height: "100vh" }}>
      <h1>Modal Popup</h1>
      <button
        style={{ padding: "10px", cursor: "pointer" }}
        onClick={handleOpen}
      >
        Open Modal
      </button>

      {isOpen && (
        // Backdrop
        <div
          onClick={handleClose} // clicking the 
          backdrop closes modal
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Modal */}
          <div
            onClick={handleModalClick} // stops closing when clicking inside modal
            style={{
              borderRadius: "5px",
              padding: "20px",
              width: "300px",
              background: "white",
              boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            }}
          >
            <h1>Modal Header</h1>
            <p>This is the modal body</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
