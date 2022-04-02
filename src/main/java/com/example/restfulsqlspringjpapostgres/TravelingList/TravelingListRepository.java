package com.example.restfulsqlspringjpapostgres.TravelingList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

//import for comunication 3000 port and 8080
//import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//responsible for data access
@Repository
public interface TravelingListRepository
        extends JpaRepository<TravelingList, Long> {//customer class and long because ID is long

    //we want to find Traveling list when we know csutomer Id using specific email - to do that we have can use Optional imported from Java package
    //equivalent in sql SELECT * FROM student WHERE email = ?
    @Query("SELECT s FROM TravelingList s WHERE s.beachListStatus = ?1")
    Optional<TravelingList> findListByBeachListStatus(String beachListStatus);
    

//
//    @Query("SELECT s FROM List s WHERE s.tripPassword = ?1")
//    Optional<List> findListByListEssential(String statusListEssential);
}

