package com.henestrosaconh.uiswithjetpackcompose

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.henestrosaconh.uiswithjetpackcompose.ui.theme.UisWithJetpackComposeTheme

class CodeLab : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            /*
            // Default
            UisWithJetpackComposeTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colors.background
                ) {
                    GreetingText("Android")
                }
            }
            */
            MainScreenCodeLab()
        }
    }
}

/**
 * Reusable component
 */
@Composable
fun MySquare(color: Color) {
    Surface(
        color = color,
        modifier = Modifier.size(80.dp)
    ) {}
}

@Composable
fun MainScreenCodeLab() {
    Surface(
        color = Color.LightGray,
        modifier = Modifier.fillMaxSize()
    ) {
        CardItem()
    }

    /*
    // remember stores the value of a variable
    // in case it is called to be recomposed
    val students = remember {
        mutableStateListOf("Miguel", "Esther")
    }

    val newStudentName = remember {
        mutableStateOf("")
    }

    Surface(
        color = Color.LightGray,
        modifier = Modifier.fillMaxSize()
    ) {
        StudentList(
            students,
            { students.add(newStudentName.value) },
            newStudentName.value,
            { newStudentName.value }
        )

        // MessageList(messages = listOf("Hi", "Bye"))
    }

    // ------------------------------------------------

    Surface(
        color = Color.LightGray,
        modifier = Modifier.fillMaxSize()
    ) {
        Surface(
            color = Color.Green,
            modifier = Modifier.wrapContentSize(Alignment.TopEnd)
        ) {
            Text(
                text = "Hi!",
                style = MaterialTheme.typography.h5,
                modifier = Modifier
                    .wrapContentSize()
                    .padding(all = 16.dp),
            )
        }
    }

    // ------------------------------------------------

    Surface(
        color = Color.LightGray,
        modifier = Modifier.fillMaxSize()
    ) {
        // Row { or Row() {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.Center,
        ) {
            MySquare(color = Color.Red)
            MySquare(color = Color.Green)
        }

        // Column { or Column() {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Top,
        ) {
            MySquare(color = Color.Red)
            MySquare(color = Color.Green)
        }
    }
    */
}

@Composable
fun MessageInfo(message: String) {
    Text(text = message)
}

@Composable
fun StudentList(
    students: List<String>,
    onButtonClick: () -> Unit,
    studentName: String,
    onStudentNameChanged: (String) -> Unit
) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        for (student in students) {
            Text(text = student)
        }

        OutlinedTextField(
            value = studentName,
            onValueChange = onStudentNameChanged,
            label = { Text("Name") },
            singleLine = true,
            keyboardOptions =
                KeyboardOptions(keyboardType = KeyboardType.Text)
        )

        Button(onClick = onButtonClick) {
            Text(text = "Add")
        }
    }
}

@Composable
fun MessageList(messages: List<String>) {
    // LazyColumn and LazyRow are similar to RecyclerViews
    LazyColumn(
        modifier = Modifier.fillMaxSize()
    ) {
        items(messages) {
                message -> MessageInfo(message = message)
        }
    }
}

@Composable
fun CardItem() {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .wrapContentSize(),
        elevation = 10.dp
    ) {
        Column(
            Modifier.padding(10.dp)
        ) {
            Text(text = "Hello")
            Text(text = "This is a card test")
        }
    }
}

@Composable
fun GreetingButton(name: String) {
    Button(onClick = {}) {
        GreetingText(name = name)
    }
}

@Composable
fun GreetingText(name: String) {
    /*
    // A few examples of Text

    Text(
        text = "Hello $name!",
        modifier = Modifier
            .width(80.dp)
            .height(220.dp),
        fontSize = 30.sp,
        softWrap = true,
    )

    Text(
        text = "Hello $name!",
        modifier = Modifier
            .fillMaxSize(), // .fillMaxHeight() and .fillMaxWidth()
        fontSize = 30.sp,
        softWrap = false,
    )

    Text(
        text = "Hello $name!",
        modifier = Modifier
            .fillMaxWidth(0.5f),
    )

    // It's important to note that if the padding method is
    // applied before the clickable method, the padding and
    // margin zones will be clickable as well.
    Text(
        text = "Hello $name!",
        modifier = Modifier
            .padding(all = 16.dp),
        style = TextStyle(
            color = Color.Red,
            fontWeight = FontWeight.Bold
        )
    )
    */

    // If we want to apply existing styles components, we
    // indicate it with the parameter style. It can be overridden.
    val shape = CircleShape

    Text(
        text = "Hello $name!",
        modifier = Modifier
            .fillMaxWidth()
            .border(2.dp, MaterialTheme.colors.secondary, shape)
            .background(MaterialTheme.colors.primary, shape)
            .padding(all = 16.dp),
        style = MaterialTheme.typography.button,
        color = Color.White,
        textAlign = TextAlign.Center
    )
}

@Preview(
    showBackground = true,
    showSystemUi = true
)
@Composable
fun DefaultPreview() {
    UisWithJetpackComposeTheme {
        // GreetingText("Android")
        MainScreenCodeLab()
    }
}