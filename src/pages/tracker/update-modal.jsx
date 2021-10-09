import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Dropdown } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { getDetailTracker } from "../../store/action/detail";
import { getAllTracker, updateTracker } from "../../store/action/data";

export default function UpdateModal({ setOpen, open, tittle, id }) {
  const { dataCompany } = useSelector((state) => state.companyData);
  const { dataTalent } = useSelector((state) => state.talentData);
  const { dataPic } = useSelector((state) => state.picData);
  const { detailTracker } = useSelector((state) => state.trackerDetail);
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

  useEffect(() => {
    dispatch(getDetailTracker(id));
  }, [dispatch, id]);

  useEffect(() => {
    setTalent(detailTracker.talent || "");
    setCompany(detailTracker.company || "");
    setPic(detailTracker.pic || "");
    setStatus(detailTracker.status || "");
  }, [detailTracker]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    dispatch(updateTracker(id, talent, company, pic, status));
    setTimeout(dispatch(getAllTracker()), 2000)
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
          <Form id="update" onSubmit={handleSubmit}>
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
          onClick={() => setTimeout(() => setOpen(false), 2000)}
          positive
          form="update"
          type="submit"
        />
      </Modal.Actions>
    </Modal>
  );
}
