import Link from "next/link";
import Navbar from "../styles/src/components/Navbar";

const indexpage = () => {
  return (
    <div>
      <Navbar />
      <h1>Blog</h1>

      <div className="mx-auto col-md-8">
        <h3 className="text-danger">
          <i>Blog comment</i>
        </h3>
        <p>
          onsectetur adipiscing elit. donec ipsum leo, triste je triste non,
          volutpat id eros. suspendre finibus gravida dolor, sit amet faucibus
          dui tempus tincidunt. Ethiam venimeux congue diam, un vehicula varius
          fair sit amet. donec sed pulvinar Libération. Etiam nisl dolor,
          gravida non dolor nca, dignissim efficitur mi. Integer nisl tortor,
          toujours à orci at, iaculis molestie ante. Présent la femme enceinte
          est. Praesent non sapien molestie ex fermentum vestibule. Cras
          molestie sans libero, et efficitur eros blandit vitae. Vestibulum vel
          bibendum risus, je viens de sodales. Site temporaire de Nullam amet
          tellus ac imperdiet. Donec eget tempus mi.
        </p>

        <textarea
          className="form-control"
          placeholder="Ecrivez votre commentaire"
        ></textarea>
        <button className="btn btn-primary">Publier</button>
      </div>
    </div>
  );
};

export default indexpage;
