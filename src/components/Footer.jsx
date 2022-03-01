import React from "react";

function Footer(props) {
  return (
    <footer className="footer mt-auto py-3 bg-light fixed-bottom border-top">
      <div className="container row mt-2 position-relative start-50 translate-middle justify-content-center">
          <span className="text-muted col-6 ">
            Created by Robin Hartmann. No Backend connected. All changes will revert on refresh.
          </span>
          <div className="col-5 ms">
            <i className="fa fa-github ms-5" aria-hidden="true"></i>
            <a className="ms-2" href="https://github.com/roXaKo">
              roXaKo
            </a>
            <i className="fa fa-twitter  ms-4" aria-hidden="true"></i>
            <a className="ms-2" href="https://twitter.com/roxakoco">
              @roXaKoco
            </a>
            <i className="fa fa-envelope-o  ms-4" aria-hidden="true"></i>
            <span className="ms-2">arjunahartmann@gmail.com</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
