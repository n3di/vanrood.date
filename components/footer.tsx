import dayjs from "dayjs";

function Footer() {
  return (
    <footer className="mt-4 font-normal font-['Noto_Sans'] text-[#b7cedd] drop-shadow-[0_0_1px_rgba(0,0,0,1)]">
      <strong>
        <span className="year">&copy;{dayjs().year()} </span>
        <a href="https://twitch.tv/vanrood">vanRooD Date</a>
      </strong>
      <div className="flex justify-center items-center">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="heart"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="h-[1em] text-[#ff0000] animate-heart mr-2"
        >
          <path
            fill="currentColor"
            d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
            className=""
          ></path>
        </svg>
        <span>
          Made by <a href="https://nedi.me">Nedi</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
