import React from "react";
import Modal from "react-modal";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement("#root");

function ResultModal({
    result,
    modalIsOpen,
    setIsOpen,
}: {
    result: string;
    modalIsOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                <h1 className="text-red-700">{result}</h1>

                <button
                    className="rounded-sm bg-stone-500 text-white p-2 bottom-0 right-0 absolute hover:bg-purple-600"
                    onClick={closeModal}
                >
                    close
                </button>
            </Modal>
        </>
    );
}

export default ResultModal;
