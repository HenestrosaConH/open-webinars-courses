package com.henestrosaconh.filmapp.mappers

import com.henestrosaconh.filmapp.network.dto.FilmDto
import com.henestrosaconh.filmapp.databases.entities.FilmEntity
import com.henestrosaconh.filmapp.models.Film

fun Film.toEntity(): FilmEntity =
    FilmEntity(
        id = this.id,
        name = this.name,
        director = this.director,
        rate = this.rate,
        image = this.image,
        synopsis = this.synopsis
    )

fun FilmEntity.toFilm(): Film =
    Film(
        id = this.id,
        name = this.name,
        director = this.director,
        rate = this.rate,
        image = this.image,
        synopsis = this.synopsis
    )

@JvmName("FilmEntityListToFilmList")
fun List<FilmEntity>.toFilms(): List<Film> =
    this.map { it.toFilm() }

fun FilmDto.toFilm(): Film =
    Film(
        id = this.id,
        name = this.name,
        director = this.director,
        rate = this.rate,
        image = this.image,
        synopsis = this.synopsis
    )

@JvmName("FilmDtoListToFilmList")
fun List<FilmDto>.toFilms(): List<Film> =
    this.map { it.toFilm() }