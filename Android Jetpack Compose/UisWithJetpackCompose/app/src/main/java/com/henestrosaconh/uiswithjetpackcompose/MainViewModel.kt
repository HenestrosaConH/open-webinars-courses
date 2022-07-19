package com.henestrosaconh.uiswithjetpackcompose

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class MainViewModel : ViewModel() {
    val textFieldState = MutableLiveData("")

    fun onTextFieldChange(newText: String) {
        textFieldState.value = newText
    }
}