package com.henestrosaconh.filmapp.viewmodels

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.henestrosaconh.filmapp.repositories.FavsRepository
import com.henestrosaconh.filmapp.models.Film
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.launch
import javax.inject.Inject

/**
 * ViewModel for [FavsFragment]
 */
@HiltViewModel
class FavsViewModel
@Inject constructor(
    private val repository: FavsRepository
) : ViewModel() {
    // Mis propiedades reactivas: Listas de favoritos y si esta cargando...
    val favsLiveData = MutableLiveData<List<Film>>()
    val isLoadingLiveData = MutableLiveData<Boolean>()

    fun onViewCreated() {
        viewModelScope.launch {
            isLoadingLiveData.postValue(true)
            favsLiveData.postValue(repository.get())
            isLoadingLiveData.postValue(false)
        }
    }
}