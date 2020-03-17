export interface State {
    pokemonName: string,
    imgUrl: string,
    pokemonUrl: string,
    pokemonIndex: number,
    showModal: boolean,
    types: string[],
    description: string,
    height: string,
    weight: string,
    eggGroups: string,
    abilities: string[],
    evs: string,
    hatchSteps: number,
    catchRate: number,
    stats: {
        hp: number,
        attack: number,
        defense: number,
        speed: number,
        specialAttack: number,
        specialDefense: number
    }
}

export interface SpeciesResults {
    flavor_text_entries: Array<{
        flavor_text: string,
        language: {
            name: string
        }
    }>,
    capture_rate: number
    egg_groups: Array<{
        name: string
    }>,
    hatch_counter: number
}

export interface Results {
    name: string,
    height: string,
    weight: string,
    abilities: Array<{
        ability: {
            name: string
        }
    }>,
    stats: Array<{
        stat: {
            name: string
        }
        base_stat: number,
        effort: number
    }>,
    types: Array<{
        type: {
            name: string
        }
    }>
}