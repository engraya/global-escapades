import React from 'react'
import { useRef } from 'react'
function CollectionForm(props) {

    const titleValue = useRef();
    const imageValue = useRef();
    const continentValue = useRef();
    const countryValue = useRef();
    const linkValue = useRef();
    const descriptionValue = useRef();


    const formSubmitHandler = (e) => {
        e.preventDefault()

        const enteredTitle = titleValue.current.value;
        const enteredImage = imageValue.current.value;
        const enteredContinent = continentValue.current.value;
        const enteredCountry = countryValue.current.value;
        const enteredLink = countryValue.current.value;
        const enteredDescription = descriptionValue.current.value;

        const collectionDataInfo = {
            title : enteredTitle,
            image: enteredImage,
            continent : enteredContinent,
            country : enteredCountry,
            link : enteredLink,
            description : enteredDescription
        };

        props.onAddCollection(collectionDataInfo);

    }

  return (
    <div>
    <form className="max-w-lg mx-auto" onSubmit={formSubmitHandler}>
  <div className="mb-3">
    <label htmlFor="title" className="block mb-2 text-sm font-medium dark:text-white">Destination Title</label>
    <input type="text" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required ref={titleValue}/>
  </div>
  <div className="mb-3">
    <label htmlFor="image" className="block mb-2 text-sm font-medium dark:text-white">Destination Image Url</label>
    <input type="url" id="image" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required ref={imageValue}/>
  </div>
  <div className="mb-3">
    <label htmlFor="continent" className="block mb-2 text-sm font-medium dark:text-white">Destination Continent</label>
    <input type="continent" id="continent" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required ref={continentValue} />
  </div>
  <div className="mb-3">
    <label htmlFor="country" className="block mb-2 text-sm font-medium dark:text-white">Destination Country</label>
    <input type="country" id="country" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required ref={countryValue}/>
  </div>
  <div className="mb-3">
    <label htmlFor="link" className="block mb-2 text-sm font-medium dark:text-white">Destination Info Link</label>
    <input type="url" id="link" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required ref={linkValue}/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="block mb-2 text-sm font-medium dark:text-white">Destination Description</label>
    <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required ref={descriptionValue}></textarea>
  </div>
  <button type="submit" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">New Destination</button>
</form>

    </div>
  )
}

export default CollectionForm
