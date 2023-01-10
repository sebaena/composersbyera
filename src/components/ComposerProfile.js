import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";

import ComposerModal from "./ComposerModal";

const ComposerProfile = ({ id }) => {
  const [composerData, setData] = useState([]);

  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    if (id) {
      const url = `https://api.openopus.org//work/list/composer/${id}/genre/all.json`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });

      setModalShow(true);
    }
  }, [id]);

  return (
    <Container>
      {composerData.composer && (
        <ComposerModal
          show={modalShow}
          data={composerData}
          onHide={() => setModalShow(false)}
        />
      )}
    </Container>
  );
};

export default ComposerProfile;
