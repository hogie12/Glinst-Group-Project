import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Form, Input } from "semantic-ui-react";
import { getAllPic, updatePic } from "../../store/action/data";
import { getDetailPic } from "../../store/action/detail";

export default function UpdateModalPic({
  setOpen,
  open,
  tittle,
  id,
}) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { detailPic } = useSelector((state) => state.picDetail);

  useEffect(() => {
    dispatch(getDetailPic(id));
  }, [dispatch, id]);
  useEffect(() => {
    setName(detailPic.name || "");
    setEmail(detailPic.email || "");
  }, [detailPic]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePic(id, name, email));
    setTimeout(() => dispatch(getAllPic()), 1000);
  };

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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Field>
            <Form.Field required>
              <label>Email</label>
              <Input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
