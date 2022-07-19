package com.henestrosaconh.uiswithjetpackcompose

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material.Surface
import androidx.compose.material.Text
import androidx.compose.material.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.livedata.observeAsState
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import com.henestrosaconh.uiswithjetpackcompose.ui.theme.UisWithJetpackComposeTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MainScreen()
        }
    }
}

@Composable
fun MainScreen(viewModel: MainViewModel = MainViewModel()) {
    val nameState = viewModel.textFieldState.observeAsState("")

    Surface(
        color = Color.LightGray,
        modifier = Modifier.fillMaxSize()
    ) {
        MainLayout(name = nameState.value) {
            newName -> viewModel.onTextFieldChange(newName)
        }
    }
}

@Composable
fun MainLayout(
    name: String,
    onTextFieldChange: (String) -> Unit
) {
    Column(
        modifier = Modifier.fillMaxWidth()
    ) {
        TextField(
            value = name,
            onValueChange = onTextFieldChange
        )

        Text(text = name)
    }
}

@Preview(
    showBackground = true,
    showSystemUi = true
)
@Composable
fun Preview() {
    UisWithJetpackComposeTheme {
        MainScreen()
    }
}