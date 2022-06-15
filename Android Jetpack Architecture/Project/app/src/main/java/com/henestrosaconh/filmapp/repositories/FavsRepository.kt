package com.henestrosaconh.filmapp.repositories

import com.henestrosaconh.filmapp.databases.FilmDao
import com.henestrosaconh.filmapp.mappers.toEntity
import com.henestrosaconh.filmapp.mappers.toFilms
import com.henestrosaconh.filmapp.models.Film
import javax.inject.Inject

class FavsRepository @Inject constructor(
    private val filmDao: FilmDao
) {

    suspend fun get(): List<Film> = filmDao.get().toFilms()

    suspend fun save(film: Film) {
        filmDao.insert(film.toEntity())
    }

    suspend fun exist(film: Film): Boolean =
        filmDao.getById(film.id) != null

    suspend fun remove(film: Film) {
        filmDao.deleteById(film.id)
    }

}