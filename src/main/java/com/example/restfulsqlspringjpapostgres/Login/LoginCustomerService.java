//package com.example.restfulsqlspringjpapostgres.Login;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import javax.transaction.Transactional;
//import java.util.List;
//import java.util.Objects;
//import java.util.Optional;
////this
//@Service
//public class LoginCustomerService {
//    //define variable customerRepository
//    private final LoginCustomerRepository loginCustomerRepository;
//
//    //method CustomerService
//    @Autowired
//    public LoginCustomerService(LoginCustomerRepository loginCustomerRepository) {
//
//        this.loginCustomerRepository = loginCustomerRepository;
//    }
//
//    public List<LoginCustomer> getCustomers(){
//        return loginCustomerRepository.findAll();
//
//        //this will be in database so this info we get from three the interface from database
////        return List.of(new Student(1L,
////                "Marek",
////                "Augustyn",
////                LocalDate.of(2000, Month.MAY,2),
////                21
////
////        ));
//        }//end method getCustomer
//
//    //i am trying to implement to display detail only one user that is registering (or when he is logged to his account)
//    //i think that mayby i should do this in front end not back end??
//    public List<LoginCustomer> getCustomerWithId(Long Id){
//        boolean existCustomer = loginCustomerRepository.existsById(Id);
//        if(!existCustomer){
//            return (List<LoginCustomer>) loginCustomerRepository.getById(Id);
//        }
//        throw new IllegalStateException("No id have found");
//
//
//    }
//
//    public void addNewCustomer(LoginCustomer loginCustomer) {
//        Optional<LoginCustomer> customerOptional = loginCustomerRepository.findCustomerByEmail(loginCustomer.getEmail());
//
//        if (customerOptional.isPresent()){
//            throw new IllegalStateException("email taken");
//        }
//        //instead of printing customer we want to save new customer
//
//        //System.out.println(customer);
//        loginCustomerRepository.save(loginCustomer);
//
//    }
//    //implementation services
//    public void deleteCustomer(Long customerId) {
//        boolean exists = loginCustomerRepository.existsById(customerId);
//        if (!exists){
//            throw new IllegalStateException("`customer  with id: "+ customerId+" does not exist.");
//
//        }
//        //otherwise
//        loginCustomerRepository.deleteById(customerId);
//    }
//
//
//    //implementation PUT
//    @Transactional
//    public void updateCustomer(Long customerId,
//                              String name,
//                              String email) {
//        LoginCustomer loginCustomer = loginCustomerRepository.findById(customerId).orElseThrow(()-> new IllegalStateException(
//                "Customer with id"+customerId+"dose not exist"));//-> I think this is kind og get
//        if (name != null && name.length()>0 && !Objects.equals(loginCustomer.getName(), name)){
//            loginCustomer.setName(name);
//        }
//        //check email
//        if (email != null && email.length()>0 && !Objects.equals(loginCustomer.getEmail(), email)){
//            Optional<LoginCustomer> customerOptional = loginCustomerRepository.findCustomerByEmail(email);
//            if(customerOptional.isPresent()){
//                throw new IllegalStateException("email taken");
//            }
//            loginCustomer.setEmail(email);
//        }
//
//
//
//    }//end update customer
//
//
///*    public void verifyCustomerPassword(Customer customer, String email, String customer_password){
//        Optional<Customer> verification = customerRepository.findCustomerByEmail(customer.getEmail());
//
//        if (verification.isPresent()){
//            throw new IllegalStateException("email is in database");
//        }
//        //instead of printing customer we want to save new customer
//
//        //System.out.println(customer);
//        customerRepository.getById(customer.getId()).toString();
//    }*/
//
//
//}
