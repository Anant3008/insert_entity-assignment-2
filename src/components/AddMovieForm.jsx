import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function AddMovieForm({ addMovie }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    director: '',
    genre: '',
    releaseYear: '',
    synopsis: '',
    posterUrl: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(formData);         // Add new movie to state
    navigate('/');              // Go back to dashboard
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Add a New Movie</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="director" placeholder="Director" value={formData.director} onChange={handleChange} className="w-full p-2 border rounded" />
        <select name="genre" value={formData.genre} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
        <input type="number" name="releaseYear" placeholder="Release Year" value={formData.releaseYear} onChange={handleChange} className="w-full p-2 border rounded" />
        <textarea name="synopsis" placeholder="Synopsis" value={formData.synopsis} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="url" name="posterUrl" placeholder="Poster Image URL" value={formData.posterUrl} onChange={handleChange} className="w-full p-2 border rounded" />

        <div className="flex justify-between">
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Submit</button>
          <button type="button" onClick={() => navigate('/')} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddMovieForm;
