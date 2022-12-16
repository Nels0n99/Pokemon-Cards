const {Pokemon} = require('../models')
const types = ['fire', 'water', 'grass', 'bug', 'rock', 'ground', 'flying', 'dark', 'fairy', 'psychic', 'fighting', 'normal', 'dragon', 'electric', 'poison', 'ice', 'ghost', 'steel'];
module.exports.viewAll = async function(req, res) {
    let searchTypes = ['All'];
    for(let i=0; i<types.length; i++){
        searchTypes.push(types[i])
    }
    let pokemons;
    let searchType = req.query.type ||'All';
    let searchRandom = req.query.random || false;
    if (searchType==='All'){
        pokemons = await Pokemon.findAll();
    } else {
        pokemons = await Pokemon.findAll({
            where: {
                type: searchType
            }
        })
    }
    if (pokemons.length > 0 && searchRandom){
        let randomIndex = getRandomInt(pokemons.length);
        pokemons = [pokemons[randomIndex]];
    }
    res.render('index', {pokemons, types:searchTypes, searchType, searchRandom});
}

module.exports.renderEditForm = async function(req, res, next){
    const pokemon = await Pokemon.findByPk(
        req.params.id
    );
    res.render('edit', {pokemon, types});
}

module.exports.updatePokemon = async function (req, res){
    await Pokemon.update(
        {
            class: req.body.class,
            name: req.body.name,
            hp: req.body.hp,
            icon: req.body.icon,
            image: req.body.image,
            secondicon: req.body.secondicon,
            move: req.body.move,
            damage: req.body.damage,
            thirdicon: req.body.thirdicon,
            fourthicon: req.body.fourthicon,
            secondmove: req.body.secondmove,
            seconddamage: req.body.seconddamage,
            weaknessicon: req.body.weaknessicon,
            weaknessamount: req.body.weaknessamount,
            resistanceicon: req.body.resistanceicon,
            retreaticon: req.body.retreaticon
        },
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/');
}

module.exports.deletePokemon = async function(req, res){
    await Pokemon.destroy(
        {
            where:
                {
                    id: req.params.id
                }
        }
    );
    res.redirect('/');
}

module.exports.renderAddForm = function(req,res){
    const pokemon = {
        class: "",
        name: "",
        hp: "",
        icon: "",
        image: "",
        secondicon: "",
        move: "",
        damage: "",
        thirdicon: "",
        fourthicon: "",
        secondmove: "",
        seconddamage: "",
        weaknessicon: "",
        weaknessamount: "",
        resistanceicon: "",
        retreaticon: "",
        type: types[0],
    };
    res.render('add', {pokemon, types});
}

module.exports.addPokemon = async function(req, res){
    await Pokemon.create(
        {
            class: req.body.class,
            name: req.body.name,
            hp: req.body.hp,
            icon: req.body.icon,
            image: req.body.image,
            secondicon: req.body.secondicon,
            move: req.body.move,
            damage: req.body.damage,
            thirdicon: req.body.thirdicon,
            fourthicon: req.body.fourthicon,
            secondmove: req.body.secondmove,
            seconddamage: req.body.seconddamage,
            weaknessicon: req.body.weaknessicon,
            weaknessamount: req.body.weaknessamount,
            resistanceicon: req.body.resistanceicon,
            retreaticon: req.body.retreaticon
        });
    res.redirect('/');
}

function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}