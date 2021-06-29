# Recipe-App

this is an app based on the spoonacular api : https://spoonacular.com/food-api

This app is created in react native , you can see a list of recipe and click on theme to know which ingredients is needed ... 

## Installation

Use `git clone` to install this app.

```bash
git clone https://github.com/YassHouays/Recipe-App/
npm install
```


## Configuration

this API is limited to 150 requests per day, you will find in the project a file containing data already built if the API is no longer available
In 'detailRecipe.js' comment those lines if the api doesn't work 
```bash
axios.get(`https://api.spoonacular.com/recipes/${this.props.route.params.item.id}/information?apiKey=bbf788cda4f34fcc8b58403847622e97`)
      .then(res => {
        const recette = res.data;
        this.setState({ recette });
        console.log(recette);
      })
```
and use the line below 
```bash
    this.setState({recette: data})

```
(I know that we see my API key in the code, but knowing that it is not a big application but rather a test, I left it like that) 

## Usage

```bash
expo start
```
