package dev.russell.movies;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

import org.bson.types.ObjectId;

/**
 * Data Access Layer
 * Task: talks to the database and getting the databack
 * Allows to use methods from MongoRespository
 */

@Repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId>{
    Optional<Movie> findMovieByImdbId(String imdbId);
}
