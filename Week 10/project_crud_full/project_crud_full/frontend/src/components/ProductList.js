import React, { useEffect, useState } from 'react';
import API from '../api';
import { Table, Button } from 'react-bootstrap';
import ProductForm from './ProductForm';

export default function ProductList(){
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);

  async function load(){ const r = await API.get('/products'); setProducts(r.data); }
  useEffect(()=>{ load(); }, []);

  async function remove(id){ if (!window.confirm('Xóa sản phẩm?')) return; await API.delete(`/products/${id}`); load(); }

  return (
    <div className="container mt-4">
      <h3>Danh sách sản phẩm</h3>
      <ProductForm onSaved={load} editing={editing} setEditing={setEditing} />
      <Table striped bordered hover className="mt-3">
        <thead><tr><th>#</th><th>Tên</th><th>Giá</th><th>Ảnh</th><th>Hành động</th></tr></thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.image ? <img src={`http://localhost:3001${p.image}`} alt="" width={80}/> : '—'}</td>
              <td>
                <Button variant="secondary" size="sm" onClick={()=>setEditing(p)}>Sửa</Button>{' '}
                <Button variant="danger" size="sm" onClick={()=>remove(p.id)}>Xóa</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
