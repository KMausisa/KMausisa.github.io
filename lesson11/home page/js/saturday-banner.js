const date2 = new Date();
const day = date2.getDay();

if (day == 5) {
    let banner = document.getElementById('banner');
    banner.textContent = 'Saturday = Preston Pancakes in the Park! 9:00a.m. Saturday at the city park.';
    banner.setAttribute('style', 'display: block;');
}
