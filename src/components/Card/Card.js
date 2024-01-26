import '../../styles/vars.css'
import './Card.css'

import Image1 from '../../Assets/Playlists/1.jpeg'
import Image2 from '../../Assets/Playlists/2.png'
import Image3 from '../../Assets/Playlists/3.jpeg'
import Image4 from '../../Assets/Playlists/4.jpeg'
import Image5 from '../../Assets/Playlists/5.jpeg'
import Image6 from '../../Assets/Playlists/6.jpeg'
import Image7 from '../../Assets/Playlists/7.jpeg'
import Image8 from '../../Assets/Playlists/8.jpeg'
import Image9 from '../../Assets/Playlists/9.jpeg'
import Image10 from '../../Assets/Playlists/10.jpeg'
import Image11 from '../../Assets/Playlists/11.jpeg'
import Image12 from '../../Assets/Playlists/12.jpeg'
import Image13 from '../../Assets/Playlists/13.jpeg'
import Image14 from '../../Assets/Playlists/14.jpeg'
import Image15 from '../../Assets/Playlists/15.jpeg'

const Card = () => {
  const cardsContent = [
    {
      title: "Boas festas",
      image: Image1,
      class: "card1"
    },
    {
      title: "Feitos para você",
      image: Image2,
      class: "card2"
    },
    {
      title: "Lançamentos",
      image: Image3,
      class: "card3"
    },
    {
      title: "Creators",
      image: Image4,
      class: "card4"
    },
    {
      title: "Para treinar",
      image: Image5,
      class: "card5"
    },
    {
      title: "Podcasts",
      image: Image6,
      class: "card6"
    },
    {
      title: "Sertanejo",
      image: Image7,
      class: "card7"
    },
    {
      title: "Samba e pagode",
      image: Image8,
      class: "card8"
    },
    {
      title: "Funk",
      image: Image9,
      class: "card9"
    },
    {
      title: "MPB",
      image: Image10,
      class: "card10"
    },
    {
      title: "Rock",
      image: Image11,
      class: "card11"
    },
    {
      title: "Hip Hop",
      image: Image12,
      class: "card12"
    },
    {
      title: "Indie",
      image: Image13,
      class: "card13"
    },
    {
      title: "Relax",
      image: Image14,
      class: "card14"
    },
    {
      title: "Música Latina",
      image: Image15,
      class: "card15"
    },
  ]

  return (
    <>
      {cardsContent.map(function(data)  {
        return (
          <a href="" class="cards">
            <div className={`cards ${data.class}`}>
              <img src={data.image} alt="" />
              <span>{data.title}</span>
            </div>
           </a>
        )
     })}
   </>
  );
}

export default Card;