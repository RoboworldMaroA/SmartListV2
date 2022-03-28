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
                    //1l,
                    "1",
                    "2",
                    "2",
                    "1234567890",
                    LocalDate.of(2022, AUGUST, 10),
                    LocalDate.of(2022,AUGUST,20),
                    "Beach",
                    "password",
                    "Beach, and rest with wife.",
                    "Yes"

                    );


            Trip TripToIreland = new Trip(
                    //1L, it will be generated
                    "1",
                    "1",
                    "1",
                    "IRELAND",
                    LocalDate.of(2022,MAY,20),
                    LocalDate.of(2022,MAY,20),
                    "TREK",
                    "customerPassword",
                    "TRAVEL WITH A FRIENDS TO HTE IRELAND",
                    "No"

                    );



            //now we tell that we want save customer using list
            tripRepository.saveAll(
                    List.of(TripToSpain, TripToIreland)

            );
        };


    }
}
