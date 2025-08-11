import img1 from '../../assets/icons/dress.svg';
import img2 from '../../assets/icons/coat.svg';
import img3 from '../../assets/icons/glasses.svg';
import img4 from '../../assets/icons/shorts.svg';
import img5 from '../../assets/icons/tee.svg';
import img6 from '../../assets/icons/jacket.svg';
import img7 from '../../assets/icons/watch.svg';
import img8 from '../../assets/icons/hat.svg';


function CategorySeasonItem() {
  const category = [
    { img: img1, name: "DRESS & FROCK", qty: 53 },
    { img: img2, name: "WINTER WEAR", qty: 48 },
    { img: img3, name: "GLASSES & LENCE", qty: 76 },
    { img: img4, name: "SHORTS & JEANS", qty: 63 },
    { img: img5, name: "T-SHIRT", qty: 47 },
    { img: img6, name: "JACKET", qty: 59 },
    { img: img7, name: "WATCH", qty: 93 },
    { img: img8, name: "HAT & CAPS", qty: 30 },
  ]
  return (
    <div className='w-full gap-4 flex items-center overflow-x-scroll scroll-smooth custom-scrollbar my-10 snap-x snap-mandatory'>
      {category.map((items, index) => {
        return (
          <div key={index} className='flex gap-4 cursor-pointer items-center rounded-md w-90 sm:w-70 
          md:w-77 lg:w-79 border-1 shrink-0 border-gray-200 p-2 snap-start'>
            <img className='p-2 rounded-md h-15 bg-gray-200' src={items.img} alt={items.name} />
              <div className='flex flex-col gap-3 justify-center w-full'>
                <div className='flex items-center justify-between w-full'>
                  <p className='text-sm'>{items.name}</p>
                  <p>{`(${items.qty})`}</p>
                </div>
                <p className='font-bold text-md text-[pink]'>Show all</p>
              </div>
          </div>
        )
      })}
    </div>
  )
}

export default CategorySeasonItem