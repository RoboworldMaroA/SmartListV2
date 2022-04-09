package com.example.restfulsqlspringjpapostgres.customer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

//import for comunication 3000 port and 8080
//import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//responsible for data access
@Repository
public interface  CustomerRepository
        extends JpaRepository<Customer, Long> {//customer class and long because ID is long

    //we want to find customer using specific email - to do that we have can use Optional imported from Java package
    //equivalent in sql SELECT * FROM student WHERE email = ?
    @Query("SELECT s FROM Customer s WHERE s.email = ?1")
    Optional<Customer> findCustomerByEmail(String email);


    @Query("SELECT s FROM Customer s WHERE s.customerPassword = ?1")
    Optional<Customer> findCustomerByPassword(String customerPassword);

//    @Query("SELECT s FROM Customer s WHERE s.name = ?1")
//    Customer findByName(String name);
    //Optional <Customer> findByName(String name);


}
