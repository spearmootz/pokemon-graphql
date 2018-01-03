# pokemon-graphql
a graphql pokemon server built with node

### check it out at https://vast-sierra-18782.herokuapp.com/graphiql

Here is the query definition.

```
  pokemons: [Pokemon],
  pokemon(id: String, name: String): Pokemon
```


## sample query
```
{
  pokemons {
    id
    name
    type
    height
    weight
    total
    hp
    attack
    defense
    special_attack
    special_defense
    speed
    base_experience
    evolvesInto {
      id
      name
      type
      height
      weight
      total
      hp
      attack
      defense
      special_attack
      special_defense
      speed
    }
    evolvedFrom {
      id
      name
      type
      height
      weight
      total
      hp
      attack
      defense
      special_attack
      special_defense
      speed
    }
  }
}
```