package com.example.restfulsqlspringjpapostgres.TravelingList;
//create a bean

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TravelingListConfig {

    @Bean
    CommandLineRunner commandLineRunnerList(TravelingListRepository travelingListRepository){

        return args -> {

            TravelingList allTravelingListStatus
                    = new TravelingList(
                    //1l,
                    "Status",
                    "Yes",
                    "Yes",
                    "No"

                    );




            //now we tell that we want save customer using list
            travelingListRepository.saveAll(
                    java.util.List.of(allTravelingListStatus)

            );
        };


    }
}
