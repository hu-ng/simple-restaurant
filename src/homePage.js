import { createElement } from "./elementActions"

const createHomePage = () => {
  const parent = document.getElementById("content")
  const content = document.createElement("div")
  content.setAttribute("class", "page-content")
	
	// Cover image
  const coverImg = createElement(
    {
			element: "img",
			attributes: { 
				"src":"./static/img/restaurant.jpg",
				"class":"cover-img"
			}
		}
	)
	
	// Title Card
	const titleCard = createElement(
		{
			element:"div",
			attributes: {"class":"centered border rounded p-3 title-card"}
		}
	)

	// Restaurant names
	const restaurantName = createElement(
		{
			element: "h1",
			attributes: {
				"class":"title-color"
			},
			content: createElement(
				{
					element: "strong",
					content: createElement(
						{
							element: "u",
							content: "Tyler's Bistro"
						}
					)
				}
			)
		}
	)


	const description = createElement(
		{
			element:"h2",
			attributes:{"class":"title-color"},
			content: "Asian Fusion Cuisine"
		}
	)

	const blurb = createElement(
		{
			element: "p",
		  attributes: {"class":"title-color"},
			content: createElement(
			{
				element: "em",
				content: "Rated #1 on Yelp and TripAdvisor"}
		)}
	)

	titleCard.appendChild(restaurantName)
	titleCard.appendChild(description)
	titleCard.appendChild(blurb)

	content.appendChild(coverImg)
  content.appendChild(titleCard)
  
  parent.appendChild(content)
}

export { createHomePage }