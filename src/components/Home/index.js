import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap"
import { useNavigate } from "react-router-dom";

import './index.css'


const Home = () => {
  let navigate = useNavigate()
  return (
    <div className="home-cards">
      <Card>
        <CardImg
          className="card-img"
          alt="Card image cap"
          src="https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/a/ea949741-af94-47ae-a577-2953c69ab71d.jpg?1582068686"
          top
          width="100%"
          onClick={() => navigate('/image-guess')}
        />
        <CardBody>
          <CardTitle tag="h5">
            Guess The Commander
          </CardTitle>
          <CardText>
            Can you guess the commander based off of its blurred image?
          </CardText>
          <CardText>
            <small className="text-muted">
              Last played 3 mins ago
            </small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  )
}


export default Home