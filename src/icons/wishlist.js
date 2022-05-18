const Wishlist = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5009 0.917236C16.3749 0.934751 15.2734 1.24909 14.3077 1.82851C13.342 2.40793 12.5463 3.23191 12.0009 4.21724C11.4556 3.23191 10.6599 2.40793 9.69417 1.82851C8.72848 1.24909 7.62698 0.934751 6.50094 0.917236C4.70588 0.995227 3.01464 1.78049 1.79672 3.10147C0.578794 4.42245 -0.0668157 6.17176 0.000934853 7.96724C0.000934853 14.7422 10.9569 22.5672 11.4229 22.8992L12.0009 23.3082L12.5789 22.8992C13.0449 22.5692 24.0009 14.7422 24.0009 7.96724C24.0687 6.17176 23.4231 4.42245 22.2052 3.10147C20.9872 1.78049 19.296 0.995227 17.5009 0.917236Z"
        fill={props.primaryColor || "black"}
      />
    </svg>
  );
};
export default Wishlist;
