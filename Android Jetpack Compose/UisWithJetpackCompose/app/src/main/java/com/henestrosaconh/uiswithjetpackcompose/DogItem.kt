package com.henestrosaconh.uiswithjetpackcompose

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.Card
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp
import coil.annotation.ExperimentalCoilApi
import coil.compose.rememberImagePainter
import com.henestrosaconh.uiswithjetpackcompose.data.Dog

@OptIn(ExperimentalCoilApi::class)
@Composable
fun DogItem(dog: Dog) {
    Card(
        Modifier.fillMaxSize(),
        elevation = 10.dp
    ) {
        Row(
            Modifier.fillMaxSize()
        ) {
            Image(
                painter = rememberImagePainter(dog.image),
                contentDescription = "${dog.breed} photo",
                modifier = Modifier.size(100.dp),
                contentScale = ContentScale.Crop
            )

            Column(
                Modifier.padding(start = 20.dp)
            ) {
                Text(
                    text = dog.name,
                    style = MaterialTheme.typography.h4
                )
                Text(
                    text = "Breed: ${dog.breed}",
                    style = MaterialTheme.typography.body2
                )
                Text(
                    text = "Años: ${dog.name}",
                    style = MaterialTheme.typography.body2
                )
            }
        }
    }
}