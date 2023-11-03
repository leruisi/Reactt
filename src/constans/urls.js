
const baseURL = "https://rickandmortyapi.com/api"

const characters= '/character'
const episodes= '/episode'

const url ={
    episodes,
    characters:{
        byIds:(ids)=>`{/character}/${ids}`
    }
}
export {
    baseURL,
    url
}

