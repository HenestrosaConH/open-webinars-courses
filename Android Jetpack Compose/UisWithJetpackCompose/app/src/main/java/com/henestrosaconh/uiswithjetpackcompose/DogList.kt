package com.henestrosaconh.uiswithjetpackcompose

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.runtime.Composable
import androidx.compose.ui.unit.dp
import com.henestrosaconh.uiswithjetpackcompose.data.Dog

@Composable
fun DogList(dogs: List<Dog>) {
    LazyColumn(
        contentPadding = PaddingValues(horizontal = 16.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        items(dogs) {
            dog -> DogItem(dog = dog)
        }
    }
}