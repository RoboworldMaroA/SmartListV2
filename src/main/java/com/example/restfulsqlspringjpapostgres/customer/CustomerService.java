package com.example.restfulsqlspringjpapostgres.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
//this
@Service
public class CustomerService {
    //define variable customerRepository
    private final CustomerRepository customerRepository;

    //method CustomerService
    @Autowired
    public CustomerService(CustomerRepository customerRepository) {

        this.customerRepository = customerRepository;
    }

    public List<Customer> getCustomers(){
        return customerRepository.findAll();

        //this will be in database so this info we get from three the interface from database
//        return List.of(new Student(1L,
//                "Marek",
//                "Augustyn",
//                LocalDate.of(2000, Month.MAY,2),
//                21
//
//        ));
        }//end method getCustomer

    //i am trying to implement to display detail only one user that is registering (or when he is logged to his account)
    //i think that maybe i should do this in front end not back end??
    public List<Customer> getCustomerWithId(Long Id){
        boolean existCustomer = customerRepository.existsById(Id);
        if(!existCustomer){
            return (List<Customer>) customerRepository.getById(Id);
        }
        throw new IllegalStateException("No id have found");


    }

    public void addNewCustomer(Customer customer) {
        Optional<Customer> customerOptional = customerRepository.findCustomerByEmail(customer.getEmail());

        if (customerOptional.isPresent()){
            throw new IllegalStateException("email taken");
        }
        //instead of printing customer we want to save new customer

        //System.out.println(customer);
        customerRepository.save(customer);

    }
    //implementation services
    public void deleteCustomer(Long customerId) {
        boolean exists = customerRepository.existsById(customerId);
        if (!exists){
            throw new IllegalStateException("`customer  with id: "+ customerId+" does not exist.");

        }
        //otherwise
        customerRepository.deleteById(customerId);
    }


    //implementation PUT
    @Transactional
    public void updateCustomer(Long customerId,
                              String name,
                              String email) {
        Customer customer = customerRepository.findById(customerId).orElseThrow(()-> new IllegalStateException(
                "Customer with id"+customerId+"dose not exist"));//-> I think this is kind og get
        if (name != null && name.length()>0 && !Objects.equals(customer.getName(), name)){
            customer.setName(name);
        }
        //check email
        if (email != null && email.length()>0 && !Objects.equals(customer.getEmail(), email)){
            Optional<Customer> customerOptional = customerRepository.findCustomerByEmail(email);
            if(customerOptional.isPresent()){
                throw new IllegalStateException("email taken");
            }
            customer.setEmail(email);
        }



    }//end update customer


/*    public void verifyCustomerPassword(Customer customer, String email, String customer_password){
        Optional<Customer> verification = customerRepository.findCustomerByEmail(customer.getEmail());

        if (verification.isPresent()){
            throw new IllegalStateException("email is in database");
        }
        //instead of printing customer we want to save new customer

        //System.out.println(customer);
        customerRepository.getById(customer.getId()).toString();
    }*/


}
