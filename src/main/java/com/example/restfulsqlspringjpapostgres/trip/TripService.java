package com.example.restfulsqlspringjpapostgres.trip;

import com.example.restfulsqlspringjpapostgres.customer.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
//this
@Service
public class TripService {
    //define variable customerRepository
    private final TripRepository tripRepository;

    //method CustomerService
    @Autowired
    public TripService(TripRepository tripRepository) {
        this.tripRepository = tripRepository;
    }

    public List<Trip> getTrip(){
        return tripRepository.findAll();

        //this will be in database so this info we get from three the interface from database
//        return List.of(new Student(1L,
//                "Marek",
//                "Augustyn",
//                LocalDate.of(2000, Month.MAY,2),
//                21
//
//        ));
        }//end method getCustomer

//    //i am trying to implement to display detail only one user that is registering (or when he is logged to his account)
//    //i think that mayby i should do this in front end not back end??
//    public List<Trip> getTripWithId(Long tripId){
//        boolean existTrip = tripRepository.existsById(tripId);
//        if(!existTrip){
//            return (List<Trip>) tripRepository.getById(tripId);
//        }
//        throw new IllegalStateException("No id have found");
//
//    }


    public void addNewTrip(Trip trip) {
        Optional<Trip> tripOptional = tripRepository.findTripByTripName(trip.getTripName());

        if (tripOptional.isPresent()){

//            if(payStatus){
//                tripRepository.save(trip);
//            }
         throw new IllegalStateException("Tripwith that name is existing change name please!!!");
        }
        //instead of printing customer we want to save new customer

        //System.out.println(customer);
        tripRepository.save(trip);

    }
    //implementation services
    public void deleteTrip(Long tripId) {
        boolean exists = tripRepository.existsById(tripId);
        if (!exists){
            throw new IllegalStateException("`trip  with id: "+ tripId+" does not exist.");

        }
        //otherwise
        tripRepository.deleteById(tripId);
    }


//    //implementation PUT is wron!!!!!!!!!
//    @Transactional
//    public void updateTrip(Long tripId,
//                           String name,
//                           String listId) {
//        Trip trip = tripRepository.findById(tripId).orElseThrow(() -> new IllegalStateException(
//                "Trip with id" + tripId + "dose not exist"));//-> I think this is kind og get
//        if (name != null && name.length() > 0 && !Objects.equals(trip.getCustomerId(), name)) {
//            trip.setCustomerId(name);
//        }
//        //check listId
//        if (listId != null && listId.length() > 0 && !Objects.equals(trip.getCustomerId(), listId)) {
//            Optional<Trip> tripOptional = tripRepository.findTripByCustomerId(trip.getCustomerId());
//            if (tripOptional.isPresent()) {
//                throw new IllegalStateException("listId taken");
//            }
//            trip.setCustomerId(trip.getCustomerId());
//        }
//
//
//    }//end update customer


    //implementation PUT
    @Transactional
    public void updateTrip(Long tripId,
                               String tripName) {
        Trip trip = tripRepository.findById(tripId).orElseThrow(() -> new IllegalStateException(
                "Trop with id" + tripId + "dose not exist"));//-> I think this is kind og get
        if (tripName != null && tripName.length() > 0 && !Objects.equals(trip.getTripName(), tripName)) {
            trip.setTripName(tripName);
        }
        //check email

//        if (email != null && email.length()>0 && !Objects.equals(customer.getEmail(), email)){
//            Optional<Customer> customerOptional = customerRepository.findCustomerByEmail(email);
//            if(customerOptional.isPresent()){
//                throw new IllegalStateException("email taken");
//            }
//            customer.setEmail(email);
  //   }



    }//end update Trip



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
