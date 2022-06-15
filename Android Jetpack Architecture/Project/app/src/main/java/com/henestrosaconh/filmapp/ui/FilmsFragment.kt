package com.henestrosaconh.filmapp.ui

import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.core.view.isVisible
import androidx.fragment.app.Fragment
import androidx.fragment.app.activityViewModels
import androidx.recyclerview.widget.LinearLayoutManager
import com.henestrosaconh.filmapp.databinding.FragmentFilmsBinding
import com.henestrosaconh.filmapp.ui.DetailFragment.Companion.EXTRA
import com.henestrosaconh.filmapp.viewmodels.FilmsViewModel
import dagger.hilt.android.AndroidEntryPoint

@AndroidEntryPoint
class FilmsFragment : Fragment() {

    // Write-only
    private var _binding: FragmentFilmsBinding? = null
    // Read-only
    private val binding get() = _binding!!

    /*
     * activityViewModels() binds the activity's lifecycle to the view model.
     * To bind it to the fragment's lifecycle, we would use viewModels().
     */
    private val viewModel: FilmsViewModel by activityViewModels()

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentFilmsBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        viewModel.onViewCreated()
        viewModel.filmsLiveData.observe(viewLifecycleOwner) { films ->
            with(binding.recyclerNews) {
                layoutManager = LinearLayoutManager(context, LinearLayoutManager.VERTICAL, false)
                adapter = FilmsAdapter(films) {
                    val intentDetail = Intent(context, DetailActivity::class.java)
                    intentDetail.putExtra(EXTRA, it)
                    startActivity(intentDetail)
                }
            }
        }

        viewModel.isLoadingLiveData.observe(viewLifecycleOwner) { isLoading ->
            binding.pbLoading.isVisible = isLoading
            binding.recyclerNews.isVisible = !isLoading
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}