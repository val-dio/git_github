  function searchYouTube() {
    const query = document.getElementById('searchInput').value.trim();
    if (!query) {
      alert("Please enter a song name.");
      return;
    }

    const apiKey = 'AIzaSyDgZrIh9I0DH1AhGlrL0OzXI7sMBKmZBfU'; // Replace with your actual API key
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=6&key=${apiKey}`;

    document.getElementById('loadingSpinner').style.display = 'block';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const videosContainer = document.querySelector('.videos');
        videosContainer.innerHTML = ''; // Clear old results

        if (data.items.length === 0) {
          videosContainer.innerHTML = '<p style="padding: 20px; text-align:center;">No results found.</p>';
        } else {
          data.items.forEach(item => {
            const videoId = item.id.videoId;
            const thumbnail = item.snippet.thumbnails.medium.url;

            const videoItem = document.createElement('div');
            videoItem.className = 'video-item';
            videoItem.innerHTML = `<img src="${thumbnail}" alt="${item.snippet.title}">`;

            videoItem.addEventListener('click', () => {
              changeVideo(videoId);
            });

            videosContainer.appendChild(videoItem);
          });
        }
      })
      .catch(error => {
        console.error('Error fetching YouTube videos:', error);
        alert("Something went wrong. Try again!");
      })
      .finally(() => {
        document.getElementById('loadingSpinner').style.display = 'none';
      });
  }

  function changeVideo(videoId) {
    document.getElementById('mainVideo').src = 'https://www.youtube.com/embed/' + videoId;
  }