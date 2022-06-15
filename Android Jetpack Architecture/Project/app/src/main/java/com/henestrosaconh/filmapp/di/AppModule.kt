package com.henestrosaconh.filmapp.di

import android.app.Application
import androidx.room.Room
import com.henestrosaconh.filmapp.network.FilmApiClient
import com.henestrosaconh.filmapp.network.RetrofitBuilder
import com.henestrosaconh.filmapp.databases.FilmDao
import com.henestrosaconh.filmapp.databases.FilmDatabase
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

/**
 * Module for providing dependencies at application level.
 * The services are singleton because they are instantiated
 * only once.
 */
@Module
@InstallIn(SingletonComponent::class)
class AppModule {

    @Singleton
    @Provides
    fun provideApiServiceClient(): FilmApiClient =
        RetrofitBuilder.build()
            .create(FilmApiClient::class.java)

    @Singleton
    @Provides
    fun provideRoom(application: Application): FilmDao =
        Room
            .databaseBuilder(application, FilmDatabase::class.java, "film")
            .build()
            .filmDao()

}