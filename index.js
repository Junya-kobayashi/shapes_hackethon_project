$(function () {
  $('#fullpage').fullpage();

  const anim = lottie.loadAnimation({
    container: document.getElementById('bodymovin-wrapper'),
    render: 'svg',
    loop: true,
    path: 'loading.json'
  })
  anim.play();
});