// src/ManageBooks.js
import React, { useEffect, useState } from 'react';
import axios from "axios"

const API_URL = 'http://localhost:8080/api/books';

function ManageBooks() {
    const [books, setBooks] = useState([]);
    const [form, setForm] = useState({ title: '', author: '', description: '', id: null });

    useEffect(() => { fetchBooks(); }, []);

    const fetchBooks = async () => {
        const res = await axios.get(API_URL);
        setBooks(res.data);
    };

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async () => {
        if (form.id) {
            await axios.put(`${API_URL}/${form.id}`, form);
        } else {
            const params = new URLSearchParams();
            params.append("title", form.title);
            params.append("author", form.author);
            params.append("description", form.description);
            await axios.post(API_URL, params);
        }
        setForm({ title: '', author: '', description: '', id: null });
        fetchBooks();
    };

    const handleEdit = book => setForm(book);
    const handleDelete = async id => {
        await axios.delete(`${API_URL}/${id}`);
        fetchBooks();
    };

    return (
        <div className="container">
            <h1>Manage Your Books</h1>
            <input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
            <input name="author" value={form.author} onChange={handleChange} placeholder="Author" />
            <input name="description" value={form.description} onChange={handleChange} placeholder="Description" />
            <button onClick={handleSubmit}>{form.id ? 'Update' : 'Add'} Book</button>

            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <div className="book-info">
                            <b>{book.title}</b> by {book.author} — {book.description}
                        </div>
                        <div>
                            <button onClick={() => handleEdit(book)}>Edit</button>
                            <button onClick={() => handleDelete(book.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ManageBooks;
