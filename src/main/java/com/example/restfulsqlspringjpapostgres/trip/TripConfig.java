package com.example.restfulsqlspringjpapostgres.trip;
//create a bean

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

import static java.time.Month.*;

@Configuration
public class TripConfig {

    @Bean
    CommandLineRunner commandLineRunnerTrip(TripRepository tripRepository){

        return args -> {

            Trip TripToSpain = new Trip(
                    //,
                    "Trip to Italy",
                    "1",
                    "1",
                    "1",
                    "Yes",
                    "Yes",
                    "Yes",
                     "Italy",
                    LocalDate.of(2022, AUGUST, 10),
                    LocalDate.of(2022,AUGUST,20),
                    "Beach",
                    "password",
                    "Beach, and rest with wife. This Customer has paid subscription",
                    "Yes",
                    "Yes",
                    "Yes",
                    "No",
                    "No"
                    );


            Trip TripToIreland = new Trip(
                    //1N,
                    "Trip to Ireland",
                    "2",
                    "2",
                    "2",
                    "Yes",
                    "No",
                    "Yes",
                    "Ireland",
                    LocalDate.of(2022,MAY,20),
                    LocalDate.of(2022,MAY,20),
                    "TREK",
                    "customerPassword",
                    "TRAVEL WITH A FRIENDS TO HTE IRELAND, This customer did not paid subscription",
                    "No",
                    "No",
                    "Yes",
                    "No",
                    "No"
                    );



            //now we tell that we want save customer using list
            tripRepository.saveAll(
                    List.of(TripToSpain, TripToIreland)

            );
        };


    }
}
