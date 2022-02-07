import React, { useState } from "react";

function AddListing({onAddListing}) {

    const [newListing, setNewListing] = useState({
        description: "",
        image: "",
        location: ""
    })

    const handleListingChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setNewListing({
            ...newListing,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:6001/listings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newListing)
        })
        .then(r => r.json())
        .then(addedListing => onAddListing(addedListing))
    }

    return (
        <div className="adding">
            <h3>Add a Listing</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    placeholder="item description"
                    value={newListing.description}
                    onChange={handleListingChange}
                />
                <input
                    type="text"
                    name="image"
                    placeholder="item image URL"
                    value={newListing.image}
                    onChange={handleListingChange}
                />
                <input
                    type="text"
                    name="location"
                    placeholder="item location"
                    value={newListing.location}
                    onChange={handleListingChange}
                />
                <button type="submit">Add New Item</button>
            </form>
        </div>
    )

}

export default AddListing