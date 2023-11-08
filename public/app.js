document.getElementById('searchButton').addEventListener('click', function () {
    const searchInput = document.getElementById('searchInput').value;
    if (searchInput) {
      const url = `https://www.google.com/search?q=${encodeURIComponent(searchInput)}`;
      window.location.href = url;
    }
  });
  