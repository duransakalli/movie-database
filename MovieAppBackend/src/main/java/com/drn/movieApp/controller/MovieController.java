package com.drn.movieApp.controller;

import com.drn.movieApp.model.Movie;
import com.drn.movieApp.service.MovieService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/movies")
@CrossOrigin(origins = "http://localhost:3001")
public class MovieController {

    private final MovieService movieService;

    @Autowired
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/imdb/{imdbId}")
    public Optional<Movie> getMovieByImdbId(@PathVariable String imdbId) {
        return movieService.getMovieByImdbId(imdbId);
    }

    @GetMapping("/search")
    public Optional<Movie> getMovieByTitleAndYear(
            @RequestParam String title,
            @RequestParam(required = false) String year,
            @RequestParam(defaultValue = "short") String plot) {
        return movieService.getMovieByTitleAndYear(title, year, plot);
    }

    @GetMapping("/search/{title}")
    public Optional<List<Movie>> searchMovieByTitle(@PathVariable String title) {
        return movieService.searchMovieByTitle(title);
    }

}
