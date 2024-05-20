import pokebase as pb

pb.set_cache("cache")

def get_pokemon_list(limit=10, offset=0):
    return pb.pokemon(limit=limit, offset=offset)

def get_pokemon(name):
    return pb.pokemon(name)

def get_pokemon_species(name):
    return pb.pokemon_species(name)

def get_pokemon_evolution_chain(name):
    return pb.evolution_chain(name)

def main():
    # Get a Pokemon object
    pikachu = pb.pokemon("bulbasaur")
    #print the name of the pokemon
    print(pikachu.name)
    
if __name__ == "__main__":
    main()