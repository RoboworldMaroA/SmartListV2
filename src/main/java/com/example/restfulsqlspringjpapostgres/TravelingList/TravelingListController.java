package com.example.restfulsqlspringjpapostgres.TravelingList;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

// in this class we implement GET, POST,PUT, DELETE
//this is a proper way we could have rst controller in main restfull app but
// this is good practice do this that way

@RestController
@RequestMapping(path = "api/v1/list")
@CrossOrigin(origins = "http://localhost:3000")
public class TravelingListController {
    private final TravelingListService travelingListService;

    @Autowired
    public TravelingListController(TravelingListService travelingListService) {
        //this.studentService = new StudentService();//this is incorrect so use annotation to inject student service
        this.travelingListService = travelingListService;
    }

    //printing list of the students GET method
        @GetMapping
        public java.util.List<TravelingList> getList(){
//            return List.of(new Student(1L,
//                    "Marek",
//                    "Augustyn",
//                    LocalDate.of(2000, Month.MAY,2),
//                    21

//
//                    ));

            return travelingListService.getList();
        }

      //implementation post
      // add new student
    //request body is an element student with details

    //**********   POST *******************************************
    //@PostMapping(value = "/api/v1/customer", consumes = MediaType.APPLICATION_JSON_VALUE)
    @PostMapping
    public void registerNewList(@RequestBody TravelingList travelingList){
        travelingListService.addNewList(travelingList);


    }//end POST

    //**********   DELETE     *******************************************
    @DeleteMapping(path = "{listId}")
    public void deleteList(@PathVariable("listId") Long listId){
        travelingListService.deleteList(listId);


    }


    //**********   PUT      *******************************************
    // put update data in the student for example we want ot change name and email
    @PutMapping(path= "{listId}")
    public void updateTrip(
            @PathVariable("listId") Long listId,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String documentsListStatus

    ){
        travelingListService.updateList(listId,name, documentsListStatus);
    }


    //************** Login verification *****************
/*
    @PostMapping
    public void verificationCustomerLogin(@RequestBody Customer customer, String email, String customerPassword){
        customerService.verifyCustomerPassword(customer,email, customerPassword);
    }*/

}

