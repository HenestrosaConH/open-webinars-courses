package com.henestrosaconh.uiswithjetpackcompose

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import com.henestrosaconh.uiswithjetpackcompose.data.DataProvider
import com.henestrosaconh.uiswithjetpackcompose.ui.theme.UisWithJetpackComposeTheme

class DogActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            DogList(dogs = DataProvider.dogList)
        }
    }

    @Preview(
        showBackground = true,
        showSystemUi = true
    )
    @Composable
    fun PreviewDog() {
        UisWithJetpackComposeTheme {
            DogList(dogs = DataProvider.dogList)
        }
    }
}