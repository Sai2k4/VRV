import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { getPermissions, addPermission, updatePermission, deletePermission } from '../services/permissionService';

const PermissionManagement = () => {
  const [permissions, setPermissions] = useState([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ id: null, name: '' });

  useEffect(() => {
    fetchPermissions();
  }, []);

  const fetchPermissions = async () => {
    const { data } = await getPermissions();
    setPermissions(data);
  };

  const handleSave = async () => {
    if (form.id) {
      await updatePermission(form.id, form);
    } else {
      await addPermission(form);
    }
    setOpen(false);
    fetchPermissions();
  };

  const handleDelete = async (id) => {
    await deletePermission(id);
    fetchPermissions();
  };

  const columns = [
    { field: 'name', headerName: 'Permission Name', width: 200 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <>
          <Button size="small" onClick={() => setForm(params.row) & setOpen(true)}>Edit</Button>
          <Button size="small" color="error" onClick={() => handleDelete(params.id)}>Delete</Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <Button variant="contained" onClick={() => setForm({ id: null, name: '' }) & setOpen(true)}>
        Add Permission
      </Button>
      <DataGrid rows={permissions} columns={columns} />
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{form.id ? 'Edit Permission' : 'Add Permission'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Permission Name"
            fullWidth
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PermissionManagement;
