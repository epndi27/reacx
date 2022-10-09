import { Modal, Space, useMantineTheme } from "@mantine/core";
import React, { useState } from "react";
import { Textarea } from '@mantine/core';
import ProfileImage from "../../img/irene.jpg";
import "./CommentModal.css";

function CommentModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="lg"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
        <div className="PostComment">
            <img src={ProfileImage} alt="" />

            <Textarea
                placeholder="Ketik disini..."
                autosize
                minRows={2}
            />
        </div>

        <button style={{ marginLeft: "auto" }} className="button ps-button">Comment</button>
    </Modal>
  );
}

export default CommentModal;
