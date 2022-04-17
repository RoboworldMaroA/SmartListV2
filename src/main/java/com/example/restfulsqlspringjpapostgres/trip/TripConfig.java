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
                    "trip To Spain",
                    "list 1",
                    "List one",
                    true,
                    false,
                    true,
                    "0",
                    true,
                    LocalDate.of(2022, AUGUST, 10),
                    LocalDate.of(2022,AUGUST,20),
                    false,
                    "password",
                    "Beach, and rest with wife. This Customer has paid subscription",
                    true,
                    false,
                    true,
                    false,
                    true,
                    true,
                    true,
                    false,
                    false,
                    false,
                    true,
                    false,
                    false,
                    false,
                    true,
                    false,
                    true,
                    true,
                    "Spain"
            );


            Trip TripToIreland = new Trip(
                    //,
                    "Trip to Ireland",
                    "list 2",
                    "interesting list change this",
                    true,
                    true,
                    true,
                    "1",
                    false,
                    LocalDate.of(2022, OCTOBER, 10),
                    LocalDate.of(2022,OCTOBER,20),
                    true,
                    "password",
                    "Beach, and rest with wife. This Customer has paid subscription",
                    false,
                    true,
                    true,
                    false,
                    false,
                    true,
                    false,
                    false,
                    false,
                    true,
                    true,
                    true,
                    true,
                    true,
                    true,
                    true,
                    true,
                    true,
                    "Ireland"

                    );



            //now we tell that we want save customer using list
            tripRepository.saveAll(
                    List.of(TripToSpain, TripToIreland)

            );
        };


    }
}
