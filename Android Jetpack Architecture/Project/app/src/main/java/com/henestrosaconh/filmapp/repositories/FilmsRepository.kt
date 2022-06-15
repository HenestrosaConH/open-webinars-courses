package com.henestrosaconh.filmapp.repositories

import com.henestrosaconh.filmapp.mappers.toFilms
import com.henestrosaconh.filmapp.models.Film
import com.henestrosaconh.filmapp.services.FilmService
import javax.inject.Inject

class FilmsRepository @Inject constructor(
    private val api: FilmService
) {

    suspend fun get(): List<Film> = api.get().toFilms()

}