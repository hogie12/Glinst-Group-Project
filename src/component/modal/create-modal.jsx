import React from "react";
import { Button, Modal, Form, Input } from "semantic-ui-react";

export default function CreateModal({
  setOpen,
  open,
  tittle,
  dataToSend,
  setDataToSend,
  handleSubmit,
}) {
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      dimmer="blurring"
    >
      <Modal.Header>{tittle}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form id="create" onSubmit={handleSubmit}>
            <Form.Field required>
              <label>Name</label>
              <Input
                placeholder="Full name"
                value={dataToSend.name}
                onChange={(e) =>
                  setDataToSend({ ...dataToSend, name: e.target.value })
                }
              />
            </Form.Field>
            <Form.Field required>
              <label>Email</label>
              <Input
                placeholder="Email"
                value={dataToSend.email}
                onChange={(e) =>
                  setDataToSend({ ...dataToSend, email: e.target.value })
                }
              />
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Submit"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setTimeout(() => setOpen(false), 2000)}
          positive
          form="create"
          type="submit"
        />
      </Modal.Actions>
    </Modal>
  );
}
