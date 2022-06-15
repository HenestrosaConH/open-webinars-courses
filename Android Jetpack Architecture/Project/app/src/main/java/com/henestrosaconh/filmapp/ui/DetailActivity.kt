package com.henestrosaconh.filmapp.ui

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import com.henestrosaconh.filmapp.R
import com.henestrosaconh.filmapp.ui.DetailFragment.Companion.EXTRA
import com.henestrosaconh.filmapp.models.Film
import com.henestrosaconh.filmapp.databinding.ActivityDetailBinding
import dagger.hilt.android.AndroidEntryPoint

@AndroidEntryPoint
class DetailActivity : AppCompatActivity() {

    private lateinit var binding: ActivityDetailBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityDetailBinding.inflate(layoutInflater)
        setContentView(binding.root)

        getExtras()?.let {
            setFragment(DetailFragment.newInstance(it))
        } ?: finish()
    }

    /**
     * Gets a film as a parcelable by an intent
      */
    private fun getExtras(): Film? = intent.extras?.getParcelable(EXTRA)

    private fun setFragment(fragmentToChange: Fragment) {
        supportFragmentManager.beginTransaction()
            .replace(R.id.layoutFragmentHolder, fragmentToChange)
            .commit()
    }
}