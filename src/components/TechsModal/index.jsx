import React, { useContext } from "react";
import Modal from "react-modal";

import { TechContext } from "../../contexts/TechContext";
import { modalStyle, StyledTechsModal } from "./style";
import TechCreateForm from "../forms/TechCreateForm";
import TechEditForm from "../forms/TechEditForm";

const TechsModal = () => {
  const { addingTech, editingTech, modalOpened, closeModal } =
    useContext(TechContext);

  return (
    <StyledTechsModal>
      <Modal
        id="addTechModal"
        isOpen={modalOpened}
        onRequestClose={closeModal}
        style={modalStyle}
      >
        {addingTech && <TechCreateForm />}
        {editingTech && <TechEditForm />}
      </Modal>
    </StyledTechsModal>
  );
};

export default TechsModal;
