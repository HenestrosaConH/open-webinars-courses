package com.henestrosaconh.filmapp.databases

import androidx.room.Database
import androidx.room.RoomDatabase
import com.henestrosaconh.filmapp.databases.entities.FilmEntity

@Database(
    entities = [FilmEntity::class],
    version = 1,
    exportSchema = false
)
abstract class FilmDatabase: RoomDatabase() {
    abstract fun filmDao(): FilmDao
}