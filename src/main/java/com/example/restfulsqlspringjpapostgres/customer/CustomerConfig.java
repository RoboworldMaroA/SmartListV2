package com.example.restfulsqlspringjpapostgres.customer;
//create a bean

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

import static java.time.Month.*;

@Configuration
public class CustomerConfig {

    @Bean
    CommandLineRunner commandLineRunnerCustomer(CustomerRepository repository){

        return args -> {

            Customer Admin = new Customer(
                    //1l,
                    "Marek",
                    "Augustyn",
                    "maugusty@o2.pl",
                    "1234567890",
                    LocalDate.of(1978, SEPTEMBER, 25),
                    "man",
                    "Dublin",
                    "$2a$12$zy46eqk6G2HdH63IiZ5HV.jwm2C5fReUHqyniJ.oIN0g.UDQHn7WW",
                    "1234",
                    "Yes",
                    "ADMIN"

                    );



            Customer User = new Customer(
                    //1L, it will be generated
                    "Wiesiek",
                    "Augustyn",
                    "maugusty@o2.pl",
                    "1234567890",
                    LocalDate.of(2000, JANUARY, 20),
                    "man",
                    "Poland",
                    "$2a$12$bDFm6Ml39.3.xxs0rKwzTuKT7EL076cWJjpaxQcW4V2M.X8VuBA2m",
                    "password",
                    "No",
                    "USER"

                    );



            //now we tell that we want save customer using list
            repository.saveAll(
                    List.of(Admin, User)

            );
        };


    }
}
