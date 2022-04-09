package com.example.restfulsqlspringjpapostgres.destination;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// in this class we implement GET, POST,PUT, DELETE
//this is a proper way we could have rst controller in main restfull app but
// this is good practice do this that way

@RestController
@RequestMapping(path = "/api/v1/destination")
//@CrossOrigin(origins = "http://localhost:3000")
public class DestinationController {
    private final DestinationService destinationService;

    @Autowired
    public DestinationController(DestinationService destinationService) {
        //this.studentService = new StudentService();//this is incorrect so use annotation to inject student service
        this.destinationService = destinationService;
    }

    //printing list of the students GET method
        @GetMapping
        public List<Destination> getDestination(){
//            return List.of(new Student(1L,
//                    "Marek",
//                    "Augustyn",
//                    LocalDate.of(2000, Month.MAY,2),
//                    21
//
//                    ));

            return destinationService.getDestination();
        }
      //implementation post
      // add new student
    //request body is an element student with details

    //**********   POST *******************************************
    //@PostMapping(value = "/api/v1/customer", consumes = MediaType.APPLICATION_JSON_VALUE)
    @PostMapping
    public void registerNewDestination(@RequestBody Destination destination){
        destinationService.addNewDestination(destination);




    }//end POST

    //**********   DELETE     *******************************************
    @DeleteMapping(path = "{destinationId}")
    public void deleteDestination(  @PathVariable("destinationId") Long destinationId){
        destinationService.deleteDestination(destinationId);


    }

    //**********   PUT      *******************************************
    // put update data in the student for example we want ot change name and email
    @PutMapping(path= "{destinationId}")
    public void updateCustomer(
            @PathVariable("destinationId") Long destinationId,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String email

    ){
        destinationService.updateCustomer(destinationId,name,email);
    }

    //************** Login verification *****************
/*
    @PostMapping
    public void verificationCustomerLogin(@RequestBody Customer customer, String email, String customerPassword){
        customerService.verifyCustomerPassword(customer,email, customerPassword);
    }*/

}
