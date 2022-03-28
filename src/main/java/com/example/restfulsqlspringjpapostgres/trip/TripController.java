package com.example.restfulsqlspringjpapostgres.trip;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// in this class we implement GET, POST,PUT, DELETE
//this is a proper way we could have rst controller in main restfull app but
// this is good practice do this that way

@RestController
@RequestMapping(path = "api/v1/trip")
@CrossOrigin(origins = "http://localhost:3000")
public class TripController {
    private final TripService tripService;

    @Autowired
    public TripController(TripService tripService) {
        //this.studentService = new StudentService();//this is incorrect so use annotation to inject student service
        this.tripService = tripService;
    }

    //printing list of the students GET method
        @GetMapping
        public List<Trip> getTrip(){
//            return List.of(new Student(1L,
//                    "Marek",
//                    "Augustyn",
//                    LocalDate.of(2000, Month.MAY,2),
//                    21

//
//                    ));

            return tripService.getTrip();
        }

      //implementation post
      // add new student
    //request body is an element student with details

    //**********   POST *******************************************
    //@PostMapping(value = "/api/v1/customer", consumes = MediaType.APPLICATION_JSON_VALUE)
    @PostMapping
    public void registerNewTrip(@RequestBody Trip trip){
        tripService.addNewTrip(trip);






    }//end POST

    //**********   DELETE     *******************************************
    @DeleteMapping(path = "{tripId}")
    public void deleteTrip(@PathVariable("tripId") Long tripId){
        tripService.deleteTrip(tripId);


    }


    //**********   PUT      *******************************************
    // put update data in the student for example we want ot change name and email
    @PutMapping(path= "{tripId}")
    public void updateTrip(
            @PathVariable("tripId") Long tripId,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String email

    ){
        tripService.updateTrip(tripId,name,email);
    }


    //************** Login verification *****************
/*
    @PostMapping
    public void verificationCustomerLogin(@RequestBody Customer customer, String email, String customerPassword){
        customerService.verifyCustomerPassword(customer,email, customerPassword);
    }*/

}
