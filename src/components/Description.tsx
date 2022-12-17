import React from "react";
import Modal from "react-modal";
import Preview from "./Preview";

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

const md = `
# 拡張マルコフアルゴリズム

ここに説明
`;
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function Description() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <button onClick={openModal} className="rounded-sm bg-purple-500 text-white p-2 hover:bg-purple-600">
                Open Modal
            </button>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                <Preview value={md} />

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

export default Description;
