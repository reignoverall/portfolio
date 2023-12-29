import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="text-lg font-semibold">
        Wanna Reach Out ? Contact Info Here
      </p>
      <Link to="/contact" className="btn red">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
