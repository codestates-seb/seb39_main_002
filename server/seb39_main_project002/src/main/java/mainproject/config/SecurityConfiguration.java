package mainproject.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import mainproject.auth.filter.JwtAuthenticationFilter;
import mainproject.auth.filter.JwtVerificationFilter;
import mainproject.auth.handler.MemberAccessDeniedHandler;
import mainproject.auth.handler.MemberAuthenticationEntryPoint;
import mainproject.auth.handler.MemberAuthenticationFailureHandler;
import mainproject.auth.handler.MemberAuthenticationSuccessHandler;
import mainproject.auth.jwt.JwtTokenizer;
import mainproject.auth.utils.CustomAuthorityUtils;
import mainproject.auth.utils.XssProtectSupport;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

import static org.springframework.security.config.Customizer.withDefaults;

//@Configuration
@EnableWebSecurity(debug = true)
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils; // 추가

    private final ObjectMapper mapper;

    public SecurityConfiguration(JwtTokenizer jwtTokenizer,
                                 CustomAuthorityUtils authorityUtils, ObjectMapper mapper) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
        this.mapper = mapper;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors(withDefaults())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new MemberAuthenticationEntryPoint())  // 추가
                .accessDeniedHandler(new MemberAccessDeniedHandler())            // 추가
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
                                .antMatchers(HttpMethod.POST, "/*/members/**").permitAll()
                                .antMatchers(HttpMethod.PATCH, "/*/members/**").hasRole("USER")
                                .antMatchers(HttpMethod.GET, "/*/members").hasRole("ADMIN")
                                .antMatchers(HttpMethod.GET, "/*/members/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.DELETE, "/*/members/**").hasRole("USER")

                                .antMatchers(HttpMethod.POST, "/*/foods/**").hasRole("USER")
                                .antMatchers(HttpMethod.PATCH, "/*/foods/**").hasRole("USER")
                                .antMatchers(HttpMethod.GET, "/*/foods/**").hasAnyRole("USER")
                                .antMatchers(HttpMethod.DELETE, "/*/foods/**").hasRole("USER")

                                .antMatchers(HttpMethod.POST, "/*/notepad/**").hasRole("USER")
                                .antMatchers(HttpMethod.DELETE, "/*/notepad/**").hasRole("USER")
                                .antMatchers(HttpMethod.GET, "/*/notepad/**").hasAnyRole("USER")
                                .anyRequest().permitAll()
                );
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PATCH", "DELETE"));
        configuration.setAllowedHeaders(List.of(CorsConfiguration.ALL)); //cors 오류로 인해 추가
        configuration.addExposedHeader("Authorization");//클라이언트에 헤더 보여주기
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public MappingJackson2HttpMessageConverter characterEscapeConverter() {
        ObjectMapper objectMapper = mapper.copy();
        objectMapper.getFactory().setCharacterEscapes(new XssProtectSupport());
        return new MappingJackson2HttpMessageConverter(objectMapper);
    }


    //Jwt 인증필터 등록
    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/v1/members/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);


            builder
                    .addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }
    }
}
