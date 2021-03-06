package com.example.restfulsqlspringjpapostgres.customer;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// in this class we implement GET, POST,PUT, DELETE
//this is a proper way we could have rst controller in main restfull app but
// this is good practice do this that way
//@CrossOrigin(origins = "http://localhost:3000")
//@CrossOrigin(origins = "*")

@RestController
@RequestMapping(path = "/api/v1/customer")
public class  CustomerController {
    private final CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        //this.studentService = new StudentService();//this is incorrect so use annotation to inject student service
        this.customerService = customerService;
    }

    //printing list of the students GET method
        @GetMapping
        public List<Customer> getCustomers(){
//            return List.of(new Student(1L,
//                    "Marek",
//                    "Augustyn",
//                    LocalDate.of(2000, Month.MAY,2),
//                    21
//
//                    ));

            return customerService.getCustomers();
        }
      //implementation post
      // add new student
    //request body is an element student with details

    //**********   POST *******************************************
    //@PostMapping(value = "/api/v1/customer", consumes = MediaType.APPLICATION_JSON_VALUE)
    @PostMapping
    public void registerNewCustomer(@RequestBody Customer customer){
        customerService.addNewCustomer(customer);




    }//end POST

    //**********   DELETE     *******************************************
    @DeleteMapping(path = "{customerId}")
    public void deleteCustomer(  @PathVariable("customerId") Long customerId){
        customerService.deleteCustomer(customerId);


    }

    //**********   PUT      *******************************************
    // put update data in the student for example we want ot change name and email
    @PutMapping(path= "{customerId}")
    public void updateCustomer(
            @PathVariable("customerId") Long customerId,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String email

    ){
        customerService.updateCustomer(customerId,name,email);
    }

    //************** Login verification *****************

    // path is http://localhost:8080/api/v1/customer/login
    @GetMapping("/login")
    public void loginCustomers(@RequestParam(required = false) String email,
                               @RequestParam(required = false) String password){
        customerService.loginCustomers(email,password);
    }



/*
    @PostMapping
    public void verificationCustomerLogin(@RequestBody Customer customer, String email, String customerPassword){
        customerService.verifyCustomerPassword(customer,email, customerPassword);
    }*/


//    //test login
//    @GetMapping("/home")
//    public String home(){
//
//        return"this is home page";
//    }
//
//    @GetMapping("/")
//    public String homePage(){
//
//        return"this is real home page";
//    }
//
//    @GetMapping("/admin")
//    public String admin(){
//        return "This is admin page";
//
//    }

}
