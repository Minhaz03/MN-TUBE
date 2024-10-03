// 1- Fetch, Load and Show categories on html

//  create loadCategories
const loadCategories = () => {
    // fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

// create displayCategories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories');
    // add the data in html
    categories.forEach( (item) => {
        // create a button
        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category;

        // add button to catagory container
        categoryContainer.append(button);
    })
};

loadCategories();