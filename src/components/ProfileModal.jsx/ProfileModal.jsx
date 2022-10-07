import { Modal, Space, useMantineTheme } from "@mantine/core";
import React, { useState } from "react";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();
  const [value, setValue] = useState("default");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

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
      <form className="infoForm">
        <h3>Your info</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            name="Name"
            placeholder="Nama"
          />

          <input
            type="text"
            className="infoInput"
            name="Username"
            placeholder="Username"
          />
        </div>

        <div>
          <select className="infoInput" defaultValue={value} onChange={handleChange}>
            <option value="default" disabled hidden>
              Choose User Type
            </option>
            <option value="advanced">Advanced</option>
            <option value="beginner">Beginner</option>
          </select>
        </div>

        <div>
            Profile Image 
            <input type="file" name='profileImg'/>
            <Space h="xs" />
            Cover Image
            <input type="file" name="coverImg" />
        </div>

        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
