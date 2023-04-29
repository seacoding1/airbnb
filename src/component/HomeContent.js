const HomeContent = ({item}) => {

    const {url, address, duration, cost, img, title} = item;

    return (
       <li>
          <a href={url}>
                <img src={img} alt={title}/>
                <div>
                    <p>{address}</p>
                    <p>{duration}</p>
                    <p>{cost}</p>
                </div>
            </a>
       </li>
    )
}

export default HomeContent;