package com.example.demo.Service;

import com.example.demo.Model.Book;

import java.util.List;

public interface BookService {
    public List<Book> getAllBooks() ;

    public Book getBookById(String id) ;

    public Book addBook( String title,
    String author,
     String description) ;

    public Book updateBook(String id, Book updatedBook) ;


    public void deleteBook(String id);
}
