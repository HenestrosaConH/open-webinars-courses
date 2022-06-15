package com.henestrosaconh.filmapp.viewmodels

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.henestrosaconh.filmapp.models.Film
import com.henestrosaconh.filmapp.repositories.FilmsRepository
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.launch
import javax.inject.Inject

/**
 * ViewModel for [FilmsFragment]
 */
@HiltViewModel
class FilmsViewModel
@Inject constructor(
    private val repository: FilmsRepository
) : ViewModel() {

    val filmsLiveData = MutableLiveData<List<Film>>()
    val isLoadingLiveData = MutableLiveData<Boolean>()

    fun onViewCreated() {
        viewModelScope.launch {
            isLoadingLiveData.postValue(true)
            filmsLiveData.postValue(repository.get())
            isLoadingLiveData.postValue(false)
        }
    }

}