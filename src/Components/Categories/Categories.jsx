import React from "react"

function Categories() {

  const [activeIndex, setActiveIndex] = React.useState(0)

  const categories = ['Все', 'Мясная', 'Куриная', 'Грибная', 'Сырная', 'Овощная']


  const handleCategory = (index) => {
    setActiveIndex(index)
  }


  // <li onClick={() => handleCategory(0)} className={activeIndex === 0 ? 'active' : ''}>Все</li>

  return (
    <div className="categories">
      <ul>
        {categories.map((el, index) => 
          <li 
            key={index} 
            onClick={() => handleCategory(index)} 
            className={activeIndex === index ? 'active' : ''}
            >
              {el}
          </li>
        )}
      </ul>
    </div>
  )
}

export default Categories
