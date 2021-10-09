import React, { useState } from "react";
import { Dropdown, Confirm } from "semantic-ui-react";

export function DropdownMore({ openUpdate, handleDelete }) {
  const [open, setOpen] = useState(false);
  return (
    <Dropdown icon="ellipsis vertical" additionPosition="bottom">
      <Dropdown.Menu>
        <Dropdown.Item text="Update" icon="pencil" onClick={openUpdate} />
        <Dropdown.Item
          text="Delete"
          icon="trash can"
          onClick={() => setOpen(true)}
        />
        <Confirm
          open={open}
          onCancel={() => setOpen(false)}
          onConfirm={handleDelete}
        />
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownMore;
