import React, { useEffect, useState } from 'react';
import API from '../api';
import { Form, Button } from 'react-bootstrap';

export default function ProductForm({ onSaved, editing, setEditing }){
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState(null);

  useEffect(()=>{ if (editing){ setName(editing.name); setPrice(editing.price); } }, [editing]);

  async function submit(e){ e.preventDefault(); const fd = new FormData(); fd.append('name', name); fd.append('price', price); if (file) fd.append('image', file);
    if (editing){ await API.put(`/products/${editing.id}`, fd); setEditing(null); } else { await API.post('/products', fd); }
    setName(''); setPrice(''); setFile(null); onSaved();
  }

  return (
    <Form onSubmit={submit} className="border p-3 rounded">
      <h5>{editing ? 'Sửa sản phẩm' : 'Thêm sản phẩm'}</h5>
      <Form.Group className="mb-2">
        <Form.Label>Tên</Form.Label>
        <Form.Control value={name} onChange={e=>setName(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Giá</Form.Label>
        <Form.Control type="number" step="0.01" value={price} onChange={e=>setPrice(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Ảnh</Form.Label>
        <Form.Control type="file" onChange={e=>setFile(e.target.files[0])} />
      </Form.Group>
      <Button type="submit">Lưu</Button>{' '}
      {editing && <Button variant="secondary" onClick={()=>{ setEditing(null); setName(''); setPrice(''); }}>Hủy</Button>}
    </Form>
  );
}
