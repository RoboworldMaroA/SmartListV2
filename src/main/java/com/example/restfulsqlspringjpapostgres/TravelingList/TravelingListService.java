package com.example.restfulsqlspringjpapostgres.TravelingList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Objects;
import java.util.Optional;
//this
@Service
public class TravelingListService {
    //define variable customerRepository
    private final TravelingListRepository travelingListRepository;

    //method CustomerService
    @Autowired
    public TravelingListService(TravelingListRepository travelingListRepository) {
        this.travelingListRepository = travelingListRepository;
    }

    public java.util.List<TravelingList> getList(){
        return travelingListRepository.findAll();

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
    public java.util.List<TravelingList> getListWithId(Long listId){
        boolean existList = travelingListRepository.existsById(listId);
        if(!existList){
            return (java.util.List<TravelingList>) travelingListRepository.getById(listId);
        }
        throw new IllegalStateException("No id have found");

    }


    public void addNewList(TravelingList travelingList) {
        Optional<TravelingList> tripOptional = travelingListRepository.findListByBeachListStatus(travelingList.getName());

        if (tripOptional.isPresent()){
//            if(payStatus){
//                tripRepository.save(trip);
//            }
            throw new IllegalStateException("If you want more  list you have to pay subscription");
        }
        //instead of printing customer we want to save new customer

        //System.out.println(customer);
        travelingListRepository.save(travelingList);

    }
    //implementation services
    public void deleteList(Long listId) {
        boolean exists = travelingListRepository.existsById(listId);
        if (!exists){
            throw new IllegalStateException("`customer  with id: "+ listId+" does not exist.");

        }
        //otherwise
        travelingListRepository.deleteById(listId);
    }


    //implementation PUT
    @Transactional
    public void updateList(Long tripId,
                           String name,
                           String beachListStatus) {
        TravelingList travelingList = travelingListRepository.findById(tripId).orElseThrow(()-> new IllegalStateException(
                "Customer with id"+tripId+"dose not exist"));//-> I think this is kind og get
        if (name != null && name.length()>0 && !Objects.equals(travelingList.getId(), name)){
            travelingList.setId(Long.valueOf(name));
        }
        //check beachListStatus
        if (beachListStatus != null && beachListStatus.length()>0 && !Objects.equals(travelingList.getId(), beachListStatus)){
            Optional<TravelingList> tripOptional = travelingListRepository.findListByBeachListStatus(beachListStatus);
            if(tripOptional.isPresent()){
                throw new IllegalStateException("beachListStatus taken");
            }
            travelingList.setId(Long.valueOf(beachListStatus));
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
