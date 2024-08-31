package com.drn.movieApp.service;

import com.drn.movieApp.model.Movie;

import java.util.List;
import java.util.Optional;

public interface MovieService {
    Optional<Movie> getMovieByImdbId(String imdbId);
    Optional<Movie> getMovieByTitleAndYear(String title, String year, String plot);
    Optional<List<Movie>> searchMovieByTitle(String title);
}
