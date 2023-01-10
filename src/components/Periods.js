import Container from "react-bootstrap/Container";
import Masonry from "react-masonry-css";

import BaseCard from "./BaseCard";
import PageTransition from "./PageTransition";
const Periods = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <PageTransition>
      <Container>
        <div className="my-5">
          <h1 className="display-2 text-center text-white">
            Classical Music Through Time
          </h1>
          <p className="text-white font-weight-bold">
            Each historical time period has brought composers that have
            trascended the test of time. Let's explore the greatest composers of
            each era as well as all their known works
          </p>
        </div>

        <div className="my-5">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            <BaseCard
              name="Medieval"
              img_path={require("../img/allegory.jpg")}
              page_path="Medieval"
              years="c500 - 1400"
            />
            <BaseCard
              name="Renaissance"
              img_path={require("../img/mona_lisa.jpg")}
              page_path="Renaissance"
              years="1400 - 1600"
            />
            <BaseCard
              name="Baroque"
              img_path={require("../img/las_meninas.jpg")}
              page_path="Baroque"
              years="1600 - 1750"
            />
            <BaseCard
              name="Classical"
              img_path={require("../img/death_of_marat.jpg")}
              page_path="Classical"
              years="1750 - 1830"
            />
            <BaseCard
              name="Early Romantic"
              img_path={require("../img/goya.jpg")}
              page_path="Early Romantic"
              years=" 1810 - 1850"
            />
            <BaseCard
              name="Romantic"
              img_path={require("../img/wanderer.jpg")}
              page_path="Romantic"
              years="1810 - 1920"
            />
            <BaseCard
              name="Late Romantic"
              img_path={require("../img/witches_sabbath.jpg")}
              page_path="Late Romantic"
              years="1851 - 1920 "
            />
            <BaseCard
              name="20th Century"
              img_path={require("../img/blue.jpg")}
              page_path="20th Century"
              years="1901 - 2000"
            />
            <BaseCard
              name="Post-War"
              img_path={require("../img/weeping_lady.jpg")}
              page_path="Post-War"
              years="1945 - 2000"
            />
            <BaseCard
              name="21st Century"
              img_path={require("../img/guenther_forg.jpg")}
              page_path="21st Century"
              years="2000 - current"
            />
          </Masonry>
        </div>
      </Container>
    </PageTransition>
  );
};

export default Periods;
