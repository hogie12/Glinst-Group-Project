import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button, Icon, Table, Loader } from "semantic-ui-react";
import DropdownMore from "../../component/dropdown";
import { getAllTracker } from "../../store/action/data";
import { deleteTracker } from "../../store/action/detail";
import TrackerModal from "./create-modal";
import UpdateModal from "./update-modal";

export default function TrackerPage() {
  const { dataTracker, isLoading } = useSelector((state) => state.trackerData);
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [id, setId] = useState("");
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTracker(id))
    setTimeout(() => dispatch(getAllTracker()), 1000)
  }

  return (
    <Table unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Talent Name</Table.HeaderCell>
          <Table.HeaderCell>Company Name</Table.HeaderCell>
          <Table.HeaderCell>PIC Name</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
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
              <Table.Cell>
                <Loader active inline />
              </Table.Cell>
            </Table.Row>
          </>
        ) : (
          <>
            {dataTracker?.map((data, idx) => (
              <Table.Row key={idx}>
                <Table.Cell>{data.talent}</Table.Cell>
                <Table.Cell>{data.company}</Table.Cell>
                <Table.Cell>{data.pic}</Table.Cell>
                <Table.Cell>{data.status}</Table.Cell>
                <Table.Cell>
                  <DropdownMore
                    openUpdate={() => [setOpenUpdate(true), setId(data.id)]}
                    handleDelete={() => handleDelete(data.id)}
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
              <Icon name="user" /> Add Tracker
            </Button>
          </Table.HeaderCell>
          <TrackerModal open={open} setOpen={setOpen} tittle={"Add Tracker"} />
          <UpdateModal
            open={openUpdate}
            setOpen={setOpenUpdate}
            tittle={"Update Tracker"}
            id={id}
          />
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}
