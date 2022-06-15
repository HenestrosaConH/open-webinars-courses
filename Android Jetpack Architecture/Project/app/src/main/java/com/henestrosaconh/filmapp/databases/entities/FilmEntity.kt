package com.henestrosaconh.filmapp.databases.entities

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "favs")
data class FilmEntity(
    @PrimaryKey
    @ColumnInfo(name = "id")
    val id: Int,
    @ColumnInfo(name = "name")
    val name: String,
    @ColumnInfo(name = "director")
    val director: String,
    @ColumnInfo(name = "rate")
    val rate: String,
    @ColumnInfo(name = "image")
    val image: String,
    @ColumnInfo(name = "synopsis")
    val synopsis: String
)
