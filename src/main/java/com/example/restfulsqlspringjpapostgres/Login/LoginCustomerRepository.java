//package com.example.restfulsqlspringjpapostgres.Login;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.stereotype.Repository;
//
//import java.util.Optional;
//
////import for comunication 3000 port and 8080
////import org.springframework.data.rest.core.annotation.RepositoryRestResource;
//
////responsible for data access
//@Repository
//public interface LoginCustomerRepository
//        extends JpaRepository<LoginCustomer, Long> {//customer class and long because ID is long
//
//    //we want to find customer using specific email - to do that we have can use Optional imported from Java package
//    //equivalent in sql SELECT * FROM student WHERE email = ?
//    @Query("SELECT s FROM Customer s WHERE s.email = ?1")
//    Optional<LoginCustomer> findCustomerByEmail(String email);
//
//
//    @Query("SELECT s FROM Customer s WHERE s.customerPassword = ?1")
//    Optional<LoginCustomer> findCustomerByPassword(String customerPassword);
//
////    @Query("SELECT s FROM Customer s WHERE s.name = ?1")
//    LoginCustomer findByName(String name);
//    //Optional <Customer> findByName(String name);
//
//
//}
