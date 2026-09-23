const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY

const buscarComidas = async (quantidade) => {
    const resposta = await fetch(`https://api.spoonacular.com/recipes/random?number=${quantidade}&apiKey=${apiKey}`)
    const dados = await resposta.json()
    return dados
}

export default buscarComidas