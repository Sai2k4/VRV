import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { getRoles, addRole, updateRole, deleteRole } from '../services/roleService';
import { getPermissions } from '../services/permissionService';

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ id: null, name: '', permissions: [] });

  // Fetch roles and permissions when the component mounts
  useEffect(() => {
    fetchRoles();
    fetchPermissions();
  }, []);

  // Fetch roles from the mock API
  const fetchRoles = async () => {
    const { data } = await getRoles();
    setRoles(data);
  };

  // Fetch permissions from the mock API
  const fetchPermissions = async () => {
    const { data } = await getPermissions();
    setPermissions(data);
  };

  // Handle saving or updating role
  const handleSave = async () => {
    if (form.id) {
      await updateRole(form.id, form);
    } else {
      await addRole(form);
    }
    setOpen(false);
    fetchRoles();
  };

  // Handle deleting role
  const handleDelete = async (id) => {
    await deleteRole(id);
    fetchRoles();
  };

  // Handle permission toggle for the role
  const handlePermissionChange = (permission) => {
    const updatedPermissions = form.permissions.includes(permission)
      ? form.permissions.filter((p) => p !== permission)
      : [...form.permissions, permission];
    setForm({ ...form, permissions: updatedPermissions });
  };

  const columns = [
    { field: 'name', headerName: 'Role Name', width: 200 },
    { field: 'permissions', headerName: 'Permissions', width: 250 },
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
      <Button variant="contained" onClick={() => setForm({ id: null, name: '', permissions: [] }) & setOpen(true)}>
        Add Role
      </Button>
      <DataGrid rows={roles} columns={columns} />
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{form.id ? 'Edit Role' : 'Add Role'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Role Name"
            fullWidth
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <div>
            <strong>Permissions</strong>
            {permissions.map((permission) => (
              <FormControlLabel
                key={permission.id}
                control={
                  <Checkbox
                    checked={form.permissions.includes(permission.name)}
                    onChange={() => handlePermissionChange(permission.name)}
                  />
                }
                label={permission.name}
              />
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RoleManagement;
