function share(e) {
    console.log('event', e)
  if (navigator.share) {
      console.log('nav ok')
    navigator
      .share({
        title: "Web Fundamentals",
        text: "Check out Web Fundamentals — it rocks!",
        url: "https://developers.google.com/web"
      })
      .then(() => alert("Successful share"))
      .catch(error => console.log("Error sharing", error));
  }
}

const shareBtn = document.getElementById('share')
shareBtn.addEventListener('click', share)
