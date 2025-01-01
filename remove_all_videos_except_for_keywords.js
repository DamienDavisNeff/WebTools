// This script removes ALL videos from a youtube's channel page apart from a keyword inserted by the user.
// NOTE: The videos are removed on the CLIENT only
// NOTE: The videos may return if the client refreshes in anyway, including resizing the page

const keyword = prompt(); 
document.querySelectorAll("ytd-rich-item-renderer").forEach(
	item => { 
		videoTitle = item.querySelector("#video-title-link").title;
		if(!videoTitle.includes(keyword)) item.remove();
	}
);