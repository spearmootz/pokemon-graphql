module.exports = `
  type Pokemon {
    id: String,
		name: String,
		type: String,
		height: String,
		weight: String,
		total: Int,
		hp: Int,
		attack: Int,
		defense: Int,
		special_attack: Int,
		special_defense: Int,
		speed: Int,
		base_experience: Int,
    evolvesInto: Pokemon,
    evolvedFrom: Pokemon
  }
`;