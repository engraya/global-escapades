import React from 'react'
import CollectionForm from '../components/CollectionForm'
import { json } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function CreateCollection() {
  const navigate = useNavigate();

  const onAddCollectionHandler = (collectionData) => {
    const realTimeDbUrl = 'https://react-collections-66c79-default-rtdb.firebaseio.com/collections.json'

    fetch(realTimeDbUrl,
       {
        method : 'POST',
        body : JSON.stringify(collectionData),
        headers : {
          'Content-Type' : 'application/json'
        }
       }).then(() => {
        navigate('/all-meetups');
       })
  }

  return (
    <div>
    <h3 className='text-center'>Collection Form</h3>
      <CollectionForm onAddCollection={onAddCollectionHandler}/>
    </div>
  )
}

export default CreateCollection
