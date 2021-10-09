import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Icon, Table, Loader } from "semantic-ui-react";
import DropdownMore from "../component/dropdown";
import { useDispatch } from "react-redux";
import { v4 as uuid_v4 } from "uuid";
import { createTalent, getAllTalent } from "../store/action/data";
import { deleteTalent } from "../store/action/detail";
import CreateModal from "../component/modal/create-modal";
import UpdateModalTalent from "../component/modal/update-modal-talent";

export default function TalentPage() {
  const { dataTalent, isLoading } = useSelector((state) => state.talentData);
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [dataToSend, setDataToSend] = useState({
    name: "",
    email: "",
  });
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(createTalent(uuid_v4(), dataToSend.name, dataToSend.email));
    setTimeout(() => dispatch(getAllTalent()), 1000);
  };

  const handleDelete = (id) => {
    dispatch(deleteTalent(id));
    setTimeout(() => dispatch(getAllTalent()), 1000);
  };

  return (
    <Table unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Talent Name</Table.HeaderCell>
          <Table.HeaderCell>E-mail address</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {isLoading ? (
          <>
            <Table.Row>
              <Table.Cell>
                <Loader active inline />
              </Table.Cell>
              <Table.Cell>
                <Loader active inline />
              </Table.Cell>
              <Table.Cell>
                <Loader active inline />
              </Table.Cell>
            </Table.Row>
          </>
        ) : (
          <>
            {dataTalent?.map((data, idx) => (
              <Table.Row key={idx}>
                <Table.Cell>{data.name}</Table.Cell>
                <Table.Cell>{data.email}</Table.Cell>
                <Table.Cell>
                  <DropdownMore
                    handleDelete={() => handleDelete(data.id)}
                    openUpdate={() => [setOpenUpdate(true), setId(data.id)]}
                  />
                </Table.Cell>
              </Table.Row>
            ))}
          </>
        )}
      </Table.Body>

      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell colSpan="4">
            <Button
              floated="right"
              icon
              labelPosition="left"
              primary
              size="small"
              onClick={() => setOpen(true)}
            >
              <Icon name="user" /> Add Talent
            </Button>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
      <CreateModal
        open={open}
        setOpen={setOpen}
        tittle={"Add Talent"}
        dataToSend={dataToSend}
        setDataToSend={setDataToSend}
        handleSubmit={handleCreate}
      />
      <UpdateModalTalent
        open={openUpdate}
        setOpen={setOpenUpdate}
        tittle={"Update Talent"}
        id={id}
      />
    </Table>
  );
}
