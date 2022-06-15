package com.henestrosaconh.filmapp.databases

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import com.henestrosaconh.filmapp.databases.entities.FilmEntity

@Dao
interface FilmDao {
    @Query("SELECT * FROM favs")
    suspend fun get(): List<FilmEntity>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insert(film: FilmEntity)

    @Query("SELECT * FROM favs WHERE id = :filmId")
    suspend fun getById(filmId: Int): FilmEntity?

    @Query("DELETE FROM favs WHERE id = :filmId")
    suspend fun deleteById(filmId: Int)
}