package com.example.demo.Service;

import com.example.demo.Model.Book;
import com.example.demo.Repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService{
    @Autowired
    private BookRepository bookRepository;
    @Override
    public List<Book> getAllBooks() {
        return this.bookRepository.findAll();
    }

    @Override
    public Book getBookById(String id) {
        return this.bookRepository.findById(id).orElse(null);
    }

    @Override
    public Book addBook( String title,
     String author,
     String description) {
        Book book=new Book();
        book.setTitle(title);
        book.setAuthor(author);
        book.setDescription(description);
        // DO NOT SET ID – MongoDB will do it

        return this.bookRepository.save(book);
    }

    @Override
    public Book updateBook(String id, Book updatedBook) {

        Book book = this.getBookById(id);
        if (book != null) {
            book.setTitle(updatedBook.getTitle());
            book.setAuthor(updatedBook.getAuthor());
            book.setDescription(updatedBook.getDescription());
            return bookRepository.save(book);
        }
        return null;
    }
    @Override
    public void deleteBook(String id) {
 this.bookRepository.deleteById(id);
    }
}
