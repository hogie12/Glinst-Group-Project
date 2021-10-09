import React, { useState } from "react";
import { Button, Modal, Form, Dropdown } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { createTracker, getAllTracker } from "../../store/action/data";
import { v4 as uuid_v4 } from "uuid";
import { useDispatch } from "react-redux";

export default function TrackerModal({ setOpen, open, tittle }) {
  const { dataCompany } = useSelector((state) => state.companyData);
  const { dataTalent } = useSelector((state) => state.talentData);
  const { dataPic } = useSelector((state) => state.picData);
  const dispatch = useDispatch();

  const [talent, setTalent] = useState("");
  const [company, setCompany] = useState("");
  const [pic, setPic] = useState("");
  const [status, setStatus] = useState("");
  const dataStatus = [
    "Review",
    "HR Interview",
    "User Interview",
    "Offer",
    "Accepted",
    "Rejected",
  ];
  const stateCompany = dataCompany.map((data, idx) => ({
    key: idx,
    value: data.name,
    text: data.name,
  }));

  const stateTalent = dataTalent.map((data, idx) => ({
    key: idx,
    value: data.name,
    text: data.name,
  }));
  const statePic = dataPic.map((data, idx) => ({
    key: idx,
    value: data.name,
    text: data.name,
  }));
  const stateStatus = dataStatus.map((data, idx) => ({
    key: idx,
    value: data,
    text: data,
  }));
  const handleSubmit = async(e) => {
    e.preventDefault();
    await dispatch(createTracker(uuid_v4(), talent, company, pic, status));
    dispatch(getAllTracker())
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
            {" "}
            <Form id="create" onSubmit={handleSubmit}>
              <Form.Field required>
                <label>Talent</label>
                <Dropdown
                  placeholder="Talent"
                  search
                  selection
                  fluid
                  options={stateTalent}
                  value={talent}
                  onChange={(e, { value }) => setTalent(value)}
                />
              </Form.Field>
              <Form.Field required>
                <label>Company</label>
                <Dropdown
                  placeholder="Company"
                  search
                  selection
                  fluid
                  options={stateCompany}
                  value={company}
                  onChange={(e, { value }) => setCompany(value)}
                />
              </Form.Field>
              <Form.Field required>
                <label>PIC</label>
                <Dropdown
                  placeholder="PIC"
                  search
                  selection
                  fluid
                  options={statePic}
                  value={pic}
                  onChange={(e, { value }) => setPic(value)}
                />
              </Form.Field>
              <Form.Field required>
                <label>Status</label>
                <Dropdown
                  placeholder="Status"
                  search
                  selection
                  fluid
                  options={stateStatus}
                  value={status}
                  onChange={(e, { value }) => setStatus(value)}
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
            onClick={ () => setTimeout(() => setOpen(false), 2000)}
            positive
            form="create"
            type="submit"
          />
        </Modal.Actions>
      </Modal>
  );
}
