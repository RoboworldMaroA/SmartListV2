//package com.example.restfulsqlspringjpapostgres.Login;
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//// in this class we implement GET, POST,PUT, DELETE
////this is a proper way we could have rst controller in main restfull app but
//// this is good practice do this that way
////@CrossOrigin(origins = "http://localhost:3000")
////@CrossOrigin(origins = "*")
//
//@RestController
//@RequestMapping(path = "/api/v1/customer")
//public class LoginCustomerController {
//    private final LoginCustomerService loginCustomerService;
//
//    @Autowired
//    public LoginCustomerController(LoginCustomerService loginCustomerService) {
//        //this.studentService = new StudentService();//this is incorrect so use annotation to inject student service
//        this.loginCustomerService = loginCustomerService;
//    }
//
//    //printing list of the students GET method
//        @GetMapping
//        public List<LoginCustomer> getCustomers(){
////            return List.of(new Student(1L,
////                    "Marek",
////                    "Augustyn",
////                    LocalDate.of(2000, Month.MAY,2),
////                    21
////
////                    ));
//
//            return loginCustomerService.getCustomers();
//        }
//      //implementation post
//      // add new student
//    //request body is an element student with details
//
//    //**********   POST *******************************************
//    //@PostMapping(value = "/api/v1/customer", consumes = MediaType.APPLICATION_JSON_VALUE)
//    @PostMapping
//    public void registerNewCustomer(@RequestBody LoginCustomer loginCustomer){
//        loginCustomerService.addNewCustomer(loginCustomer);
//
//
//
//
//    }//end POST
//
//    //**********   DELETE     *******************************************
//    @DeleteMapping(path = "{customerId}")
//    public void deleteCustomer(  @PathVariable("customerId") Long customerId){
//        loginCustomerService.deleteCustomer(customerId);
//
//
//    }
//
//    //**********   PUT      *******************************************
//    // put update data in the student for example we want ot change name and email
//    @PutMapping(path= "{customerId}")
//    public void updateCustomer(
//            @PathVariable("customerId") Long customerId,
//            @RequestParam(required = false) String name,
//            @RequestParam(required = false) String email
//
//    ){
//        loginCustomerService.updateCustomer(customerId,name,email);
//    }
//
//    //************** Login verification *****************
///*
//    @PostMapping
//    public void verificationCustomerLogin(@RequestBody Customer customer, String email, String customerPassword){
//        customerService.verifyCustomerPassword(customer,email, customerPassword);
//    }*/
//
//
////    //test login
////    @GetMapping("/home")
////    public String home(){
////
////        return"this is home page";
////    }
////
////    @GetMapping("/")
////    public String homePage(){
////
////        return"this is real home page";
////    }
////
////    @GetMapping("/admin")
////    public String admin(){
////        return "This is admin page";
////
////    }
//
//}
