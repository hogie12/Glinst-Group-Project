import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Icon, Table, Loader } from "semantic-ui-react";
import DropdownMore from "../component/dropdown";
import CreateModal from "../component/modal/create-modal";
import { createCompany, getAllCompany } from "../store/action/data";
import { v4 as uuid_v4 } from "uuid";
import { deleteCompany } from "../store/action/detail";
import UpdateModalCompany from "../component/modal/update-modal-company";

export default function CompanyPage() {
  const { dataCompany, isLoading } = useSelector((state) => state.companyData);
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [dataToSend, setDataToSend] = useState({
    name: "",
    email: "",
  });
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCompany());
  }, [dispatch]);

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(createCompany(uuid_v4(), dataToSend.name, dataToSend.email));
    setTimeout(() => dispatch(getAllCompany()), 1000);
  };

  const handleDelete = (id) => {
    dispatch(deleteCompany(id));
    setTimeout(() => dispatch(getAllCompany()), 1000);
  };

  return (
    <Table unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Company Name</Table.HeaderCell>
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
            {dataCompany?.map((data, idx) => (
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
              <Icon name="user" /> Add Company
            </Button>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
      <CreateModal
        open={open}
        setOpen={setOpen}
        tittle={"Add Company"}
        dataToSend={dataToSend}
        setDataToSend={setDataToSend}
        handleSubmit={handleCreate}
      />
      <UpdateModalCompany 
      open={openUpdate}
      setOpen={setOpenUpdate}
      tittle={"Update Company"}
      id={id}
      />
    </Table>
  );
}
