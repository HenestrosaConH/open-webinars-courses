package com.henestrosaconh.filmapp.network.dto

import com.google.gson.annotations.SerializedName

/**
 * Uses GSON annotations to link the name of the
 * property obtained from the JSON with the property
 * of the DTO
 */
data class FilmDto(
    @SerializedName("id")
    val id: Int,
    @SerializedName("name")
    val name: String,
    @SerializedName("director")
    val director: String,
    @SerializedName("rate")
    val rate: String,
    @SerializedName("image")
    val image: String,
    @SerializedName("synopsis")
    val synopsis: String,
)