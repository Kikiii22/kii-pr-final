package com.example.demo.config;

import com.example.demo.Model.Book;
import com.example.demo.Repository.BookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initBooks(BookRepository bookRepository) {
        return args -> {
            if (bookRepository.count() == 0) {
                bookRepository.save(new Book(null, "The Hobbit", "J.R.R. Tolkien", "A fantasy adventure"));
                bookRepository.save(new Book(null, "1984", "George Orwell", "Dystopian novel"));
                bookRepository.save(new Book(null, "Clean Code", "Robert C. Martin", "Best practices for writing clean code"));
                System.out.println("Sample books added to MongoDB.");
            }
        };
    }
}

