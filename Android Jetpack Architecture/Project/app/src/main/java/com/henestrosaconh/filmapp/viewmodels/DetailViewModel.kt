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
 * ViewModel for the [DetailFragment]
 */
@HiltViewModel
class DetailViewModel
@Inject constructor(
    private val favsRepository: FavsRepository
) : ViewModel() {

    val isFavLiveData = MutableLiveData<Boolean>()

    fun onViewCreated(film: Film?) {
        film?.let {
            viewModelScope.launch {
                val exist = favsRepository.exist(film)
                isFavLiveData.postValue(exist)
            }
        }
    }

    fun onClickFav(film: Film) {
        viewModelScope.launch {
            if (favsRepository.exist(film)) {
                favsRepository.remove(film)
                isFavLiveData.postValue(false)
            } else {
                favsRepository.save(film)
                isFavLiveData.postValue(true)
            }
        }
    }

}