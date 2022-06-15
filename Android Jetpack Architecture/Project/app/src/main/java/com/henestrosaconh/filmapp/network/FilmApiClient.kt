package com.henestrosaconh.filmapp.network

import com.henestrosaconh.filmapp.network.dto.FilmDto
import retrofit2.Response
import retrofit2.http.GET

interface FilmApiClient {

    /**
     * Gets all films from te API
     */
    @GET("films/-Mk8-Ge1Bs8EgrWMM4uV.json")
    suspend fun getFilms(): Response<List<FilmDto>>

}