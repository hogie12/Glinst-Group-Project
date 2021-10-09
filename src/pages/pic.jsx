import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Icon, Table, Loader } from "semantic-ui-react";
import DropdownMore from "../component/dropdown";
import { createPic, getAllPic } from "../store/action/data";
import { deletePic } from "../store/action/detail";
import { v4 as uuid_v4 } from "uuid";
import CreateModal from "../component/modal/create-modal";
import UpdateModalPic from "../component/modal/update-modal-pic";

export default function PicPage() {
  const { dataPic, isLoading } = useSelector((state) => state.picData);
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
    dispatch(createPic(uuid_v4(), dataToSend.name, dataToSend.email));
    setTimeout(() => dispatch(getAllPic()), 1000);
  };

  const handleDelete = (id) => {
    dispatch(deletePic(id));
    setTimeout(() => dispatch(getAllPic()), 1000);
  };

  return (
    <Table unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>PIC Name</Table.HeaderCell>
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
            {dataPic?.map((data, idx) => (
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
              <Icon name="user" /> Add PIC
            </Button>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
      <CreateModal
        open={open}
        setOpen={setOpen}
        tittle={"Add PIC"}
        dataToSend={dataToSend}
        setDataToSend={setDataToSend}
        handleSubmit={handleCreate}
      />
      <UpdateModalPic
        open={openUpdate}
        setOpen={setOpenUpdate}
        tittle={"Update PIC"}
        id={id}
      />
    </Table>
  );
}
