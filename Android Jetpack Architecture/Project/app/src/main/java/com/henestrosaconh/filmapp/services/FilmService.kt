package com.henestrosaconh.filmapp.services

import com.henestrosaconh.filmapp.network.FilmApiClient
import com.henestrosaconh.filmapp.network.dto.FilmDto
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import javax.inject.Inject

class FilmService @Inject constructor(
    private val apiClient: FilmApiClient
) {

    suspend fun get(): List<FilmDto> =
        withContext(Dispatchers.IO) {
            val response = apiClient.getFilms()
            response.body() ?: emptyList()
        }

}