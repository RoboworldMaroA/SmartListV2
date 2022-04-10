//package com.example.restfulsqlspringjpapostgres.Login;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//@Service
//public class CustomCustomerDetailService implements UserDetailsService {
//
//    @Autowired
//    private LoginCustomerRepository loginCustomerRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
//        //Optional<Customer> customer = customerRepository.findByName( name);
//
//        LoginCustomer loginCustomer = loginCustomerRepository.findByName(name);
//        if (loginCustomer ==null){
//            throw new UsernameNotFoundException("User not found");
//        }
//        return new CustomCustomerDetail(loginCustomer);
//        //return (UserDetails) customerRepository.findAll();
//
//    }
//
////    //implementation services
////    public void deleteCustomer(Long customerId) {
////        boolean exists = customerRepository.existsById(customerId);
////        if (!exists){
////            throw new IllegalStateException("`customer  with id: "+ customerId+" does not exist.");
////
////        }
////        //otherwise
////        customerRepository.deleteById(customerId);
////    }
//
//
//
//
//
//}
