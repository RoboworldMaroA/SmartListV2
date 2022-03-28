package com.example.restfulsqlspringjpapostgres.destination;
//create a bean

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

import static java.time.Month.JANUARY;
import static java.time.Month.SEPTEMBER;

@Configuration
public class DestinationConfig {

    @Bean
    CommandLineRunner commandLineRunnerDestination(DestinationRepository destinationRepository){

        return args -> {

            Destination Ireland= new Destination(
                    //1,
                    "Ireland",
                    "From 5 to 13 Celsius degree.",
                    "From 10 to 19 Celsius degree.",
                    "From 11 to 16 Celsius degree.",
                    "From 4 to 9 Celsius degree.",
                    "1",
                    "1",
                    "1",
                    "Cold rainy country, umbrella and wind and waterproof jacket recommended. "
                    );

            Destination Spain= new Destination(
                    //1,
                    "Spain",
                    "From 8 to 16 Celsius degree.",
                    "From 17 to 33 Celsius degree.",
                    "From 13 to 20 Celsius degree.",
                    "From 1 to 10 Celsius degree.",
                    "2",
                    "2",
                    "2",
                    "Warm country, but could be cold in winter."
            );

            //now we tell that we want save customer using list
            destinationRepository.saveAll(
                    List.of(Ireland)

            );
        };


    }
}
