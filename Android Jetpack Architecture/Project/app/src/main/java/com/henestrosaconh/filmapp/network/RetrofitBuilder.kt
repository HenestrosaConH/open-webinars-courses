package com.henestrosaconh.filmapp.network

import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

object RetrofitBuilder {

    private const val URL = "https://jetpack-course-default-rtbd.firebaseio.com/"

    /**
     *
     * Creates an instance of Retrofit with the API calls
     */
    fun build(): Retrofit =
        Retrofit.Builder()
            .baseUrl(URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()

}