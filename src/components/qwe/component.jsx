import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class MovieList extends Component {
  state = {
    movies: getMovies(),
  };
  render() {
    return (
      <table className="table" style={{ paddingTop: 100 }}>
        <thead style={{ color: "black", fontSize: 20 }}>
          <tr>
            <th>Title</th>
            <th>Gener</th>
            <th>Stock</th>
            <th>Daily Rental</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((movies) => (
            <tr>
              <td>{movies.title}</td>
              <td>{movies.genre.name}</td>
              <td>{movies.numberInStock}</td>
              <td>{movies.dailyRentalRate}</td>
              <td>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MovieList;
