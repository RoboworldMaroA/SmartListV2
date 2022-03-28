package com.example.restfulsqlspringjpapostgres.destination;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
//this
@Service
public class DestinationService {
    //define variable customerRepository
    private final DestinationRepository destinationRepository;

    //method CustomerService
    @Autowired
    public DestinationService(DestinationRepository destinationRepository) {
        this.destinationRepository = destinationRepository;
    }

    public List<Destination> getDestination(){
        return destinationRepository.findAll();

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
    //i think that mayby i should do this in front end not back end??
    public List<Destination> getCustomerWithId(Long destinationId){
        boolean existCustomer = destinationRepository.existsById(destinationId);
        if(!existCustomer){
            return (List<Destination>) destinationRepository.getById(destinationId);
        }
        throw new IllegalStateException("No id have found");

    }

    public void addNewDestination(Destination destination) {
        Optional<Destination> customerOptional = destinationRepository.findCustomerByEmail(destination.getName());

        if (customerOptional.isPresent()){
            throw new IllegalStateException("name taken");
        }
        //instead of printing customer we want to save new customer

        //System.out.println(customer);
        destinationRepository.save(destination);

    }
    //implementation services
    public void deleteDestination(Long destinationId) {
        boolean exists = destinationRepository.existsById(destinationId);
        if (!exists){
            throw new IllegalStateException("`customer  with id: "+ destinationId+" does not exist.");

        }
        //otherwise
        destinationRepository.deleteById(destinationId);
    }




    //implementation PUT
    @Transactional
    public void updateCustomer(Long destinationId,
                              String name,
                              String email) {
        Destination destination = destinationRepository.findById(destinationId).orElseThrow(()-> new IllegalStateException(
                "Customer with id"+destinationId+"dose not exist"));//-> I think this is kind og get
        if (name != null && name.length()>0 && !Objects.equals(destination.getName(), name)){
            destination.setName(name);
        }
        //check email
        if (email != null && email.length()>0 && !Objects.equals(destination.getName(), email)){
            Optional<Destination> customerOptional = destinationRepository.findCustomerByEmail(email);
            if(customerOptional.isPresent()){
                throw new IllegalStateException("email taken");
            }
            destination.setName(name);
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
