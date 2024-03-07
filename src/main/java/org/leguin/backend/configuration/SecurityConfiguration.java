package org.leguin.backend.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.server.SecurityWebFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;


@Configuration
@EnableWebSecurity
public class SecurityConfiguration {
    @Bean
	public SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) throws Exception {
		http
        .authorizeHttpRequests((authorize) -> authorize
        .anyRequest().permitAll()
        .requestMatchers("/api/**").authenticated()
        .csrf(csrf -> csrf.disable())
        )
        // .httpBasic(withDefaults())

		return http.build();
	}
}