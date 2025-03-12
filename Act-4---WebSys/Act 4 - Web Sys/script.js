function submitForm() {
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const middleInitial = document.getElementById('middleInitial').value;
    const lastName = document.getElementById('lastName').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipCode = document.getElementById('zipCode').value;
    const sports = [];
    if (document.getElementById('basketball').checked) sports.push('Basketball');
    if (document.getElementById('football').checked) sports.push('Football');
    if (document.getElementById('hockey').checked) sports.push('Hockey');
    const year = document.querySelector('input[name="year"]:checked').value;
    const favoriteFood = document.getElementById('favoriteFood').value;
    const comments = document.getElementById('comments').value;

    // Display form values (for demonstration purposes)
    console.log('First Name:', firstName);
    console.log('Middle Initial:', middleInitial);
    console.log('Last Name:', lastName);
    console.log('City:', city);
    console.log('State:', state);
    console.log('Zip Code:', zipCode);
    console.log('Sports:', sports.join(', '));
    console.log('Year:', year);
    console.log('Favorite Food:', favoriteFood);
    console.log('Comments:', comments);

    // Display form values on the webpage
    document.getElementById('displayFirstName').innerText = firstName;
    document.getElementById('displayMiddleInitial').innerText = middleInitial;
    document.getElementById('displayLastName').innerText = lastName;
    document.getElementById('displayCity').innerText = city;
    document.getElementById('displayState').innerText = state;
    document.getElementById('displayZipCode').innerText = zipCode;
    document.getElementById('displaySports').innerText = sports.join(', ');
    document.getElementById('displayYear').innerText = year;
    document.getElementById('displayFavoriteFood').innerText = favoriteFood;
    document.getElementById('displayComments').innerText = comments;

    // You can add more logic here to handle the form submission, such as sending the data to a server
}