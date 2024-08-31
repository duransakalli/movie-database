package com.drn.movieApp.service;

import com.drn.movieApp.model.Movie;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class MovieServiceImpl implements MovieService {

    @Value("${omdbapi.key}")
    private String apiKey;

    @Value("${omdbapi.url}")
    private String apiUrl;

    private final RestTemplate restTemplate;

    public MovieServiceImpl(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Override
    public Optional<Movie> getMovieByImdbId(String imdbId) {
        String url = String.format("%s?i=%s&apikey=%s", apiUrl, imdbId, apiKey);
        return Optional.ofNullable(restTemplate.getForObject(url, Movie.class));
    }

    @Override
    public Optional<Movie> getMovieByTitleAndYear(String title, String year, String plot) {
        String url = String.format("%s?t=%s&y=%s&plot=%s&apikey=%s", apiUrl, title, year, plot, apiKey);
        return Optional.ofNullable(restTemplate.getForObject(url, Movie.class));
    }

    @Override
    public Optional<List<Movie>> searchMovieByTitle(String title) {
        String url = String.format("%s?s=%s&apikey=%s", apiUrl, title, apiKey);
        return Optional.ofNullable(Collections.singletonList(restTemplate.getForObject(url, Movie.class)));
    }
}
