package com.henestrosaconh.filmapp.models

import android.os.Parcelable
import kotlinx.parcelize.Parcelize

@Parcelize
data class Film(
    val id: Int,
    val name: String,
    val director: String,
    val rate: String,
    val image: String,
    val synopsis: String
): Parcelable
