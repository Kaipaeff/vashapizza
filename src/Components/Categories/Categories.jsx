import React from "react"
import uniqid from 'uniqid'

function Categories() {

  const [activeIndex, setActiveIndex] = React.useState(0)

  const categories = ['Все', 'Мясная', 'Куриная', 'Грибная', 'Сырная', 'Овощная']


  const handleCategory = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((el, index) => 
          <li 
            key={uniqid()}
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
